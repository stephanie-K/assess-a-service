const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

module.exports = router


router.post('/spotify/spotify-physical', function (req, res) {
    res.redirect('/spotify/spotify-emotional')
  })

router.post('/spotify/spotify-emotional', function (req, res) {
    res.redirect('/spotify/spotify-societal')
  })

router.post('/spotify/spotify-societal', function (req, res) {
    res.redirect('/spotify/spotify-next-steps')
  })

  router.post('/spotify/spotify-summary', function (req, res) {
    res.redirect('/spotify/spotify-end')
  })


  router.post('/gov-scot/gov-scot-point1', function (req, res) {
    res.redirect('/gov-scot/gov-scot-point2')
  })

  router.post('/gov-scot/gov-scot-point2', function (req, res) {
    res.redirect('/gov-scot/gov-scot-summary')
  })

