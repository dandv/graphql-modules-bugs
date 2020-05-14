import { UserModule } from './app/user.module';
import { ApolloServer } from 'apollo-server';

const server = new ApolloServer({
  modules: [UserModule],
  context: session => session
});

server.listen(4000).then(() => console.log('Listening on port 4000...'));
