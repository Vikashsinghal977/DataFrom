const {MongoClient} = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function getData(){
    try{
        const database = client.db("sample_myflex");
        const movies = database.collection("movies");

        // ading title 
        const query = {title:"Money hiest"};
        const movie = await movies.findOne(query);

        console.log(movie);
    } finally{
        await client.close();
    }
}
getData().catch(console.dir);
