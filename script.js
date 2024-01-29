const {MongoClient} = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

function getData(){
    let result = client.connect();
    const promiseThatWillResolve = Promise.resolve('data');
    const promiseThatWillReject = Promise.reject('error');
    console.log(url)
}
