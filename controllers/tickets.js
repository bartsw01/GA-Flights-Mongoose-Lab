const Ticket = require("../models/ticket");
const Flight = require("../models/flight");

const newTicket = (req, res) => {
  Ticket.find({}, (err, tickets) => {
    res.render("tickets/new", {
      title: "Add Ticket",
      tickets,
    });
  });
};

const create = (req, res) => {
  flightId = req.params.id
  req.body.flight = flightId
  Ticket.create(req.body, (err, ticket) => {
    res.redirect(`/flights/${flightId}`)
  });
};

// const addToFlight= (req, res) => {
//     Flight.findById(req.params.id, function (err, flight) {
      
//       flight.save(function (err) {
//         res.redirect(`/flights/${flight._id}`);
//       });
//     });
//   };
  
  module.exports = {
    new: newTicket,
    create,
    // addToFlight,
  };