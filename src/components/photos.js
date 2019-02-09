import React, {Component} from 'react';
import Modal from 'react-modal';

export default class Photos extends Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            photo: ''
        }
    }

    openModal = () => {
        this.setState({modalIsOpen: true});
    }
    
    closeModal = () => {
        this.setState({modalIsOpen: false});
    }

    handlePhotoChange = name => {
        this.setState({photo: name});
        this.openModal();
    }

    render() {
        return (
            <div id='photo' className='photos-component-container'>
                <h1 className='faded-section-header'>photo</h1>
                <div className='photos-container'>
                    <div className='photo' id='paige-1' onClick={e => {this.handlePhotoChange(e.target.id)}}></div>
                    <div className='photo' id='chris-2' onClick={e => {this.handlePhotoChange(e.target.id)}}></div>
                    <div className='photo' id='oregon-1' onClick={e => {this.handlePhotoChange(e.target.id)}}></div>
                    <div className='photo' id='alix' onClick={e => {this.handlePhotoChange(e.target.id)}}></div>
                    <div className='photo' id='adam' onClick={e => {this.handlePhotoChange(e.target.id)}}></div>
                    <div className='photo' id='chris-1' onClick={e => {this.handlePhotoChange(e.target.id)}}></div>
                    <div className='photo' id='erik' onClick={e => {this.handlePhotoChange(e.target.id)}}></div>
                    <div className='photo' id='oregon-7' onClick={e => {this.handlePhotoChange(e.target.id)}}></div>
                    <div className='photo' id='evan' onClick={e => {this.handlePhotoChange(e.target.id)}}></div>
                    <div className='photo' id='jacob' onClick={e => {this.handlePhotoChange(e.target.id)}}></div>
                    <div className='photo' id='oregon-4' onClick={e => {this.handlePhotoChange(e.target.id)}}></div>
                    <div className='photo' id='lights-1' onClick={e => {this.handlePhotoChange(e.target.id)}}></div>
                    <div className='photo' id='coronado' onClick={e => {this.handlePhotoChange(e.target.id)}}></div>
                    <div className='photo' id='michael' onClick={e => {this.handlePhotoChange(e.target.id)}}></div>
                    <div className='photo' id='lights-2' onClick={e => {this.handlePhotoChange(e.target.id)}}></div>
                    <div className='photo' id='oregon-6' onClick={e => {this.handlePhotoChange(e.target.id)}}></div>
                    <div className='photo' id='maddie' onClick={e => {this.handlePhotoChange(e.target.id)}}></div>
                    <div className='photo' id='oregon-5' onClick={e => {this.handlePhotoChange(e.target.id)}}></div>
                    <div className='photo' id='paige-3' onClick={e => {this.handlePhotoChange(e.target.id)}}></div>
                    <div className='photo' id='oregon-2' onClick={e => {this.handlePhotoChange(e.target.id)}}></div>
                    <div className='photo' id='sunny' onClick={e => {this.handlePhotoChange(e.target.id)}}></div>
                    <div className='photo' id='oregon-3' onClick={e => {this.handlePhotoChange(e.target.id)}}></div>
                    <div className='photo' id='paige-2' onClick={e => {this.handlePhotoChange(e.target.id)}}></div>
                    <div className='photo' id='more-photos'>
                        <h1>currently on a break from taking pictures.</h1>
                        <h1>more coming soon</h1>
                    </div>
                </div>
                
                <Modal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                >
                    <div className='photo-modal-container'>
                    <div className={this.state.photo + ' photo-modal'}></div>
                    </div>
                </Modal>
            </div>
        )
    }
}