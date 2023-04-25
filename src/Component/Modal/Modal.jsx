import React, { useState } from 'react';
import './Modal.css'
import CreateAccount from './CreateAccount/CreateAccount';
import Login from './Login/Login';
import Card from 'react-bootstrap/Card';
import ModalImage from '../../assets/modal.png'
import Image from 'react-bootstrap/Image';
import { IoIosCloseCircle } from 'react-icons/io'

const Modal = ({ setModalToggle, modalToggle, toggle, setToggle }) => {

    return (<>
        {modalToggle ? (<div id={'modal_container'}>
            <Card style={{
                width: '47rem', height: 'max-content',
                background: '#EFFFF4'
            }} className="position-absolute top-50 start-50 translate-middle">
                <IoIosCloseCircle onClick={() => setModalToggle(false)}
                    style={{ position: 'absolute', right: '0px', top: '-20px', color: 'white', cursor: 'pointer' }} />
                <Card.Header className='fw-semibold fs-6 text-center'
                    style={{ color: '#008A45', background: '#EFFFF4' }}>
                    Lets Learn, share & inspire each other with our passion for computer engineering. Sign Up now 🤘
                </Card.Header>
                <Card.Body className="d-flex justify-content-center">
                    {toggle ? <Login /> : <CreateAccount />}
                    <div className='w-50'>
                        <Card.Text>{toggle ? 'Already have an account?' : 'Create an Account'}</Card.Text>
                        <Image src={ModalImage} fluid width={320} style={{ objectFit: 'Container' }} alt='modalImage' />
                    </div>
                </Card.Body>
            </Card>
        </div>) : null}</>
    )
}

export default Modal