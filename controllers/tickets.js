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
  // Hack to "fix" date formatting to prevent possible day off by 1
  // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
  const s = req.body.born;
  req.body.born = `${s.substr(5, 2)}-${s.substr(8, 2)}-${s.substr(0, 4)}`;
  Ticket.create(req.body, (err, ticket) => {
    res.redirect("/tickets/new");
  });
};

const addToFlight= (req, res) => {
    Flight.findById(req.params.id, function (err, flight) {
      
      flight.save(function (err) {
        res.redirect(`/flights/${flight._id}`);
      });
    });
  };
  
  module.exports = {
    new: newTicket,
    create,
    addToFlight,
  };