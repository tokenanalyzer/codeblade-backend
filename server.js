const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 10000;

app.get('/', (req, res) => {
    res.status(200).send('Codeblade Engine is Online!');
});

app.post('/api/scan', async (req, res) => {
    res.json({ message: "Connected to Adil AI" });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
