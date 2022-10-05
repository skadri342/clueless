import React from 'react';

export default function Body() {
    return (
        <div className='container'>
            <p className='textbox'>
                <input type="text" placeholder='Top Text'/>
                <input type="text" placeholder='Bottom Text'/>
            </p>
            <p><button>Get a new meme image 🖼</button></p>

            <div className='image'>
                
            </div>
        </div>
    )
}