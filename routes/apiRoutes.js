const fs = require('fs')
const path = require('path');
let notesDb = require('../db/db.json');
const dbPath = path.join(__dirname, "../db/db.json")


module.exports = function (app) {

    app.get("/api/notes", function (req, res) {
        console.log(notesDb)
        res.json(notesDb);
    });


    app.post("/api/notes", function (req, res) {
        req.body.id = notesDb.length
        notesDb.push(req.body)
        console.log(notesDb)

        writeFile(notesDb)
        res.json(true)
    });

    app.get("/api/notes/:id", function (req, res) {
        let noteId = req.params.id
        const filteredNotes = notesDb.filter((obj) => obj.id == noteId)
        if (filteredNotes.length > 0) {
            res.json(filteredNotes)
        } else {
            res.send("not found")
        }
    })

    app.delete("/api/notes/:id", function (req, res) {
        let noteId = parseInt(req.params.id)
        console.log(typeof (noteId))

        // console.log(notesDb[noteId])

        console.log("Note ID is " + noteId)

        notesDb = notesDb.filter((obj) => obj.id != noteId)

        console.log("---------")
        console.log(notesDb)
        writeFile(notesDb)
        res.json(true)
    })
}

function writeFile(data) {
    const notesJSON = JSON.stringify(data)

    fs.writeFile(dbPath, notesJSON, (err) => {
        if (err) throw err;
        console.log('the file has been saved!')
    })
}