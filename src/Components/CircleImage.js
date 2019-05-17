import React from 'react'
import './Style/CircleImage.css'

export default function CircleImage() {
    return (
        <div className='circle-div'>
            <img

                className='circle-img'
                src={require('../Images/profile.jpg')} />
        </div>
    )
}