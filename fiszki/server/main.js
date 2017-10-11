import { Meteor } from 'meteor/meteor';
import {Words} from '../imports/words.js';
import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from '../imports/schema.js';

Meteor.startup(() => {
  // code to run on server at startup
});
const prepare = (o) => {
    o._id = o._id.toString();
    return o;
}
const resolvers = {
    Query: {
        words: function(){ 
            return (Words.find({}).fetch());
        }
    },
    Mutation: {
        insertWord: (root, args) => {
            Words.insert({
                _id: args.input._id,
                polish: args.input.polish,
                english: args.input.english,
                userId: args.input.userId
                });
        },
        removeWord: (root, args) => {
            Words.remove(parseInt(args.id));
        }
    }
}
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

createApolloServer({
    schema
});
