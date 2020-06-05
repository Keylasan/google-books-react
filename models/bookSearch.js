const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const book = new Schema(
    {
    title: {
        type: String,
    },
    author: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    link: {
        type: String,
    }
});

const documents = mongoose.model("documents", book);
module.exports=documents;
