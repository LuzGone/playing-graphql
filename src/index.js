import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `

    type Character{
        name: String
        power: String
        age: Int
    }

    type Query {
        characters : [Character]
        hello : String
    }
`

const characters = [
    {
        name: "Frieren",
        power: "Magic",
        age: 1000
    },
    {
        name: "Legolas",
        power: "Good Aiming",
        age: 2931
    },
    {
        name: "Celebrimbor",
        power: "Ring of Power",
        age: 2334
    },
    {
        name: "Clark Kent",
        power: "Super Everything",
        age: 45
    },
    {
        name: "Bruce Wayne",
        power: "None",
        age: 45
    },
    {
        name: "Bane Dorrance",
        power: "Steroids",
        age: 25
    },
         
]

const resolvers = {
    Query:{
        hello:() => "Olá Mundo",
        characters: () => characters
    }
}

const server = new ApolloServer({typeDefs,resolvers})

const {url} = await startStandaloneServer(server, {listen:{port:4000}})
console.log(`Server started at ${url}`)