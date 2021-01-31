import axios from 'axios'

import cheerio from 'cheerio'

export const extractData = async () => {
    const postTitles = []

    const imageSources = []

    try {
        const { data } = await axios.get(
            'https://www.abc.com'
        )
        const $ = cheerio.load(data)

        $('div > a').each((_idx, el) => {
            const postTitle = $(el).text()
            postTitles.push(postTitle)
        })

        $('div > img').each((_idx, el) => {
            imageSources.push(Object.values(el.attribs)[1])
        })

        return [postTitles, imageSources]
    } catch(error) {
        console.log(error)
    }
}