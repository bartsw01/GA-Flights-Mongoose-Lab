
const Flight = require('../models/flight');

const newFlight = (req, res) => {
    res.render('flights/new');
    

  }

  const create = (req, res) => {
      console.log(req.body);
    const flight = new Flight(req.body);
    flight.save(function(err) {
    // one way to handle errors
    if (err) return res.render('flights/new');
    
      console.log(flight);
      res.redirect('/flights');
    
  });
  }

  const index = (req, res) => {
    Flight.find({}, (err, flights) => {
        res.render('flights/index', {flights });
    });
}

const show = (req, res) => {
  Flight.findById(req.params.id, (err, flight) => {
    res.render('flights/show', {title: 'Flight Detail', flight});
    
  })
}


  module.exports = {
    new: newFlight,
    create,
    index,
    show
}