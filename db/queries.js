const pool = require("./db");

async function getAllItems()
{
    const {rows} = await pool.query("SELECT * FROM items");
    console.log("from db");
    return rows;
}

async function getSpecificItems(id) {
    const {rows} = await pool.query("SELECT * FROM items WHERE item_id=$1",[id])
    return rows;
}

async function addItems(name,category,qty)
{
    await pool.query(`INSERT INTO items (item_name,category_id,quantity) VALUES($1,$2,$3)`,[name,category,qty])
}

async function addCategory(category)
{
    await pool.query(`INSERT INTO category(category_name) VALUES($1)`,[category])
}

async function removeItems(id)
{
    await pool.query(`DELETE FROM items WHERE item_id=$1`,[id])
}

async function editItem(id,updatedName,updatedQuantity) {
    await pool.query(`UPDATE items
        SET item_name=$1,
        quantity=$2
        WHERE item_id=$3`
        ,[updatedName,updatedQuantity,id])
    
}
async function getAllCategories()
{
    const {rows} = await pool.query("SELECT * FROM category")
    return rows;
}


module.exports = {getAllCategories,getAllItems,addItems,addCategory,removeItems,getSpecificItems,editItem}