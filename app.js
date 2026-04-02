const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const mode = req.query['hub.mode'];
  const challenge = req.query['hub.challenge'];
  const token = req.query['hub.verify_token'];

 if (mode === 'subscribe' && token === 'mdcu_verify_456') {
    return res.status(200).send(challenge);
  } else {
    return res.sendStatus(403);
  }
});

app.listen(3000, () => {
  console.log('Server running');
});
