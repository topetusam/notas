Claro, aquí tienes la transcripción del código que me proporcionaste:

JavaScript
const express = require("express");
const error = require("./middleware/errorHandler");
const https = require("https");
const fs = require("fs");

const privateKey = fs.readFileSync('./private.key');
const certificate = fs.readFileSync('./certificate.crt');

const   
 app = express();

app.use(express.json());
app.use(error.jsonParseErrorHandler);

app.post("/", (req, res) => {
  res.status(200).json(req.body);
});

const httpsServer = https.createServer({
  key: privateKey,
  cert: certificate
}, app);

const config = {
  host: process.env.EXPRESS_HOST,
  port: process.env.EXPRESS_PORT
};

httpsServer.listen(config, () => {
  console.log(`https://${config.host}:${config.port}`);
});