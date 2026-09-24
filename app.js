const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Welcome! AWS CI/CD Pipeline with CodePipeline, CodeBuild, and CodeDeploy'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
