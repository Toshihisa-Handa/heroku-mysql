const express = require('express')
const app = express()
// const port = 3000
var port = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('Hello22 World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



