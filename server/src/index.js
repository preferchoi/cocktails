import express from "express";
import { createApolloServer } from "./apollo/createApolloServer.js";
import http from 'http';
import cookieParser from "cookie-parser";
import { createDB } from "./db/db-client.js";
import dotenv from "dotenv";

dotenv.config();
async function main() {
  await createDB();
  const app = express();
  app.use(cookieParser())

  const apolloServer = await createApolloServer();

  await apolloServer.start();
  apolloServer.applyMiddleware({
    app, cors: {
      origin: ['http://localhost:3000', 'https://studio.apollographql.com'],
      credentials: true,
    },
  });

  app.get('/', (req, res) => {
    res.status(200).send()
  })

  const httpServer = http.createServer(app);

  httpServer.listen(process.env.PORT || 4000, () => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(`
            server start on => http://localhost:4000
            graphql playground => http://localhost:4000/graphql
            `);
    } else {
      console.log(`
            Production server Started...
            `);
    }
  })
}

main().catch(err => console.error(err));

