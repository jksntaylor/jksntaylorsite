import React, {Component} from 'react';
// import {Link} from 'react-router-dom';

export default class Header extends Component {
    constructor()  {
        super();
        this.state = {
            active: false,
            mobileOpen: false
        }
    }

    handleClick = () => {
        this.setState({active: true});
        setTimeout(() => {this.setState({active: false})}, 1501)
    }

    handleMobileClick = () => {
        this.setState({mobileOpen: !this.state.mobileOpen})
    }

    render() {
        if (this.state.active) {
            var header = 
                <div className='header-component-container header-component-container-active'>
                    <div className='header-navbar-container'>
                        <a href='#home' onClick={this.handleClick}>home</a>
                        <a href='#web' onClick={this.handleClick}>web</a>
                        <a href='#photo' onClick={this.handleClick}>photo</a>
                        <a href='#about' onClick={this.handleClick}>about</a>
                        <a href='#contact' onClick={this.handleClick}>contact</a>
                    </div>
                </div>
        } else {
            header = 
                <div className='header-component-container'>
                    <div className='header-navbar-container'>
                        <a href='#home' onClick={this.handleClick}>home</a>
                        <a href='#web' onClick={this.handleClick}>web</a>
                        <a href='#photo' onClick={this.handleClick}>photo</a>
                        <a href='#about' onClick={this.handleClick}>about</a>
                        <a href='#contact' onClick={this.handleClick}>contact</a>
                    </div>
                </div>
        }

        if (this.state.mobileOpen) {
            var mobile = <div onClick={this.handleMobileClick} className='mobile mobile-header-component-container mobile-menu-active'>
                            <div className='mobile-hamburger-icon'>
                                <div className='hamburger-1'></div>
                                <div className='hamburger-2'></div>
                                <div className='hamburger-3'></div>
                            </div>
                            <div className='header-navbar-container'>
                                <a href='#home' onClick={this.handleMobileClick}>home</a>
                                <a href='#web' onClick={this.handleMobileClick}>web</a>
                                <a href='#photo' onClick={this.handleMobileClick}>photo</a>
                                <a href='#about' onClick={this.handleMobileClick}>about</a>
                                <a href='#contact' onClick={this.handleMobileClick}>contact</a>
                            </div>
        </div>
        } else {
            mobile = <div onClick={this.handleMobileClick} className='mobile mobile-header-component-container'>
                        <div className='mobile-hamburger-icon'>
                            <div className='hamburger-1'></div>
                            <div className='hamburger-2'></div>
                            <div className='hamburger-3'></div>
                        </div>
                        <div className='header-navbar-container'>
                            <a href='#home' onClick={this.handleMobileClick}>home</a>
                            <a href='#web' onClick={this.handleMobileClick}>web</a>
                            <a href='#photo' onClick={this.handleMobileClick}>photo</a>
                            <a href='#about' onClick={this.handleMobileClick}>about</a>
                            <a href='#contact' onClick={this.handleMobileClick}>contact</a>
                        </div>
                    </div>
        }
        return (
            <div>
                {header}
                {mobile}
            </div>
        )
    }
}