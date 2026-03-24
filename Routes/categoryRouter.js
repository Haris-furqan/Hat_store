const {Router} = require("express");
const {addCategoryget,addCategoryPost} = require("../Controller/categoryController")
const categoryRouter = Router();
categoryRouter.get("/add",addCategoryget)
categoryRouter.post("/add",addCategoryPost)
module.exports = {categoryRouter}