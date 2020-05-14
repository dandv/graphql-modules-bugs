import { GraphQLModule } from '@graphql-modules/core';
import gql from 'graphql-tag';
import { userDbModel } from './user.module';

// FAIL, so give up on the simplicity of importing directly. Let's use dependency injection!
console.log('userDbModel.id imported in AuthModule should be "db model exported from User module", got:', userDbModel?.id);

export const AuthModule = new GraphQLModule({
  typeDefs: gql`
    type Query {
      authed: String
    }
  `,
  resolvers: {
    Query: {
      authed: (root, args, { injector }) => {
        console.log('This is the authed resolver');
        const injected = injector.get(userDbModel);
        return 'Unreachable code due to swallowed error' + injected;
      }
    }
  },
});
