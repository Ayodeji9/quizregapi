const express = require('express')
const regnums = require('./data/regnum')
const cors = require('cors')
app = express()


port = process.env.PORT || 2000

app.use(cors())

app.listen(port)


app.get('/', (req, res)=>{
    res.send('Api is running successfully')
})


app.get('/api/regnums', (req, res)=>{
    res.send(regnums)
})


app.get('/api/regnums/:id', (req, res)=>{

    const regnum = regnums.find((r) => String(r.id ) === String(req.params.id))
    res.send(regnum)
})



console.log("server is running on port " + port);