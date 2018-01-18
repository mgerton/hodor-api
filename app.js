const app = require('express')();

const Hodor = require('hodor').Hodor;
const argv = require('yargs').argv;

const port = argv.p || 8080;

// Hodor all the things
app.all('*', (req, res) => {
	const hodor = Hodor.Hodor('hodor').split(' ')[0];
	res.json({ hodor });
});

app.listen(port, () => console.log(`Running on port ${port}.`));
