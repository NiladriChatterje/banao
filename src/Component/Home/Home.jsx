import React from 'react';
import './Home.css';
import Rect_3 from '../../assets/rect03.png';
import { Link } from 'react-router-dom';

const Heading = ['All Posts(', 'Article', 'Event', 'Education', 'Job'];
const Home = () => {

    return (
        <><h1></h1>
            <img src={Rect_3} alt='Banner' />
            <section id={'headings'}>
                <div>
                    <span>
                        {Heading?.map((item, i) => <Link key={i} to={`/${item}`} style={{ marginRight: '15px', color: 'grey' }} >{item}</Link>)}
                    </span>
                    <div><button>Write a Post</button>
                        <button>Join Group</button></div>
                </div>
                <div id='podcast_container'>

                </div>
            </section>
        </>
    );
}

export default Home