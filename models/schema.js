const mongoose = require("mongoose")

const soccerSchema = new mongoose.Schema ({
    name: {type: String, require: true},
    height: {type: String, require: true},
    weight: {type: String, require: true},
    foot: {type: String, require: true},
    nationality: {type: String, require: true},
    oldClub: {type: String, require: true},
    position: {type: String, require: true},
    number: {type: Number, require: true}
}, {timestamp: true})

const Soccer = mongoose.model("Soccer", soccerSchema)
module.exports = Soccer;