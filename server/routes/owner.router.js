let express = require('express');
let ownerRouter = express.Router();
const pool = require('../modules/pool.js');

//GET
ownerRouter.get('/', (req, res)=>{
    let queryText = 'SELECT * FROM owners';
    pool.query(queryText).then((result)=>{
        const response = result.rows;
        res.send(result.rows);
    }).catch((error) => {
        console.log('error in /owners GET', error);
        res.sendStatus(500)
    })
});

//POST
ownerRouter.post('/', (req, res) =>{
    let newOwner = req.body;
    let queryText = `INSERT INTO "owners" ("name")
    VALUES ($1);`
    pool.query(queryText, [newOwner.name])
    .then( (response) => {
        console.log('Successfully inserted', response);
        res.sendStatus(201);
    }).catch( (error) => {
        console.log('Error inserting', error);
    });
});


module.exports = ownerRouter;
