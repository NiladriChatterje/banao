import React from 'react';
import './Navbar.css';
import ATG from '../../assets/Union1.png';
import { InputGroup, Form, Dropdown } from 'react-bootstrap';
import { BsFillCaretDownFill } from 'react-icons/bs';
import { BiSearchAlt2 } from 'react-icons/bi'

function Navbar({ setModalToggle, setToggle }) {
    return (
        <nav>
            <img src={ATG} alt='LOGO' />
            <InputGroup style={{
                textAlign: 'center', display: 'flex', alignItems: 'center',
                background: '#F2F2F2', width: '360px', padding: '0 15px',
                height: '42px', borderRadius: '21px'
            }}>
                <BiSearchAlt2 />
                <Form.Control placeholder={'Search for your favorite groups in ATG'}
                    style={{
                        fontFamily: 'FontAwesome',
                        textAlign: 'center', borderStyle: 'none',
                        background: 'transparent', width: '300px',
                        height: '42px', borderRadius: '21px'
                    }} />
            </InputGroup>
            <Dropdown>
                Create account
                <Dropdown.Toggle variant="none" style={{ color: 'blue' }} id="dropdown-basic">
                    Its Free!
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => { setModalToggle(true); setToggle(true) }} >Sign In</Dropdown.Item>
                    <Dropdown.Item onClick={() => { setModalToggle(true); setToggle(false) }}>Create Account</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </nav>
    );
}


export default Navbar;