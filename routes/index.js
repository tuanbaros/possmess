var express = require('express');
var router = express.Router();

const postChatworkMessage = require('post-chatwork-message')
const APIKey = '297c0b8f48cc9feaa3cebf3cf59b69dc'
const roomId = '60478387'

/* GET home page. */
router.get('/', function(req, res, next) {
    postChatworkMessage(APIKey, roomId, 'hello world');
    res.render('index', { title: 'Express' });
});

module.exports = router;
