export default typeDefs = [`
type Word{
    _id: String,
    polish: String,
    english: String,
    userId: String
}
input WordInput{
    _id: String,
    polish: String,
    english: String,
    userId: String
}
type Query {
    words(_id: Int): [Word],
  }
type Mutation{
    insertWord(input: WordInput!):Boolean,
    removeWord(id: String!):Boolean
}
`];