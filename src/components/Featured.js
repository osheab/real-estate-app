import React from 'react'

import './Featured.css'



export default function Featured() {
  return (
    <div className='featured'>
        <h1 className='featured-text'>Top Featured Listings</h1>
        <p className='featured-text'>Selected Listings by City, State & Postcode basd on views</p>

        <div className='container'>
            <img  className='span-3 image-grid-row-2'  src={process.env.PUBLIC_URL + 'images/apt11.jpg'} alt=''/>
            <img src={process.env.PUBLIC_URL + 'images/be1.jpg'} alt=''/>
            <img src={process.env.PUBLIC_URL + 'images/ba1.jpg'} alt=''/>
            <img src={process.env.PUBLIC_URL + 'images/k1.jpg'} alt=''/>
            <img src={process.env.PUBLIC_URL + 'images/l1.jpg'} alt=''/>
            <div className='span-3 img-details'>
                <div className='top'>
                    <h2>12 Green St, London</h2>
                    <p>House for sale</p>
                    <p className='price'>£2,000,000.00</p>
                </div>
                <div className='info-grid'></div>
                <div>
                    <div className='info'>
                        <p className='bold'>Bedrooms:</p><p>5</p>
                    </div>
                    <div className='info'>
                        <p className='bold'>Bathrooms:</p><p>7</p>
                    </div>
                    <div className='info'>
                        <p className='bold'>Square Feet:</p><p>8,138</p>
                    </div>
                    <div className='info'>
                        <p className='bold'>Est payment:</p><p>$14,797</p>
                    </div>
                </div>
            </div>
            <div className='span-2 right-img-details'>
            <p>A beatiful suburban home in the heart of the city. Perfect for families and professionals.</p>
            <button className='btn'>View Listing</button>
            </div>
        </div>
       
    {/*Section section */}
    <div className='container'>
            <img className='order-2' src={process.env.PUBLIC_URL + 'images/be2.jpg'} alt=''/>
            <img className='order-3' src={process.env.PUBLIC_URL + 'images/ba2.jpg'} alt=''/>
            <img className='span-3 image-grid-row-2 order-1' src={process.env.PUBLIC_URL + 'images/apt13.jpg'} alt=''/>
            <img className='order-4' src={process.env.PUBLIC_URL + 'images/k2.jpg'} alt=''/>
            <img src={process.env.PUBLIC_URL + 'images/l2.jpg'} alt=''/>
            <div className='order-5' className='span-2 right-img-details order-7'>
            <p>A beatiful suburban home in the heart of the city. Perfect for families and professionals.</p>
            <button className='btn'>View Listing</button>
            </div>
                <div className='span-3 img-details order-6' >
                <div className='top'>
                    <h2>1 Middle Street, Chessington</h2>
                    <p>House for sale in south, outer London, inside M25. Good links to city.</p>
                    <p className='price'>£2,000,000.00</p>
                </div>
                <div className='info-grid'></div>
                <div>
                    <div className='info'>
                        <p className='bold'>Bedrooms:</p><p>5</p>
                    </div>
                    <div className='info'>
                        <p className='bold'>Bathrooms:</p><p>7</p>
                    </div>
                    <div className='info'>
                        <p className='bold'>Square Feet:</p><p>8,138</p>
                    </div>
                    <div className='info'>
                        <p className='bold'>Est payment:</p><p>$14,797</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
