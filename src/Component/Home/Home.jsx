import React from 'react';
import './Home.css';
import Rect_3 from '../../assets/rect03.png';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';

const Heading = ['All Posts(', 'Article', 'Event', 'Education', 'Job'];
const Home = () => {

    return (
        <>
            <img src={Rect_3} alt='Banner' />
            <section id={'headings'}>
                <div>
                    <span>
                        {Heading?.map((item, i) => <Link key={i} to={`/${item}`} style={{ marginRight: '15px', color: 'grey', textDecoration: 'none' }} >{item}</Link>)}
                    </span>
                    <div>

                        <Button variant='secondary' className='me-3'>Write a Post</Button>
                        <ButtonGroup>
                            <DropdownButton as={ButtonGroup} title={` Join Group`} id="bg-nested-dropdown">
                                <Dropdown.Item eventKey="Group 1">Group 1</Dropdown.Item>
                                <Dropdown.Item eventKey="Group 1">Group 2</Dropdown.Item>
                            </DropdownButton>
                        </ButtonGroup>
                    </div>
                </div>
                <div id='podcast_container'>

                </div>
            </section>
        </>
    );
}

export default Home