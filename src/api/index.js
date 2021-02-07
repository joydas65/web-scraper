import axios from 'axios'

import cheerio from 'cheerio'

export const extractData = async () => {
    const postTitles = []

    const imageSources = []

    try {
        //const { data } = fetch('https://cors-anywhere.herokuapp.com/https://spacenews.com/segment/news/')
            
        const { data } = await axios.get(
            'https://cors-anywhere.herokuapp.com/https://spacenews.com/segment/news/'
        )
        const $ = cheerio.load(data)

        $('#main > div.launch-section > div.launch-article > div.article-meta > h2.launch-title > a').each((_idx, el) => {
            const postTitle = $(el).text()
            postTitles.push(postTitle)
        })

        $('#main > div.launch-section > div.launch-article > span.launch-image > a > img').each((_idx, el) => {
            imageSources.push(Object.values(el.attribs)[1])
        })

        console.log(postTitles, imageSources)

        return [postTitles, imageSources]
    } catch(error) {
        console.log(error)
    }
}