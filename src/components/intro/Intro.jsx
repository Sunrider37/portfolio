import './Intro.scss'
import { init } from 'ityped'
import { useEffect, useRef } from 'react'

export default function Intro() {
    const textRef = useRef();

    useEffect(() => {
       init(textRef.current, {
           showCursor: true,
           backDelay: 1500,
           strings: ["Backend and Frontend Developer", "Designer"]
       })
    }, [])


    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
            <div className="wrapper">
                <h2>Hi there, my name is</h2>
                <h1>Timur Utyaganov</h1>
                <h3>Freelance <span ref={textRef}></span></h3>
            </div>
            <a href="#portfolio">
                <img src="assets/down.png" alt="" />
            </a>
            </div>
        </div>
    )
}
