const { name } = require("ejs");
const {getAllItems,getSpecificItems,getAllCategories,addItems,removeItems,editItem,getAllItemsWithCategories} = require("../db/queries")
const {validationResult} = require("express-validator")

async function removeItem(req,res) {
    const id = req.params.id;
    await removeItems(id);
    res.redirect("/items")
}
async function getItems(req,res)
{
    const rows = await getAllItemsWithCategories()
    rows.forEach(row=>
    {
        row.UpdateForm = false;
    }
    )
    res.render('items',{items:rows,removeItem:removeItem});
    console.log(getAllItems());
}


async function addItemsGet(req,res)
{
    const categories = await getAllCategories();
    res.render('addItemsForm',{category:categories})
}

async function editItemsGet(req,res)
{
    id = req.params.id;
    const rows = await getSpecificItems(id);

    res.render("editItem",{item:rows[0]})
}

async function UpdateItem(req,res) {
    const id = req.params.id;
    const name = req.body.itemName;
    const quantity = req.body.Quantity
    editItem(id,name,quantity)
    res.redirect("/items")
}
async function addItemsPost(req,res)
{
    try
    {

        const errors = validationResult(req);
        if(!errors.isEmpty())
            {
                
                return res.status(400).render('error',{errors:errors.array()})
            }
        }
        catch(err)
        {
            res.send(err);
        }
            
            const {itemName,category,qty} = req.body;
            await addItems(itemName,category,qty);
            res.redirect("/items")
        

}



module.exports  = {getItems,addItemsGet,addItemsPost,removeItem,editItemsGet,UpdateItem}

