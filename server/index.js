// server/index.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');
// const { PrismaStudio } = require('@prisma/studio');
const studio = new PrismaStudio();


const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(bodyParser.json());
studio.start();

app.get('/test', (req, res) => {
  res.send('API is working');
});

app.get("/test-db", async (req, res) => {
  try {
    const users = await prisma.user_reg.findMany(); // or whatever your model is called
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send("DB Error");
  }
});


app.post('/register', async (req, res) => {
  const { name, contact, email, dob, address, password } = req.body;

  try {
    await prisma.user_reg.create({
      data: {
        name,
        contact,
        email,
        dob: new Date(dob), // ensure this is valid Date format
        address,
        password
      }
    });

    res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user_reg.findFirst({
      where: {
        email,
        password
      }
    });

    if (user) {
      res.json({ success: true, name: user.name });
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Login failed' });
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});



