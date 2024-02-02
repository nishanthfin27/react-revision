import React from 'react'
import { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    // const [data, setData] = React.useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/nishanthfin27')
    //     .then((response) => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

    const data = useLoaderData()
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers : {data.followers}
        <img src={data.avatar_url} width={300} alt="" />
    </div>  
    )
}

export default Github

export const githubInfoLoader = async () => {
    const respose = await fetch('https://api.github.com/users/nishanthfin27')
        return respose.json()
}