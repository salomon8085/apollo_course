require("dotenv").config();
const express = require("express");
const {ApolloServer} =require("apollo-server-express");
const {typeDefs}=require("./graphql/typeDefs");
const {resolvers}=require("./graphql/resolvers");
const {connectDB}= require("./database/dbConnection");
const { config } = require("dotenv");

 const app= express();
 connectDB();

 app.get("/", (req, res)=>{
     return res.send("Welcom to the Jungle of Express!!!");
 });

 module.exports = app;

const start= async ()=>{

    const apolloServer= new ApolloServer({
        typeDefs:typeDefs,
        resolvers:resolvers
    });

    await apolloServer.start();
    apolloServer.applyMiddleware({app:app});

    app.use("*",(req,res)=>{
        res.status(404).send("Not Found.");
     });

    app.listen(process.env.PORT,()=>{
        console.log("Server on port: ",process.env.PORT);
    });
};

start();