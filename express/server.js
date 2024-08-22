const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;

app.get('/', (req,res) => {
  //res.sendFile('./views/index.html',{ root:__dirname});
  res.sendFile(path.join(__dirname,'views','index.html'));
})

app.listen(PORT, () => console.log(`server running on port ${PORT}`))