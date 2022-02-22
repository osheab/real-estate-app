import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import './Hero.css'

export default function Hero() {
  return (
      <div className='hero'>
          <div className='content'>
            <h1>Find the perfect home</h1>
            <p className='search-text'>Search the largest selection of luxury homes</p>
          <form className='search'>

                <div>
                    <input type='text' placeholder='enter keyword'/>
                </div>
                <div className='radio'></div>
                <input type='radio' checked />
                    <label>Buy</label>
                    <input type='radio' />
                    <label>Rent</label>
                    <button type='submit'><AiOutlineSearch className='icon' /></button>
                            
          </form>
          </div>
      </div>

  )
}
