const express = require('express');
const path = require('path');
const fs = require('fs');
const api = require('./routes/index');

const PORT = process.env.PORT || 3001;

const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', api);

//route to index.html
app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '/pubic/index.html'))
);

//route to notes.html
  app.get('/notes',(req, res)=> 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
  );


  app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);