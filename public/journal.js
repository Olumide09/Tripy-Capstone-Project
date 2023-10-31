console.log("Conneted to homepage")

const placeContainer = document.querySelector('#place-container')

const form = document.querySelector('form')

const baseURL = `http://localhost:4000/api/places`

const placesCallback = ({data: places}) => displayPlaces(places)
const errCallback = err => console.log(err)


const getAllPlaces = () => axios.get(baseURL).then(placesCallback).catch(errCallback)

const createPlace = body => axios.post(baseURL, body).then(placesCallback).catch(errCallback)

const deletePlace = id => axios.delete(`${baseURL}/${id}`).then(placesCallback).catch(errCallback)

const updatePlace = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(placesCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let placeName = document.querySelector('#name')
    let budget = document.querySelector('#budget')
    let imageURL = document.querySelector('#img')
    let date = document.querySelector('#date')
    let placeDesc = document.querySelector('#desc')

    let bodyObj = {
        placeName: placeName.value,
        budget: budget.value,
        imageURL: imageURL.value,
        date: date.value,
        placeDesc: placeDesc.value
    }

    createPlace(bodyObj)

    placeName.value = ''
    budget.value = ''
    imageURL.value = ''
    date.value = ''
    placeDesc.value = ''
}


function createPlaceCard(place) {
    console.log(place)
    const placeCard = document.createElement('div')
    placeCard.classList.add('place-card')

    placeCard.innerHTML = `<img alt = 'place cover image' src=${place.imageURL} class="place-cover-image"/>
   <p class="placeName">${place.placeName}</p>
   <div class="btns-container">
        <button onclick="updatePlace(${place.id}, 'minus')">-</button>
        <p class="place-budget">$${place.budget}</p>
        <button onclick="updatePlace(${place.id}, 'plus')">+</button>
   </div>
   <p class="place-date">${place.date}</p>
   <p class="place-desc">${place.placeDesc}</p>
   <button onclick="deletePlace(${place.id})">delete</button> `


   placeContainer.appendChild(placeCard)
}



function displayPlaces(arr) {
    placeContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i = i + 1) {
        createPlaceCard(arr[i])
    }
}


form.addEventListener('submit', submitHandler)

getAllPlaces()