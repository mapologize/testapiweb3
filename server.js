const express = require('express');
const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider(""));

const app = express();

const port = process.env.PORT || 5000;

app.get('/getsignature/:pkey/:hash', (req, res) => {
    const privateKey = req.params.pkey;
    const hashmes = req.params.hash;
    const sigObj = web3.eth.accounts.sign(hashmes, privateKey)
    const signature = sigObj.signature;
  res.send(signature);
});

app.get('/hello', (req,res) => {
  res.send("เฮลโล่");
});

app.listen(port, () => console.log(`Listening on port ${port}`));