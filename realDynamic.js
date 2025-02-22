// Setup - Creating port, creating first page, and then opening port
const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('staticPages'));


app.get('/sphere/:radius', (req, res) => {
//intake of radius measurement
  const radius = req.params.radius;

  const diameter = radius * 2;
  const surfaceArea = (4 * 3.14159 * 2 * radius).toFixed(2);
  const volume = (4 / 3 * 3.14159 * radius * radius * radius).toFixed(2);
  const gold = (volume * 19.3).toFixed(2);
  const silver = (volume * 10.49).toFixed(2);
  const hardwood = (volume * 0.59).toFixed(2);
  const air = (volume * 0.0013).toFixed(2);
  const water = (volume * 1.0).toFixed(2);
// Making a shortened volume variable now that other calcs are done with
  const shortVolume = (volume*1).toFixed(2);

//writing out to webpage
  res.send(`
  <h1>With a radius of ${radius} centimeters, your sphere would have: </h1>
  <div>A diameter of ${diameter} centimeters</div>
  <div>A surface area of ${surfaceArea} centimeters squared</div>
  <div>A volume of ${shortVolume} centimeters cubed</div>
  <div>A weight of ${gold} grams if it were made of gold</div>
  <div>A weight of ${silver} grams if it were made of silver</div>
  <div>A weight of ${hardwood} grams if it were made of hardwood</div>
  <div>A weight of ${air} grams if it were made of air</div>
  <div>A weight of ${water} grams if it were made of water</div>
  `);
});


// Middleware - using this to track website updates as you interact with it
//Startup message
app.listen(port, () => {
  console.log(`Clicky-clicky -> http://localhost:${port}`);
});
//Update message
app.use((req, res, next) => {
  console.log(`Update at ${new Date()}`);
  next();
});