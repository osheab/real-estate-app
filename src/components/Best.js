import React from 'react'
import './Best.css'


export default function Best() {
  return (
    <div className='best'>
        <h1>Find Best Rated Properties</h1>
        <div>
            <p><span className='bold'>All</span></p>
            <p>Commercial</p>
            <p>Residential</p>
            <p>Agricultural</p>
            </div>
        <div className='container'>
            <img src={process.env.PUBLIC_URL + 'images/apt15.jpg'} alt='image' />
            <img src={process.env.PUBLIC_URL + 'images/apt14.jpg'} alt='image' />
            <img src={process.env.PUBLIC_URL + 'images/apt3.jpg'} alt='image' />
        </div>

    </div>
  )
}
