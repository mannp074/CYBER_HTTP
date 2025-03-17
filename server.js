const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to My Web Service!");
});

app.get('/api/hello', (req, res) => {
    res.json({ message: "Hello, World!" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
