import { graphql } from 'graphql';
import { UserModule, userDbModel } from './app/user.module';

(async function main() {
  // OK
  console.log('userDbModel.id imported in test should be "db model exported from User module", got:', userDbModel.id);

  const response = await graphql(UserModule.schema,
    `{ authed }`,
  );
  console.log('Expected "Unreachable code due to swallowed error", got:', response.data.authed);
})();
