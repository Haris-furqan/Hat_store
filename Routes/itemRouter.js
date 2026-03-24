const {Router} = require("express");
const itemRouter = Router();
const {getItems,addItemsGet, addItemsPost,removeItem,editItemsGet,UpdateItem} = require("../Controller/itemsController")
const {body} = require("express-validator")

const validateItem = [
    body('itemName').isString().trim()
    .notEmpty().withMessage("Item name cannot be empty")
    .isLength({max:100}).withMessage("Name should not be longer than 100 characters")

    ,body('category').
    isInt().withMessage("Category Must be Int"),

    body('qty')
    .isInt({min:0}).withMessage("Quantity cannot be less than 0")
    

]
itemRouter.get("/",getItems);
itemRouter.get("/add",addItemsGet)
itemRouter.post("/add",validateItem,addItemsPost)
itemRouter.post("/:id/delete",removeItem)
itemRouter.post("/:id/edit",editItemsGet)
itemRouter.post("/:id/update",UpdateItem)

module.exports = itemRouter