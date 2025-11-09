const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const {listingSchema} = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner} = require("../middleware.js");

const listingController = require("../controllers/listings.js");


const multer = require("multer");
const{storage} = require("../cloudConfig.js");
const upload = multer({storage});



// const validateListing = (req,res,next)=>{
//     let{error} =  listingSchema.validate(req.body);
//    if(result.error){
//     let errmsg =error.details.map((el)=>el.message).join(",");
//     throw new ExpressError(400,errmsg);
//    } else{
//     next();
//    }
// };


router
 .route("/")
 // index and create route
 .get(wrapAsync(listingController.index))
 .post(isLoggedIn,
    upload.single('listing[image]'),
 wrapAsync(listingController.createListing)
);




// new route to show form to create new listing

router.get("/new",isLoggedIn,listingController.renderNewForm);


router.route("/:id")
// show , update,delete route
.get(wrapAsync(listingController.showListing))
.put(isLoggedIn,isOwner,upload.single("listing[image]"),wrapAsync(listingController.updateListing))
.delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));




//edit route to show edit form for a listing

router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm));


module.exports = router;