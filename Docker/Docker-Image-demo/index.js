const express = require('express');
const app = express();

console.log("docker demo express server...")


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World!!!!!!!!!!')
})


app.listen(3000, () => {
    console.log('Server is running on port 3000')
});