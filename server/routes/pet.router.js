let express = require('express');
let router = express.Router();
const pool = require('../modules/pool.js');

//GET from pg
router.get('/', (req, res) => {
    let queryText = 'SELECT * FROM pets';
    pool.query(queryText).then( (result) => {
      const response = result.rows;
      console.log(response);
      res.send(result.rows);
    })
  });

//POST to pg
router.post('/', (req, res) =>{
    let newPet = req.body;
    
    let queryText = `INSERT INTO "pets" ("name", "type", "breed", "color", "owner")
    VALUES ($1, $2, $3, $4, $5);`
    pool.query(queryText, [newPet.name, newPet.type, newPet.breed, newPet.color, newPet.owner])
    .then( (response) => {
        console.log('Successfully inserted', response);
        res.sendStatus(201);
    }).catch( (error) => {
        console.log('Error inserting', error);
    });
});




module.exports = router;