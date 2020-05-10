import { GraphQLModule } from '@graphql-modules/core';
import { AuthModule } from './auth.module';
import { UserModule } from './user.module';

export const AppModule = new GraphQLModule({
  imports: [AuthModule, UserModule]
});
