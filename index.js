const express = require('express')
const app = express()
const port = 3000

// eap.test page with link to idp.test/auth
// (sets cookie with SameSite=Strict)
app.get('/', (req, res) => {
  res.cookie('whipped', 'cream', {
      sameSite: true
  })
  res.sendFile(__dirname + '/views/index.html')
})

// idp.test auth with link to eap.test/detect & link to eap.test/forward
app.get('/auth', (req, res) => {
    res.sendFile(__dirname + '/views/auth.html')
})

// eap.test redirect to eap.test/detect so cookies are sent
app.get('/forward', (req, res) => {
    res.send("<html><head><meta http-equiv=\"refresh\" content=\"0; URL='/detect'\"/></head></html>")
})

// show cookies sent by browser
app.get('/detect', (req, res) => {
    // check for cookies before sending
    res.send(`cookies detected: ${req.headers.cookie}`)
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
