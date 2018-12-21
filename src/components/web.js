import React from 'react';

export default function Web () {
    return (
        <div id='web' className='web-component-container customized-scrollbar'>
            <div className='web-panels-container'>
               <div id='the-photo-alphabet' className='web-panel-container'>
                    <div className='web-panel-info'>
                        <h1>The Photo Alphabet</h1>
                        <h2>react || node || postgresql || express || css3 || stripe.js</h2>
                        <h3>Functional E-Commerce Site for Letter Photography</h3>
                        <ul>
                            <li>Managed orders and users through shared database using postgresql</li>
                            <li>Implemented express to fetch and display information from the database to the users</li>
                            <li>Used stripe.js to securely collect payment information from customers</li>
                            <li>Built frontend of the site using react components and redux routing</li>
                        </ul>
                        <div className='web-panel-info-buttons'>
                            <a href='https://thephotoalphabet.com' target='blank'><button>Visit Live Site</button></a>
                            <a href='https://github.com/jksntaylor/thephotoalphabet' target='blank'><button>Visit Github Repo</button></a>
                        </div>
                    </div>
                </div>
                <div className='web-panel-container'>
                    <div className='web-panel-info'>
                        <p>
                        Pariatur eu pariatur magna proident ut dolor sint. Amet deserunt pariatur in ad sint ad veniam nisi cillum sint non reprehenderit ea. Sunt laboris magna non consequat qui ad excepteur est in quis ea velit voluptate. Dolor aute labore sunt dolore mollit in officia exercitation duis in est. Cillum eu ut culpa voluptate exercitation exercitation excepteur enim tempor veniam voluptate dolore cillum adipisicing. Aute id excepteur laboris sunt est velit magna.
                        </p>
                    </div>
                </div>
                <div className='web-panel-container'>
                    <div className='web-panel-info'>
                        <p>
                        Laboris dolor minim mollit irure cupidatat in et laborum reprehenderit. Enim labore consequat minim nulla est occaecat id anim. Laborum ullamco in occaecat id dolore velit tempor do proident irure occaecat ad. Magna cupidatat reprehenderit enim nulla dolor et pariatur sint. Elit sunt culpa cupidatat nisi cillum aliquip deserunt pariatur occaecat.
                        </p>
                    </div>
                </div>
                <div className='web-panel-container'>
                    <div className='web-panel-info'>
                        <p>
                        Cupidatat quis in ex duis id. Ex ad cupidatat laborum nulla quis est consectetur officia nisi exercitation. Consequat pariatur ut Lorem voluptate ipsum non dolor magna est nostrud commodo enim consectetur pariatur. Anim aliquip veniam occaecat labore labore cillum occaecat exercitation magna in sit excepteur. Adipisicing sit nisi est excepteur sit occaecat voluptate Lorem cupidatat quis eu et. Cillum aute aliqua dolore consequat cillum voluptate. Ullamco incididunt quis ullamco cillum proident anim occaecat deserunt.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}