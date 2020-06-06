
const documents = require("../models/bookSearch")




module.exports = function(app){

    app.get("./api/books", function (req, res){
        documents.find().then(data =>{
            res.json(data)
        })
        .catch(err =>{
            res.json(err)
        })
    })
}