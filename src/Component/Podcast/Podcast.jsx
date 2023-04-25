import React from 'react';
import './Podcast.css';
import { Button, Image } from 'react-bootstrap';
import { BsEyeFill, BsFillShareFill, BsThreeDots } from 'react-icons/bs';

const Podcast = ({ item: { image, genre, heading, description, profileImg, profilename, views } }) => {
    return (
        <article id={'podcast-container'}>
            <Image src={image} fluid />
            <section>
                <h2>{genre}</h2>
                <span><h1>{heading}</h1><BsThreeDots /></span>
                <p>{description.length > 40 ? description.slice(0, 40) + '...' : description}</p>
                <span><div><img src={profileImg} alt='Profile Photo' /><h3>{profilename}</h3></div>
                    <div>
                        <span>
                            <BsEyeFill />
                            <h3>{views} views</h3>
                        </span>
                        <Button><BsFillShareFill /> Share</Button>
                    </div>
                </span>
            </section>
        </article>
    )
}

export default Podcast