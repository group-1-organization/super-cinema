const express = require('express');

const mongoose = require('mongoose');

const routes = require('./routes');

mongoose.connect('mongodb://localhost/cinema', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        const app = express();
        app.use(express.json());
        app.use('/cinema', routes);

        app.listen(5000, ()
            => {
            console.log("server has started");
        });
    })