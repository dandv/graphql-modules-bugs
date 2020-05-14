import { graphql } from 'graphql';
import { UserModule, userDbModel } from './app/user.module';

(async function main() {
  // OK
  console.log('userConst imported in test should be "db model exported from User module", got:', userDbModel);

  const response = await graphql(UserModule.schema,
    `{ hello }`,
  );
  console.log('Expected "world!", got:', response.data.hello);
})();
