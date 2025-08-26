import express from "express";
import { createApolloServer } from "./apollo/createApolloServer.js";
import http from 'http';
import cookieParser from "cookie-parser";
// import { createDB } from "./db/db-client.js";
import dotenv from "dotenv";

dotenv.config();
async function main() {
  // await createDB();
  const app = express();
  app.use(cookieParser())

  const apolloServer = await createApolloServer();

  await apolloServer.start();
  apolloServer.applyMiddleware({
    app, 
    path: '/api/graphql', 
    cors: {
      origin: ['https://preferchoi.site', 'http://localhost:3000', 'https://studio.apollographql.com'], 
      credentials: true,
    },
  });

  app.get('/api', (req, res) => {
    res.status(200).json({ message: "Welcome to the API!" })
  })

  const httpServer = http.createServer(app);

  httpServer.listen(process.env.PORT || 4000, () => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(`
            server start on => http://localhost:4000/api
            graphql playground => http://localhost:4000/api/graphql
            `);
    } else {
      console.log(`
            Production server Started...
            `);
    }
  })
}

main().catch(err => console.error(err));

