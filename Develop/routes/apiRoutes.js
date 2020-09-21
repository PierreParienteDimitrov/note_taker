const fs = require('fs')

const path = require('path')

const notesDb = require('../db/db.json');

const dbPath = path.join(__dirname, "../db/db.json")

// console.log(typeof (notesDb))
// console.log(notesDb)

module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        console.log(notesDb)
        res.json(notesDb);
    });


    app.post("/api/notes", function (req, res) {


        req.body.id = notesDb.length

        notesDb.push(req.body)
        console.log(notesDb)

        const notesJSON = JSON.stringify(notesDb)

        // fs.writeFile(dbPath, notesJSON, (err) => {
        //     if (err) throw err;
        //     console.log('the file has been saved!')
        // })

        // .then(() => {
        //     fs.readFileSync(dbPath, 'utf8', function (err, data) {
        //         if (err) throw err
        //         console.log(data)
        //         res.json(data)

        //     })
        // })
        res.json(true)




    });


}