const express = require('express')

const router = express.Router()

const userSignUp = require("../controller/user/userSignUp")
const userSignIn = require("../controller/user/userSignIn")
const userDetailsController = require("../controller/user/userDetails")
const authToken = require('../middleware/authToken')
const userLogout = require('../controller/user/userLogout')
const allUsers = require('../controller/user/allUsers')
const updateUser = require('../controller/user/updateUser')
const UploadProductController = require('../controller/product/uploadProduct')
const getProductController = require('../controller/product/getProduct')
const updateProductController = require('../controller/product/updateProduct')
const getCategoryProduct = require('../controller/product/getCategoryProductOne')
const demoController = require('../controller/product/demo')
const demoControllerPost = require('../controller/product/DemoPost')
const getCategoryWiseProduct = require('../controller/product/getCategoryWiseProduct')
const getProductDetails = require('../controller/product/getProductDetails')
const addToCartController = require('../controller/user/addToCartController')
const countAddToCartProduct = require('../controller/user/countAddToCartProduct')
const addToCartViewProduct = require('../controller/user/addToCartViewProduct')
const updateAddToCartProduct = require('../controller/user/updateAddToCartProduct')
const deleteAddToCartProduct = require('../controller/user/deleteAddToCartProduct')
const updateUserProfile = require('../controller/user/updateUserProfile')
const shoppingHistory = require('../controller/user/shoppingHistory')
const getShoppingHistory = require('../controller/user/getShoppingHistory')

//demo
router.get("/demo", demoController)
router.post("/demo-post", demoControllerPost)

//user
router.post("/sign-up", userSignUp)
router.post("/sign-in", userSignIn)
router.get("/user-datails", authToken, userDetailsController)
router.get("/userLogout", userLogout)
router.post("/update-user-profile", authToken, updateUserProfile)
router.post("/payment", authToken, shoppingHistory)
router.get("/shopping-history",authToken, getShoppingHistory )

//admin panel
router.get("/all-user", authToken, allUsers )
router.post("/update-user",authToken, updateUser)

//product
router.post("/upload-product", authToken, UploadProductController)
router.get("/get-product", getProductController)
router.post("/update-product", authToken, updateProductController)
router.get("/get-categoryProduct", getCategoryProduct)
router.post("/category-product", getCategoryWiseProduct)
router.post("/product-details", getProductDetails)

//user add to cart
router.post("/addtocart",authToken, addToCartController)
router.get("/countAddToCartProduct", authToken, countAddToCartProduct)
router.get("/view-card-product", authToken, addToCartViewProduct)
router.post("/update-cart-product",authToken,updateAddToCartProduct)
router.post("/delete-cart-product",authToken,deleteAddToCartProduct)


module.exports = router