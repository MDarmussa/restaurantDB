const express = require('express')
const app = express();
const port = 3020;
const Sequelize = require('sequelize');
const { restaurant } = require('./models');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.get('/restaurants', async (req, res) => {
  const restaurants = await restaurant.findAll({
       attributes: ['name']
  });
  res.json(restaurants);
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})