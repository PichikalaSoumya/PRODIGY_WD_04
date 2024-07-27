const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;
    // Handle form submission (e.g., store in database, send email, etc.)
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    res.json({ message: 'Form submitted successfully' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
