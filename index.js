const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
app.use(cors());
app.use(express.json());

// Render के लिए पोर्ट (Bulletproof)
const PORT = process.env.PORT || 5000;

// Health Check
app.get('/', (req, res) => res.send('🚀 Codeblade Engine is Online!'));

// AI Scan Endpoint (इसे तू बाद में कस्टमाइज़ कर सकता है)
app.post('/api/scan', async (req, res) => {
    try {
        const { address, chain } = req.body;
        // यहाँ तेरा AI लॉजिक आएगा
        res.json({ message: "Scan Successful", status: "Clean", provider: "Adil AI" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
