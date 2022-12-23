const mongoose = require("mongoose")

const connectDatabase = () => {
    console.log("Concectando...")

    mongoose.connect("mongodb+srv://lia:2904@livrosdatabase.m6fexly.mongodb.net/?retryWrites=true&w=majority",
    {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log("Mongo DB Atlas ON")).catch((error) => console.log (error));
};

module.exports = connectDatabase