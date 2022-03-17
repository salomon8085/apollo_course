const {gql} =require("apollo-server-express");

const typeDefs= gql`

type TaskTypeDef{
    id: ID
    title: String
    description: String 
}

type Query{
   ping: String!
   getAllTasks: [TaskTypeDef]
   getTask(
       id: String
   ):TaskTypeDef
}

input TaskTypeDefInput{
    title: String
    description: String 
}

type Mutation{
    createTask(
        title: String,
        description: String
    ): TaskTypeDef
    deleteTask(
        id: String
        ): TaskTypeDef
    updateTask(
        id: String!,
        task: TaskTypeDefInput!
    ): TaskTypeDef
}
`;

module.exports= {typeDefs};