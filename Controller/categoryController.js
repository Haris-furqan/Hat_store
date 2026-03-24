const {getAllCategories,addCategory} = require("../db/queries")
function addCategoryget(req,res)
{
    res.render("addCategoryForm")
}

async function addCategoryPost(req,res)
{
    const {categoryName} = req.body;
    await addCategory(categoryName);
    res.redirect("/category/add")
    
}

module.exports = {addCategoryget,addCategoryPost}