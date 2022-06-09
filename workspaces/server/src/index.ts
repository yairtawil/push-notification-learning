import express from 'express'

const app = express();

app.listen(8008, () => {
    console.log(`server running at: http://localhost:8008`)
})
