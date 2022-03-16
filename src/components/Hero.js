import React from "react"
import {BsImageAlt} from "react-icons/bs"

export default function Hero(props) {
    let [allMemeImages, setAllMemeImages] = React.useState([])
    let [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })
    const [init, setInit] = React.useState(false)
    React.useEffect(() => {
        async function fetchData() {
            let response = await fetch('https://api.imgflip.com/get_memes')
            let memesData = await response.json()
            setAllMemeImages(memesData.data.memes)
            
        }
        if(!init) {
            fetchData()
            setInit(true)
        }
        else setMeme(prevData => ({
            ...prevData,
            randomImage: allMemeImages[Math.floor(Math.random() * 10) % allMemeImages.length].url
        }))
    }, [allMemeImages])
    
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(i => ({
            ...i,
            [name]: value
        }))
    }

    return <div className = "heroFlex">
        <div className = "heroInputs">
            <input 
                className = "heroInput" 
                name = "topText" 
                placeholder = "Top Text" 
                value = {meme.topText} 
                onChange = {handleChange}>
            </input>    
            <input 
                className = "heroInput" 
                name = "bottomText" 
                placeholder = "Bottom Text" 
                value = {meme.bottomText} 
                onChange = {handleChange}>
            </input>
        </div>
        <div className = "heroButton" onClick = {() => setMeme(i => {
            return {
                ...i,
                randomImage: allMemeImages[Math.floor(Math.random() * 10) % allMemeImages.length].url
            }
        })}>Get a new meme image 
        <BsImageAlt className = "heroButtonIcon"/>
        </div>
        <div className = "heroImgFlex">
            <div>
                <img className = "heroImg" src ={meme.randomImage} />
            </div>
            <h1 className = "heroTopText">{meme.topText}</h1>
            <h1 className = "heroBottomText">{meme.bottomText}</h1>
        </div>
    </div>
}