import React from 'react'
import { Bhead } from './Bhead/Bhead'
import { Live } from './Live/Live'
import { Most } from './Most/Most'


export const Browser = () => {
  return <>
  <header>
      <div className='container mt-5 p-5'>
          <Bhead/>
          <Live/>
          <Most/>
      </div>
  </header>
  </>
}
