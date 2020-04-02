const Flight = require('../models/flight');

const newFlight = (req, res) => {
    res.render('flights/new');
  }

  

  const create = (req, res) => {
    console.log(req.body);
    // convert onTime checkbox of nothing or "on" to boolean
    //req.body.onTime = !!req.body.onTime;
    // remove whitespace next to commas
    //req.body.cast = req.body.cast.replace(/\s*, \s*/g, ',');
    // split if it's not an empty string
    //if (req.body.cast) req.body.cast = req.body.cast.split(',');
    
    const flight = new Flight(req.body);
    flight.save(function(err) {
    // one way to handle errors
    if (err) 
      return res.render('flights/new');
    else {
      console.log(flight);
    // for now, redirect right back to new.ejs
    res.redirect('/flights/new');
    }
  });
  }

  const index = (req, res) => {
    Flight.find({}, (err, flights) =>{
        res.render('flights/index', {flights });
    });
}

  module.exports = {
    index: index,
    new: newFlight,
    create 
}