const Ticket = require('../models/ticket')

module.exports = {
    new: newTicket,
    create,
}

function newTicket (req, res) {
    res.render('tickets/new', { flightId: req.params.id })
}

async function create(req, res) {
    try{
        req.body.flight = req.params.id
       await Ticket.create(req.body);
       res.redirect(`/flights/${req.params.id}`)
    } catch (err) {
        console.log(err)
    }

}