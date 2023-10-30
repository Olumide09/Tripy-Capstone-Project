const express = require('express')

const cors = require('cors')

const app = express()

app.use(express.json())

app.use(cors())

const {getPlaces, deletePlace, createPlace, updatePlace} = require('./controller')

app.get('/api/places', getPlaces)

app.post('/api/places', createPlace)

app.put('/api/places/:id', updatePlace)

app.delete('/api/places/:id', deletePlace)

app.listen(4000, () => console.log('port is running on 4000'))