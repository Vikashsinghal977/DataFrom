
const {MongoClient} = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function getData(){
    try{
        const database = client.db("Employment");
        const movies = database.collection("programing");

        // ading title 
        const query = {name:"kaksdbkjdskj", class:"BCA221"};
        const movie = await movies.insertOne(query);

        console.log(movie);
    } finally{ 
        await client.close();
    }
}
getData().catch(console.dir);
