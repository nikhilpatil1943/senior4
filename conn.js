//code for connection
const mongoose= require("mongoose")
const DB="mongodb+srv://pranjal:znrwuSEAT6dJ6pn5@cluster0.kijazdf.mongodb.net/mydatabase?retryWrites=true&w=majority" //stores the database link
mongoose.set("strictQuery", false);
const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
var random = mongoose.connect(DB,connectionParams)
    .then( () => {
        console.log('Connected to the database')
    }).catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })
