import axios from 'axios'
import React, { useEffect } from 'react'

const APIData = () => {

    // const fetchData = () => {
    //     fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d78fcb04d585489b9f505d0423652fee")
    //         .then(response => response.json())
    //         .then(json => console.log(json))
    // }
    // const fetchData = async () => {
    //     const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d78fcb04d585489b9f505d0423652fee")
    //     const data = await response.json()
    //     console.log(data, "response=====>");
    // }

    // const fetchData = () => {
    //     axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d78fcb04d585489b9f505d0423652fee")
    //         .then((response) => {
    //             console.log(response, "axiosssssss");
    //         })
    // }
    const data = {
        firstName: "ABC",
        lastName: "XYZ",
        country: "India",
        language: "HTML",
        vehicle: ["Car"]
    }
    const fetchData = async () => {
        const response = await axios.get("https://newsapi.org/v2/top-headlines?category=general&apiKey=d78fcb04d585489b9f505d0423652fee")
        console.log(response, "response=====>");
    }
    const deleteData = async () => {
        const response = await axios.delete('https://dummyjson.com/products/1')
        console.log(response, "response=====>");
    }

    // const postData = () => {
    //     fetch('https://dummyjson.com/products/add', {
    //         method: "POST",
    //         headers: { 'Content-Type': "application/json" },
    //         body: JSON.stringify(data)
    //     }).then((res) => {
    //         res.json()
    //     }).then((json) => {
    //         console.log(json, "POST response====>");
    //     })
    // }

    const postData = async () => {
        // axios.post("https://dummyjson.com/products/add", data).then((response) => {
        //     console.log(response);

        // })
        const response = await axios.post("https://dummyjson.com/products/add", data)
        console.log(response, "response======>");

    }


    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            APIData
            <button onClick={() => postData()}>Save</button>
            <button onClick={() => deleteData()}>Delete</button>
        </div>
    )
}

export default APIData
