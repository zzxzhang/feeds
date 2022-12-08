import  express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import * as url from 'url';

import  apiRouter from './routes/feeds.js'

const app = express();
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", apiRouter);

const listener = app.listen(8080, function() {
  console.log("Listening on port " + listener.address().port);
});
