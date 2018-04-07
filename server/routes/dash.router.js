let express = require('express');
let petRouter = express.Router();
const pool = require('../modules/pool.js');

//ROUTER GET
petRouter.get('/', (req, res) => {
    let queryText = `SELECT "pets"."name", "pets"."type", 
                            "pets"."breed", "pets"."color", 
                            "owners"."firstname", "pets"."checkedIn" 
                     FROM "pets" 
                     JOIN "owners" 
                     ON "pets"."owners_id" = "owners"."id";`;
    pool.query(queryText).then( (result) => {
      const response = result.rows;
      console.log(response);
      res.send(result.rows);
    })
  });

//ROUTER POST
petRouter.post('/', (req, res) =>{
    let newPet = req.body;
    let queryText = `INSERT INTO "pets" ("name", "type", "breed", "color", "owners_id")
    VALUES ($1, $2, $3, $4, $5);`
    pool.query(queryText, [newPet.name, newPet.type, newPet.breed, newPet.color, newPet.owners_id])
    .then( (response) => {
        console.log('Successfully inserted', response);
        res.sendStatus(201);
    }).catch( (error) => {
        console.log('Error inserting TEST', error);
    });
});

//ROUTER DELETE 
petRouter.delete('/:id', (req, res)=>{
    let petId = req.params.id;
    console.log('successful router.delete', petId );
    const queryText = 'DELETE FROM "pets" WHERE "id" = $1;'
    pool.query(queryText, [petId]).then((response)=>{
      console.log(response);
      res.sendStatus(204);
    }).catch((err)=>{
      res.sendStatus(500);
    });
    
  });


module.exports = petRouter;