
const express = require('express');
const router = express.Router();

const PostController = require('../controllers/post');

const KeyWordSearch = PostController().keyWordSearch;

/* Find listing. of all posts matching a keyword search */
router.put('/keyword', function(req, res, next) {
	// Comment out this line:
  //res.send('respond with a resource');
  console.log("did it find the route?");

  const keyword = req.body.keyword;
  // And insert something like this instead:
  
  KeyWordSearch(keyword).then((crateResponse) => {
    console.log('did we ever get here on this attempt?');
    console.log('crate response is ' + crateResponse);
    res.json(crateResponse);
  });
});

module.exports = router;