import React from 'react';
import './Podcast.css';
import { Button, Dropdown, Image } from 'react-bootstrap';
import { BsEyeFill, BsFillShareFill, BsThreeDots } from 'react-icons/bs';

const Podcast = ({ item }) => {
    return (
        <article id={'podcast-container'}>
            <Image src={item?.image} fluid />
            <section>
                <h6>{item?.genre}</h6>
                <span id='heading_podcast'>
                    <h4>{item?.heading}</h4>
                    <Dropdown>
                        <Dropdown.Toggle variant="none" id="dropdown-basic">
                            <BsThreeDots />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="">edit</Dropdown.Item>
                            <Dropdown.Item href="">Report</Dropdown.Item>
                            <Dropdown.Item href="">Option 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </span>
                <p>{item?.description.length > 40 ? item?.description.slice(0, 40) + '...' : item?.description}</p>
                {item?.website && <Button style={{ width: '100%', background: 'transparent', color: 'orange', margin: '8px 0' }}
                    onClick={() => window.open(item?.website, '_blank')}>Website</Button>}
                <span id={'podcast_profile'}>
                    <div>
                        <span style={{ display: 'flex', columnGap: '5px', alignItems: 'center' }}>
                            <img src={item?.profileImage} alt='Profile Photo' />
                            <h3>{item?.profilename}</h3>
                        </span>
                    </div>
                    <div>
                        <span style={{ display: 'flex', columnGap: '5px', alignItems: 'center' }}>
                            <BsEyeFill />
                            <h6>{item?.views} views</h6>
                        </span>
                        <Button variant='secondary'><BsFillShareFill /></Button>
                    </div>
                </span>
            </section>
        </article>
    )
}

export default Podcast