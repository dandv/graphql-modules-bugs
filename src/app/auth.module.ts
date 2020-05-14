import { GraphQLModule } from '@graphql-modules/core';
import { userDbModel } from './user.module';

// FAIL
console.log('userDbModel imported in AuthModule should be "db model exported from User module", got:', userDbModel);

export const AuthModule = new GraphQLModule({
  context: async (session) => {
    return {
      authenticatedUser: {
        _id: 1,
        username: 'me'
      }
    };
  }
});
