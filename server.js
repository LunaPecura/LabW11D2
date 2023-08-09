const express = require("express");
const app = express();
const port = 3000;

const answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]


app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.get('/greeting', (req, res) => {
	res.send("<h1>Hel-loooooo Newman</h1>");
});

app.get('/greeting/:name', (req, res) => {
	res.send(`<h1>Hel-loooooo ${req.params.name}</h1>`)
}) 

app.get('/tip/:total/:perc', (req, res) => {
	res.send(`<h1>Tip: ${req.params.total * req.params.perc / 100}</h1>`)
}) 

app.get('/magic/:question', (req, res) => {
	const index = Math.floor(Math.random()*answers.length)
	res.send(`<h1>Your question: ${req.params.question}?</h1>` +
				`<h2>Answer: ${answers[index]}</n2>`);
}) 



app.listen(port, (req, res) => {
	console.log(`Server is running on port ${port}`);
})
