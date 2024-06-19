import express from 'express'
import fetchJson from './helpers/fetch-json.js'

const app = express()

app.set('view engine', 'ejs')
app.set('views', './views')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.set('port', process.env.PORT || 8009)

const apiUrl = 'https://fdnd-agency.directus.app/items/fabrique_art_objects'

function getRandomSize(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Data ophalen bij opstart en filteren
const data = await fetchJson(apiUrl)
const filteredData = data.data.map(item => ({
    id: item.id,
    title: item.title,
    image: item.image,
}))

app.get('/', function (request, response) {
    response.render('index', {
        data: filteredData
    })
    console.log(filteredData)   
})

app.listen(app.get('port'), function () {
    console.log(`Application started on http://localhost:${app.get('port')}`)
})
