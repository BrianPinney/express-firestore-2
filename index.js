import express from 'express'
import cors from 'cors'

//Import CRUD functions.
import { addNewTv, getAllTv} from './src/tvLibrary.js'

const PORT = 3060

const app = express()
app.use( cors() )
app.use( express.json() )

//Get all TV shows
app.get('/tvshows', getAllTv)
//Add TV shows
app.post('tvLibrary', addNewTv)


app.listen(PORT,() =>{
    console.log(`Listening on port: http://localhost:${PORT}...`)
})

