const PORT = 6900
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
const cors = require('cors')

const application = express()

const url = "https://www.reddit.com/r/unsw/"

axios(url)
    .then(response => { 
        const html = response.data
        const $ = cheerio.load(html)
        const posts = []

        $('._eYtD2XCVieq6emjKBH3m', html).each(function() {
            const title = $(this).text()
            posts.push({
                title
            })
        })
        
        console.log(posts)
    }).catch(err => console.log(err))

application.listen(PORT, () => console.log(`server running on PORT ${PORT}`))

