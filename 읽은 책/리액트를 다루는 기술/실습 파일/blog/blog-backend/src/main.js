require("dotenv").config();
import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
import mongodb from "mongodb";

import api from "./api";

const { MongoClient } = mongodb;

const { PORT, MONGO_URI } = process.env;

const client = new MongoClient(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  try {
    const collection = client.db("test").collection("devices");
    console.log("MongoDB Connected");
    client.close();
  } catch (e) {
    console.log(e);
  }
});

const app = new Koa();
const router = new Router();

router.use("/api", api.routes());

app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(port, () => {
  console.log("Listening to port %d", port);
});
