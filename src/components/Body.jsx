import React, {useState} from 'react';
import memesData from '../memesData';

export default function Body() {
    // const [memeImage, setMemeImage] = useState("");

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    });

    const [allMemeImages, setAllMemeImages] = useState({memesData});


    function getMemeImage() {
        const memesArray = memesData.data.memes
        const random = Math.floor(Math.random()*memesArray.length);
        const url = memesArray[random].url;

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    }

    return (
        <div className='container'>
            <p className='textbox'>
                <input type="text" placeholder='Top Text'/>
                <input type="text" placeholder='Bottom Text'/>
            </p>
            <p><button onClick={getMemeImage}>Get a new meme image 🖼</button></p>

            <div>
                <img className='image' src={meme.randomImage}/>
            </div>
        </div>
    )
}

