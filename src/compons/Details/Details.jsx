import React from 'react'
import './Details.css'
import { Ddata } from './Ddata/Ddata'
import { DaboutGame } from './DaboutGame/DaboutGame'
import { Other } from './Other/Other'


export const Details = () => {
return <>
<header>
    <div className='container mt-5 p-5'>
        <Ddata/>
        <DaboutGame/>
        <Other/>
    </div>
</header>
</>
}
