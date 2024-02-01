const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const users = [
  { id: 1, email: 'test@example.com', password: 'password123' },
  // Add more users as needed
];

// Read the private key from the file
const privateKeyPath = 'private.key';
const privateKey = fs.readFileSync(privateKeyPath, 'utf-8');

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    const token = jwt.sign({ userId: user.id, email: user.email }, privateKey, {
      algorithm: 'RS256',
      expiresIn: '1h',
    });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.get('/welcome', (req, res) => {
  const token = req.query.token;

  try {
    // Verify the token
    const decoded = jwt.verify(token, privateKey);

    // Display the welcome message on successful token verification
    res.send(`<h1>Welcome ${decoded.email}!</h1>`);
  } catch (error) {
    // Handle token verification errors
    console.error('Token verification failed', error);
    res.status(401).send('Unauthorized');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

