import React from 'react';
import {ReactComponent as Dev} from '../photos/dev.svg'
import {ReactComponent as Design} from '../photos/design.svg' 
import {ReactComponent as Photo} from '../photos/photo.svg'

export default function About () {
    return (
        <div id='about' className='about-component-container'>
            <div className='about-info-container'>
                <h1 className='faded-section-header'>about</h1>
            I'm a designer, developer, and photographer.<br/><br/>Originally from New York, I have lived in Salt Lake for the past four years and I'm still getting used to it.<br/><br/>I originally attended Brigham Young University for Athletic Training before deciding to pursue Design, and then opting to leave altogether.<br/><br/>I started teaching myself to program about a year ago, and I was hooked instantly. I love being able to take my artistic ability and bring it to life in such a technologically relevant way.<br/><br/>When I'm not glued to the code editor, you can find me taking pictures, listening to music, or drinking way too much coffee.</div>
            <div className='about-services-container'>
                <h1>What I Do</h1>

                <div className='about-service about-service-left'>
                    <div>
                    <Design/>
                    <h2>Design</h2>
                    </div>
                    <div>
                    <ul>
                        <li>- Wireframing</li>
                        <li>- Logos & Branding</li>
                        <li>- Animation</li>
                        <li>- UI / UX</li>
                        <li>- Graphic Design</li>
                    </ul>
                    </div>
                </div>
                <div className='about-service'>
                    <div>
                    <Dev/>
                    <h2>Development</h2>
                    </div>
                    <div>
                    <ul>
                        <li>- Landing Pages</li>
                        <li>- E-Commerce</li>
                        <li>- Corporate Web Applications</li>
                        <li>- SEO</li>
                        <li>- App Development (React Native)</li>
                    </ul>
                    </div>
                </div>
                <div className='about-service about-service-right'>
                    <div>
                    <Photo/>
                    <h2>Photography</h2>
                    </div>
                    <div>
                    <ul>
                        <li>- Portraiture</li>
                        <li>- Professional Headshots</li>
                        <li>- Retouching</li>
                        <li>- Editing (Adobe CC)</li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className='about-skills-container'>
            <h2>Web Technologies I Use</h2>
                <div className='about-skill'>
                    <div className='about-html5'></div>
                    <h1>html5</h1>
                </div>
                <div className='about-skill'>
                    <div className='about-css3'></div>
                    <h1>css3</h1>
                </div>
                <div className='about-skill'>
                    <div className='about-javascript'></div>
                    <h1>js es6</h1>
                </div>
                <div className='about-skill'>
                    <div className='about-reactjs'></div>
                    <h1>react.js</h1>
                </div>
                <div className='about-skill'>
                    <div className='about-node'></div>
                    <h1>node</h1>
                </div>
                <div className='about-skill'>
                    <div className='about-express'></div>
                    <h1>express</h1>
                </div>
                <div className='about-skill'>
                    <div className='about-postgresql'></div>
                    <h1>sql</h1>
                </div>
                <div className='about-skill'>
                    <div className='about-git'></div>
                    <h1>git</h1>
                </div>
                <div className='about-skill'>
                    <div className='about-adobecc'></div>
                    <h1>adobe</h1>
                </div>
                <div className='about-skill'>
                    <div className='about-bootstrap'></div>
                    <h1>bootstrap</h1>
                </div>
                <div className='about-skill'>
                    <div className='about-redux'></div>
                    <h1>redux</h1>
                </div>
                <div className='about-skill'>
                    <div className='about-jquery'></div>
                    <h1>jquery</h1>
                </div>
                
            </div>
        </div>
    )
}
