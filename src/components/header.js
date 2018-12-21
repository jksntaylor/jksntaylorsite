import React, {Component} from 'react';
// import {Link} from 'react-router-dom';

export default class Header extends Component {
    constructor()  {
        super();
        this.state = {
            active: false
        }
    }

    handleClick = () => {
        this.setState({active: true});
        setTimeout(() => {this.setState({active: false})}, 1501)
    }

    render() {
        if (this.state.active) {
            return (
                <div className='header-component-container header-component-container-active'>
                    <div className='header-navbar-container'>
                        <a href='#home' onClick={this.handleClick}>home</a>
                        <a href='#web' onClick={this.handleClick}>web</a>
                        <a href='#photo' onClick={this.handleClick}>photo</a>
                        <a href='#about' onClick={this.handleClick}>about</a>
                        <a href='#contact' onClick={this.handleClick}>contact</a>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='header-component-container'>
                    <div className='header-navbar-container'>
                        <a href='#home' onClick={this.handleClick}>home</a>
                        <a href='#web' onClick={this.handleClick}>web</a>
                        <a href='#photo' onClick={this.handleClick}>photo</a>
                        <a href='#about' onClick={this.handleClick}>about</a>
                        <a href='#contact' onClick={this.handleClick}>contact</a>
                    </div>
                </div>
            )
        }
    }
}