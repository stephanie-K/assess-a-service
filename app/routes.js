// 
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
// 

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


 // ------------------  Spotify Ethics assessment ------------------------------------ //

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

  // ------------------  Scottish Government Service Standard ----------------------------- //

  router.post('/gov-scot/gov-scot-start', function (req, res) {
    req.session.reach_SG_summary = false
    res.redirect('/gov-scot/gov-scot-point1')
  })

  router.post('/gov-scot/gov-scot-point1', function (req, res) {
    if (req.session.reach_SG_summary) {
      return res.redirect('/gov-scot/gov-scot-summary')
    }
    return res.redirect('/gov-scot/gov-scot-point2')
  })

  router.post('/gov-scot/gov-scot-point2', function (req, res) {
      if (req.session.reach_SG_summary) {
      return res.redirect('/gov-scot/gov-scot-summary')
    }
    return res.redirect('/gov-scot/gov-scot-point3')
  })

  router.post('/gov-scot/gov-scot-point3', function (req, res) {
    if (req.session.reach_SG_summary) {
      return res.redirect('/gov-scot/gov-scot-summary')
    }
    return res.redirect('/gov-scot/gov-scot-point4')
  })

  router.post('/gov-scot/gov-scot-point4', function (req, res) {
    if (req.session.reach_SG_summary) {
      return res.redirect('/gov-scot/gov-scot-summary')
    }
    return res.redirect('/gov-scot/gov-scot-point5')
  })

  router.post('/gov-scot/gov-scot-point5', function (req, res) {
    if (req.session.reach_SG_summary) {
      return res.redirect('/gov-scot/gov-scot-summary')
    }
    return res.redirect('/gov-scot/gov-scot-point6')
  })

  router.post('/gov-scot/gov-scot-point6', function (req, res) {
    if (req.session.reach_SG_summary) {
      return res.redirect('/gov-scot/gov-scot-summary')
    }
    return res.redirect('/gov-scot/gov-scot-point7')
  })

  router.post('/gov-scot/gov-scot-point7', function (req, res) {
    if (req.session.reach_SG_summary) {
      return res.redirect('/gov-scot/gov-scot-summary')
    }
    return res.redirect('/gov-scot/gov-scot-point8')
  })

  router.post('/gov-scot/gov-scot-point8', function (req, res) {
        if (req.session.reach_SG_summary) {
      return res.redirect('/gov-scot/gov-scot-summary')
    }
    return res.redirect('/gov-scot/gov-scot-point9')
  })

  router.post('/gov-scot/gov-scot-point9', function (req, res) {
        if (req.session.reach_SG_summary) {
      return res.redirect('/gov-scot/gov-scot-summary')
    }
    return res.redirect('/gov-scot/gov-scot-point10')
  })

  router.post('/gov-scot/gov-scot-point10', function (req, res) {
        if (req.session.reach_SG_summary) {
      return res.redirect('/gov-scot/gov-scot-summary')
    }
    return res.redirect('/gov-scot/gov-scot-point11')
  })

  router.post('/gov-scot/gov-scot-point11', function (req, res) {
        if (req.session.reach_SG_summary) {
      return res.redirect('/gov-scot/gov-scot-summary')
    }
    return res.redirect('/gov-scot/gov-scot-point12')
  })

  router.post('/gov-scot/gov-scot-point12', function (req, res) {
       if (req.session.reach_SG_summary) {
      return res.redirect('/gov-scot/gov-scot-summary')
    }
    return res.redirect('/gov-scot/gov-scot-point13')
  })

  router.post('/gov-scot/gov-scot-point13', function (req, res) {
        if (req.session.reach_SG_summary) {
      return res.redirect('/gov-scot/gov-scot-summary')
    }
    return res.redirect('/gov-scot/gov-scot-point14')
  })

  router.post('/gov-scot/gov-scot-point14', function (req, res) {
    req.session.reach_SG_summary = true
    res.redirect('/gov-scot/gov-scot-summary')
  })
