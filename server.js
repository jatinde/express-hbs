const express = require('express');
const hbs = require('hbs');
const app = express();

const port = process.env.PORT || 3000

hbs.registerPartials(`${__dirname}/views/partials`)
app.set('view engine', 'hbs')
app.use(express.static(`${__dirname}/public`))

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
})

app.get("/", (req, res) => {
    res.render('home.hbs', {
        "pageTitle": "Home",
        "welcomeMessage": "Welcome to the home page of website."
    })
})

app.get("/about", (req, res) => {
    res.render('about.hbs', {
        "pageTitle": "About"
    });
})

app.listen(port, () => { console.log(`Server is up on port ${port}`);});