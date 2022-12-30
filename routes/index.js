const app = require('express').Router();

//import router for notes
const notesRouter = require('./notes');
app.use('/notes', notesRouter);
module.exports= app;