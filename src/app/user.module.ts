import { GraphQLModule } from '@graphql-modules/core';
import gql from 'graphql-tag';
import { AuthModule } from './auth.module';

export const userDbModel = 'db model exported from User module';

export const UserModule = new GraphQLModule({
  imports: [
    AuthModule
  ],
  typeDefs: gql`
    type User {
      id: String
      username: String
    }
    type Query {
      hello: String
    }
  `,

  resolvers: {
    Query: {
      hello() {
        return 'world!';
      }
    },
  }
});
