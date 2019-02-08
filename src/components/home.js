import React from 'react';

export default function Home () {
    return (
        <div id='home' className='home-component-container'>
            {/* <div className='appearing-text-container'>
                <h1>hi! i'm</h1>
            </div> */}
            <div className='home-list-container'>
                <ul className='home-list'>
                    <li className='home-list-item creativity'>creativity</li>
                    <li className='home-list-item ambition'>ambition</li>
                    <li className='home-list-item dilligence'>diligence</li>
                    <li className='home-list-item passion'>passion</li>
                    <li className='home-list-item adventure'>adventure</li>
                    <li className='home-list-item happiness'>happiness</li>
                    <li className='home-list-item jackson'><span className='appearing-text-container'>hi<span>!</span> i'm </span>jackson</li>
                </ul>
            </div>
        </div>
    )
}