import React, {Component} from 'react';
import axios from 'axios'

export default class Contact extends Component  {
    constructor() {
        super();
        this.state = {
            name: '',
            subject: '',
            message: '',
            error: false,
            success: false,
            isName: true,
            isSubject: true,
            isMessage: true
        }
    }

    handleChange = (value, key) => {
        this.setState({
            [key]: value
        })
    }

    handleEmail = () => {
        if (!this.state.name) {
            console.log('email: no name');
            this.setState({isName: false});
            return;
        };
        this.setState({isName: true});
        if (!this.state.subject) {
            console.log('email: no subject');
            this.setState({isSubject: false});
            return;
        }
        this.setState({isSubject: true});
        if (!this.state.message) {
            console.log('email: empty message');
            this.setState({isMessage: false});
            return;
        }
        this.setState({isMessage: true});
        axios.post('/sendemail', {
            name: this.state.name,
            title: this.state.subject,
            message: this.state.message
        }).then(() => {
            this.setState({
                name: '',
                subject: '',
                message: '',
                error: false,
                success: true,
            });

        }).catch((err) => {
            this.setState({
                error: true
            });
            console.log(err)
        });
    }

    render() {
        return (
            <div id='contact' className='contact-component-container'>
                <div className='contact-email-form'>
                    <div className='email-input-container'>
                        <input className='email-form-name' placeholder='Name' onChange={e => this.handleChange(e.target.value, 'name')} value={this.state.name}/>
                        {!this.state.isName? <h1>Please Include A Name</h1>: null}
                    </div>
                    <div className='email-input-container'>
                        <input className='email-form-subject' placeholder='Subject' onChange={e => this.handleChange(e.target.value, 'subject')} value={this.state.subject}/>
                        {!this.state.isSubject? <h1>Please Include A Subject</h1>: null}
                    </div>
                    <div className='email-input-container'>
                        <textarea className='email-form-message' placeholder='Say Hi! Please Include Your Contact Info So I Can Reply :)' onChange={e => this.handleChange(e.target.value, 'message')} value={this.state.message}/>
                        {!this.state.isMessage? <h1>Please Include A Message</h1>: null}
                    </div>
                    <div className='email-button'>
                        <button onClick={this.handleEmail}>Say Hi!</button>
                        {this.state.error ?
                        <h1>It seems there was a problem sending the email, <br />Please reach out to me at jackson@jksntaylor.com <br />I can't wait to hear from you!</h1>
                        : 
                        null}
                        {this.state.success ? <h1>Thanks for the message! <br />I'll get back to you as soon as I can!</h1>: null}
                    </div>
                </div>
                <div className='contact-information'>
                    <div>You can reach me personally by emailing jackson@jksntaylor.com</div>
                    <div>If you want to say hi, use the message form to the left</div>
                    <div className='github'><a href='https://github.com/jksntaylor' target='blank'>github.com/jksntaylor</a></div>
                    <div className='linkedin'><a href='https://linkedin.com/in/jksntaylor' target='blank'>linkedin.com/in/jksntaylor</a></div>
                    <a href='https://instagram.com/jksntaylor' target='blank'><div className='instagram-logo-container'><div className='instagram-logo'></div><span>@jksntaylor</span></div></a>
                </div>
            </div>
        )
    }
}