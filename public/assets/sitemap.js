var sm = require('sitemap')
// Creates a sitemap object given the input configuration with URLs
var sitemap = sm.createSitemap({ options });
// Generates XML with a callback function
sitemap.toXML( function(err, xml){ if (!err){ console.log(xml) } });
// Gives you a string containing the XML data
var xml = sitemap.toString();

///
var express = require('express')
  , sm = require('sitemap');

var app = express()
  , sitemap = sm.createSitemap ({
  hostname: 'https://bos-website-test.herokuapp.com/',
  cacheTime: 600000,        // 600 sec - cache purge period
  urls: [
    { url: '/home',  changefreq: 'daily', priority: 0.3 },
    { url: '/projects',  changefreq: 'monthly',  priority: 0.7 },
    { url: '/people',  changefreq: 'monthly',  priority: 0.4 },
    { url: '/about-us',  changefreq: 'monthly',  priority: 0.7 },
    { url: '/pricing',  changefreq: 'monthly',  priority: 0.3 },
    { url: '/contact'},    // changefreq: 'weekly',  priority: 0.5
    //{ url: '/page-4/',   img: "http://urlTest.com" }
  ]
});

app.get('/sitemap.xml', function(req, res) {
  sitemap.toXML( function (err, xml) {
    if (err) {
      return res.status(500).end();
    }
    res.header('Content-Type', 'application/xml');
    res.send( xml );
  });
});

app.listen(3000);