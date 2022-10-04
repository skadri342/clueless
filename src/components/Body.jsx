import React from 'react';

export default function Body() {
    return (
        <div className='container'>
            <p>
                <input type="text" placeholder='Top Text'/>
                <input type="text" placeholder='Bottom Text'/>
            </p>
            <p><button>Get image</button></p>

            <div className='image'>
                
            </div>
        </div>
    )
}