import React from 'react' //{ useState, useEffect }
//import { extractData } from '../api/index'
import PostImage from './PostImage'
import './Post.css'

const Post = ({ images, titles }) => {    //{ images, titles }
    
    // const [masterData, setMasterData] = useState([])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         setMasterData(await extractData())
    //     }
    //     fetchData()
    // }, [])

    //{
      //  masterData && masterData[1] ? masterData[1].map((item, idx) => (
        //    <PostImage quote={masterData[0][idx]} item={item} key={idx} />
        //)) : 'Cannot display images from the website https://spacenews.com/segment/news/'
    //}

    // console.log(masterData)

    //{
      //  images.map((item, idx) => {
        //    return <PostImage item={item} quote={titles[idx]} key={idx} />
        //})
    //}
    
    return (
        <div className="post">
            {
                images.map((item, idx) => {
                    return <PostImage item={item} quote={titles[idx]} key={idx} />
                })
            }
        </div>
    )
}

export default Post
