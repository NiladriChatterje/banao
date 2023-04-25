import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Group from '../../assets/Vector.png'
import podcastsArray from './podcast.js';
import Podcast from '../Podcast/Podcast'
import { Button, ButtonGroup, Dropdown, DropdownButton, Image } from 'react-bootstrap';

const Heading = ['All Posts', 'Article', 'Event', 'Education', 'Job'];
const Home = () => {
    return (
        <>
            <div id='Banner'>
                <h1>Computer Engineering</h1>
                <p>142,765 Computer Engineers follow this</p>
            </div>
            <section id={'headings'}>
                <div>
                    <span>
                        {Heading?.map((item, i) => <Link key={i} to={`/${item}`} style={{ marginRight: '15px', color: 'grey', textDecoration: 'none' }} >
                            {item == 'All Posts' ? `${item}(${podcastsArray.length})` : item}</Link>)}
                    </span>
                    <div>

                        <Button variant='secondary' className='me-3'>Write a Post</Button>
                        <ButtonGroup style={{ background: '#2F6CE5' }}>
                            <Image src={Group} style={{ padding: '0px 8px' }} />
                            <DropdownButton as={ButtonGroup} title={` Join Group`} id="bg-nested-dropdown">
                                <Dropdown.Item eventKey="Group 1">Leisure</Dropdown.Item>
                                <Dropdown.Item eventKey="Group 1">Activism</Dropdown.Item>
                            </DropdownButton>
                        </ButtonGroup>
                    </div>
                </div>
                <div id='podcast_container'>
                    <div>
                        {podcastsArray?.map((item, i) => <Podcast key={i} item={item} />)}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home