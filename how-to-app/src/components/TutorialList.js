import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useLocation, useParams, useHistory } from "react-router-dom";

import axios from 'axios'
const TutorialList = id => {
const params = useParams
    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get(`https://backend-how-to.herokuapp.com/api/posts/`)
        .then(res => {
            setData(res.data)
            console.log(res)
        })
        .catch(err => console.log(err,'error'))
    }, [])

    return (
        <div className = "list">
        
        <h1> My List</h1>
        {data.map((arr,index) =>(
        <p key={index}> Name: {arr.name}Category{arr.category}Description{arr.description}</p>
        ))}
        
        </div>
        );

}

export default TutorialList;