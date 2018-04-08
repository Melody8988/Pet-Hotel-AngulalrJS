let express = require('express');
let petRouter = express.Router();
const pool = require('../modules/pool.js');

//ROUTER GET
petRouter.get('/', (req, res) => {
    let queryText = `SELECT "pets"."name", "pets"."type", 
                            "pets"."breed", "pets"."color", "pets"."id",
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
    console.log(req.params, 'req.params test');
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

  //ROUTER CHANGE STATUS 
 petRouter.put('/:id', (req, res)=>{

   console.log('PUT for dash checkin', req.body, req.params);
   const checkBoolean = req.body;
   const petId = req.params.id;
   const queryText = `UPDATE "pets" SET "checkedIn" = $1 WHERE "id" = $2;`;
   pool.query(queryText, [checkBoolean.checkedIn, petId])
   .then((response)=>{
     res.sendStatus(200);
   }).catch((error)=>{
     console.log('error updating checkin status on database', error);
     res.sendStatus(500);
   })
 });

module.exports = petRouter;