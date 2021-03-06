let express = require('express');
let ownerRouter = express.Router();
const pool = require('../modules/pool.js');

//GET existing owners from Postgres
ownerRouter.get('/', (req, res)=>{
    let queryText = `SELECT "owners".*, count("pets") as "numOfPets" 
    FROM "owners" LEFT JOIN "pets"
    ON "owners"."id" = "pets"."owners_id"
    GROUP BY "owners"."id";`
    pool.query(queryText).then((result)=>{
        const response = result.rows;
        console.log(response);
        res.send(result.rows);
    }).catch((error) => {
        console.log('error in /owners GET', error);
        res.sendStatus(500)
    });//end catch
});//end get

//POST - add new owner to Postgres
ownerRouter.post('/', (req, res) =>{
    let newOwner = req.body;
    let queryText = `INSERT INTO "owners" ("firstname", "lastname", "phone", "email")
    VALUES ($1, $2, $3, $4);`
    pool.query(queryText, [newOwner.firstname, newOwner.lastname, newOwner.phone, newOwner.email ])
    .then( (response) => {
        console.log('Successfully inserted', response);
        res.sendStatus(201);
    }).catch( (error) => {
        console.log('Error inserting', error);
    });//end catch
});//end post

//DELETE owner on Postgres
ownerRouter.delete('/:id', (req, res)=>{
    let ownerId = req.params.id;
    const queryText = 'DELETE FROM "owners" WHERE "id" = $1;'
    pool.query(queryText, [ownerId]).then((response)=>{
      console.log(response);
      res.sendStatus(204);
    }).catch((err)=>{
      res.sendStatus(500);
    });//end catch
  });//end delete

module.exports = ownerRouter;
