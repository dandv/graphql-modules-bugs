import { GraphQLModule } from '@graphql-modules/core';
import { Request } from 'express';
import gql from 'graphql-tag';
import { UserModule } from './user.module';

export const AuthModule = new GraphQLModule({
  typeDefs: gql`
    type Query {
      me: User
    }

    type User {
      id: String
    }
  `,
  resolvers: {
    User: {
      id: user => user._id
    },
    Query: {
      me: (root, args, context) => context.authenticatedUser,
      hello: (root, args, context) => {
        console.log('The context:', context);
        console.log('The context authHeader:', context.authHeader);
        console.log('The authenticatedUser from the context:', context.authenticatedUser);
        return 'World!'
      }
    }
  },
  imports: [UserModule],
  context: async (session: { req: Request }) => {
    const authHeader = session.req.headers.authorization;
    return {
      authHeader,
      authenticatedUser: {
        _id: 1,
        username: 'me'
      }
    };
  }
});
