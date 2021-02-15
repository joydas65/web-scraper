import React, { useState, useEffect } from 'react' //{ useState, useEffect }
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { extractData, extractPosts } from '../api/index'
import PostImage from './PostImage'
import './Post.css'

const Post = () => {    //{ images, titles }

    const [masterData, setMasterData] = useState(null)

    const [date, setDate] = useState(new Date())

    //const [newDate, setNewDate] = useState(new Date())

    //const [finalData, setFinalData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setMasterData(await extractData())
        }
        // const handleDateChange = () => {
        //     setDate(newDate)
        //     setFinalData(extractPosts(date, masterData))
        // }
        fetchData()
        //handleDateChange()
    }, [])

    //{
      //  masterData && masterData[1] ? masterData[1].map((item, idx) => (
        //    <PostImage quote={masterData[0][idx]} item={item} key={idx} />
        //)) : 'Cannot display images from the website https://spacenews.com/segment/news/'
    //}

    //console.log(masterData)

    //{
      //  images.map((item, idx) => {
        //    return <PostImage item={item} quote={titles[idx]} key={idx} />
        //})
    //}
    
    return (
        <div className="post">
            <p>Select a Date</p>
            <DatePicker selected={date} onChange={d => setDate(d)} />
            {
                masterData && (date.toDateString().split(" ")[3] + "-" + date.getMonth() + "-" + date.toDateString().split(" ")[2]) in masterData ? masterData[(date.toDateString().split(" ")[3] + "-" + date.getMonth() + "-" + date.toDateString().split(" ")[2])][1].map((item, idx) => (
                    <PostImage quote={masterData[(date.toDateString().split(" ")[3] + "-" + date.getMonth() + "-" + date.toDateString().split(" ")[2])][0][idx]} item={item} key={idx} />
                )) : 'Post not found for selected date'
            }
        </div>
    )
}

export default Post
