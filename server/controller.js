const places = require('./db.json')

let upcomingPlaceID = 2

module.exports = {
    getPlaces: (req, res) => {
        console.log(req.body)
        res.status(200).send(places)
    },

    deletePlace: (req, res) => {
        console.log(+req.params.id)
        let index = places.findIndex(place => place.id === +req.params.id)
        places.splice(index, 1)
        res.status(200).send(places)
    },

    createPlace: (req, res) => {
        const {placeName, budget, imageURL, date, placeDesc} = req.body
        let newPlace = {
            id: upcomingPlaceID,
            placeName: placeName,
            budget: +budget,
            imageURL: imageURL,
            date: date,
            placeDesc

        }

        places.push(newPlace)
        upcomingPlaceID = upcomingPlaceID + 1
    },

    updatePlace: (req, res) => {
        console.log("lemme cook")
    }
}