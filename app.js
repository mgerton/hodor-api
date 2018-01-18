const app = require('express')();

const hodor = require('hodor');
const argv = require('yargs').argv;

const port = argv.p || 8080;

// Hodor all the things
app.all('*', (req, res) => res.json({ hodor: hodor() }));

app.listen(port, () => console.log(`${hodor()} on port ${port}.`));
