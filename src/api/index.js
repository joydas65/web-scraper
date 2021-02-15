import axios from 'axios'

import cheerio from 'cheerio'

export const extractData = async () => {
    const postTitles = []

    const imageSources = []

    const postDates = []

    try {
        //const { data } = fetch('https://cors-anywhere.herokuapp.com/https://spacenews.com/segment/news/')
            
        const { data } = await axios.get(
            '/segment/news/'
        )
        const $ = cheerio.load(data)

        $('#main > div.launch-section > div.launch-article > div.article-meta > h2.launch-title > a').each((_idx, el) => {
            const postTitle = $(el).text()
            postTitles.push(postTitle)
        })

        $('#main > div.launch-section > div.launch-article > span.launch-image > a > img').each((_idx, el) => {
            imageSources.push(Object.values(el.attribs)[1])
        })

        $('#main > div.launch-section > div.launch-article > div.article-meta > div.launch-author > time').each((_idx, el) => {
            postDates.push(Object.values(el.attribs)[2])
        })

        console.log(postDates)

        const combinedData = {}

        for(let item = 0; item < postDates.length; item++) {
            const formattedDate = formatDate(postDates[item])
            console.log(formattedDate)
            if(formattedDate in combinedData){
                combinedData[formattedDate][0].push(postTitles[item])
                combinedData[formattedDate][1].push(imageSources[item])
            }else{
                combinedData[formattedDate] = [[postTitles[item]],[imageSources[item]]]
            }
        }

        console.log(combinedData)

        return combinedData
    } catch(error) {
        console.log(error)
    }
}

const formatDate = (d) => {
    const vals = d.split("-")
    return vals[0] + "-" + (parseInt(vals[1]) - 1) + "-" + vals[2]
}

export const extractPosts = (date, masterData) => {
    try {
        if(date && date.toDateString()){
            const month = date.getMonth()

            const dateData = date.toDateString().split(" ")

            const finalDate = dateData[3] + "-" + formatMonth(month) + "-" + dateData[2]

            //console.log(finalDate)

            console.log(masterData)

            const titles = []

            const imageLinks = []

            for(let i = 0; i < masterData[2].length; i++){
                //console.log(masterData[2][i])
                if(masterData[2][i] === finalDate){
                    titles.push(masterData[0][i])
                    imageLinks.push(masterData[1][i])
                }
            }

            //console.log(titles, imageLinks)

            return [titles, imageLinks]
        }
    } catch (error) {
        console.log(error)
    }
}

const formatMonth = (m) => {
    if (m <= 9) return "0" + (m+1)
    return (m+1).toString()
}