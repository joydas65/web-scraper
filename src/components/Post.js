import React, { useState, useEffect } from 'react'
import { extractData } from '../api/index'
import './Post.css'

const Post = () => {
    
    const [masterData, setMasterData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setMasterData(await extractData())
        }
        fetchData()
    }, [])

    console.log(masterData[1])
    
    return (
        <div className="post">
            {
                masterData[1] ? masterData[1].map((item, idx) => (
                    <img style={{ width: '1080px', height: '1080px' }} src={item} key={idx} alt="snews" />
                )) : null 
            }
        </div>
    )
}

export default Post
