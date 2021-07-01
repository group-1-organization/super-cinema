const express = require('express');
const router = express.Router();

//create first route
const Movie = require('./Movie');

//create movie
router.post('/movies', async (req, res) => {
    try {
        const movie = new Movie({
            Title: req.body.Title,
            Year: req.body.Year,
            Runtime: req.body.Runtime,
            Genre: req.body.Genre,
            Plot: req.body.Plot,
            Poster: req.body.Poster
        });
        console.log("Log: " + movie);
        await movie.save();
        res.send(movie);
    } catch {
        res.status(400);
        res.send({ error: "bad request" });
    }
})

//Get all movie
router.get('/movies', async (req, res) => {
    try {
        const movie = await Movie.find();
        res.send(movie);
    } catch {
        res.status(404);
        res.send({ error: "movie doesn't exist" });
    }
})

//find movie
router.get('/movies/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.send(movie);
    } catch {
        res.status(404);
        res.send({ error: "movie doesn't exist" });
    }
})

//update doesn't work yet
router.patch('/movies/:id', async (req, res) => {
    console.log(req.body);
    try {
        const movie = await Movie.findById(req.params.id);
        movie.Title = req.body.Title;
        await movie.save();
        res.send(movie);
    } catch {
        res.status(404);
        res.send({ error: 'movie does not exist' })
    }
});

//Delete
router.delete('/movies/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        await movie.deleteOne();
        res.send(movie);
    } catch {
        res.status(404);
        res.send({ error: "movie doesn't exist" });
    }
});

module.exports = router;