import React, {Component} from 'react';
import Modal from 'react-modal'

Modal.setAppElement('#root')

export default class Web extends Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            website: 'tpa',
            tpa: {
                title: 'The Photo Alphabet',
                summary: 'Functional E-Commerce Site for Letter Photography',
                tech: 'React.js || Node.js || postgreSQL || Express.js || CSS3 || Stripe.js',
                list: ['-Managed orders and users through shared database using PostgreSQL',
                       '-Implemented Node.js and express to fetch and display information from the database to the users',
                       '-Used Stripe.js to securely collect payment information from customers',
                       '-Built the front end of the site using react and redux' ]
            },
            rc: {
                title: 'Reddit Clone',
                summary: 'Still in progress, coming soon!',
                tech: 'React || Node || Express || PostgreSQL || Axios || Sockets.io',
                list: ''
            },
            as: {
                title: 'Adventure Squad',
                summary: 'Group Travel Planning Website',
                tech: 'React || Node || Express || PostgreSQL || Axios || CSS3',
                list: ['- Registered and Authorized Users with BCrypt and PostgreSQL Databases',
                       '- Fetched Trip Information and Users from databases using Node and Express',
                       '- Hit multiple RESTful APIs to display real time flight and hotel information',
                       '- Implemented Google Maps / Google Places using their API to display nearby points of interest']
            }
        }
    }

    openModal = () => {
        this.setState({modalIsOpen: true});
    }
    
    closeModal = () => {
        this.setState({modalIsOpen: false});
    }

    handleTPAClick = () => {
        this.setState({website: 'tpa'});
        this.openModal();
    }

    handleASClick = () => {
        this.setState({website: 'as'});
        this.openModal();
    }

    handleRCClick = () => {
        this.setState({website: 'rc'});
        this.openModal();
    }

    render() {
        return (
            <div id='web' className='web-component-container customized-scrollbar'>
            <h1 className='faded-section-header'>web</h1>
            <div className='website adventuresquad'>
                <div className='desktop'></div>
                <div className='mobile'></div>
                <div className='website-blurb'>
                    <h1>Adventure Squad</h1>
                    <h2>Group Travel Planning Website</h2>
                    <a href='https://www.adventuresquad.jksntaylor.com' target="_blank" rel="noopener noreferrer">adventuresquad.jksntaylor.com<i className="fas fa-external-link-alt"></i></a>
                    <button onClick={this.handleASClick}>See More!</button>
                </div>
            </div> 
            <div className='website thephotoalphabet'>
                <div className='desktop'></div>
                <div className='mobile'></div>
                <div className='website-blurb'>
                    <h1>The Photo Alphabet</h1>
                    <h2>E-Commerce Site For Letter Photography</h2>
                    <a href='https://www.thephotoalphabet.com' target="_blank" rel="noopener noreferrer">thephotoalphabet.com<i className="fas fa-external-link-alt"></i></a>
                    <button onClick={this.handleTPAClick}>See More!</button>
                </div>
            </div>
            <div className='website redditclone'>
                <div className='desktop'></div>
                <div className='mobile'></div>
                <div className='website-blurb'>
                    <h1>Reddit Clone</h1>
                    <h2>In Progress</h2>
                    <button onClick={this.handleRCClick}>See More!</button>
                </div>
            </div>
            <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
            >
                <div className={this.state.website+' modal'}>
                    <h1>{this.state[this.state.website].title}</h1>
                    <h2>{this.state[this.state.website].summary}</h2>
                    <h4>{this.state[this.state.website].tech}</h4>
                    <div>
                    <a className='reddit-repo' href='https://github.com/jksntaylor/reddit-clone' target='_blank' rel="noopener noreferrer">Github Repo</a>
                    <ul style={{color: 'black'}}>
                        <li>{this.state[this.state.website].list[0]}</li><br/>
                        <li>{this.state[this.state.website].list[1]}</li><br/>
                        <li>{this.state[this.state.website].list[2]}</li><br/>
                        <li>{this.state[this.state.website].list[3]}</li><br/>
                    </ul>
                    <div>
                        <div className='D2'></div>
                        <div className='D3'></div>
                        <div className='D4'></div>
                    </div>
                    </div>
                </div>
            </Modal>
            </div>
        )
    }
}