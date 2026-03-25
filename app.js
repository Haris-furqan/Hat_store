const express = require('express');
const app = express();
const itemRouter = require("./Routes/itemRouter")
const {categoryRouter} = require("./Routes/categoryRouter")
require('dotenv').config();
app.use(express.urlencoded({ extended: true }));

const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('homePage');
});
app.use('/items',itemRouter);
app.use('/category',categoryRouter)
const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
if(err)
{
console.log(err)}
  console.log(`Server running on port `+PORT);
});