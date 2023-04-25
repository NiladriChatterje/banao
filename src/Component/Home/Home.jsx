import React from "react"
import "./Home.css"
import { Link } from "react-router-dom"
import Group from "../../assets/Vector.png"
import podcastsArray from "./podcast.js"
import Podcast from "../Podcast/Podcast"
import Modal from "../Modal/Modal"
import {
	Button,
	ButtonGroup,
	Dropdown,
	DropdownButton,
	Image,
} from "react-bootstrap"
import { AiOutlineArrowLeft } from "react-icons/ai"
import { BsFillPencilFill, BsFillHandThumbsUpFill } from "react-icons/bs"
import { GrLocation } from 'react-icons/gr'
import { RiErrorWarningLine } from 'react-icons/ri'
import { toast } from "react-hot-toast"

const Heading = ["All Posts", "Article", "Event", "Education", "Job"];
const RecommendedGroups = ['Leisure', 'Activism', 'MBA', 'Philosophy']
const Home = ({ setModalToggle, modalToggle, toggle, setToggle }) => {
	const [joinState, setJoinState] = React.useState(() => true);
	const [ifLoginthenRecomment, setIfLoginThenRecomment] = React.useState(() => true);

	return (
		<>{modalToggle ? <Modal setModalToggle={setModalToggle} modalToggle={modalToggle}
			toggle={toggle} setToggle={setToggle} /> : null}
			<div id="Banner">
				<AiOutlineArrowLeft id={'arrow-icon'} style={{ position: 'absolute', left: '3%', color: 'white', top: '10%' }} />
				<div id="texts-head">
					<h1>Computer Engineering</h1>
					<p>142,765 Computer Engineers follow this</p>
				</div>
				<button id='join' onClick={() => toast('Currently Backend is at service')}>
					{joinState ? 'Join Group' : 'Leave Group'}
				</button>
			</div>
			<section id={"headings"}>
				<div id="desk-navs">
					<span>
						{Heading?.map((item, i) => (
							<Link className="text-muted" key={i} to={`/${item == "All Posts" ? '' : item}`}>
								{item == "All Posts"
									? `${item}(${podcastsArray.length})`
									: item}
							</Link>
						))}
					</span>
					<div>
						<Button variant="secondary" className="me-3">
							Write a Post
						</Button>
						<ButtonGroup style={{ background: "#2F6CE5" }}>
							<Image src={Group} style={{ padding: "0px 8px" }} />
							<DropdownButton
								as={ButtonGroup}
								title={` Join Group`}
								id="bg-nested-dropdown"
							>
								<Dropdown.Item eventKey="Group 1">Leisure</Dropdown.Item>
								<Dropdown.Item eventKey="Group 1">Activism</Dropdown.Item>
							</DropdownButton>
						</ButtonGroup>
					</div>
				</div>

				<div id="mobile-navs">
					<div>Posts({podcastsArray.length})</div>
					<div>
						<div className="dropdown">
							<button
								id="drp-btn"
								className="btn btn-secondary dropdown-toggle"
								type="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Filter: All
							</button>
							<ul className="dropdown-menu">
								<li>
									<a className="dropdown-item" href="#">
										Leisure
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Activism
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div id="podcast_container">
					<div>
						{podcastsArray?.map((item, i) => (
							<Podcast key={i} item={item} />
						))}
					</div>
					<div style={{ position: 'relative', width: '30%' }} id={'mobile_view_notes'}>
						<GrLocation style={{ position: 'absolute', left: '0px', top: '5px' }} />
						<BsFillPencilFill onClick={() => setToggle(prev => !prev)} cursor={'pointer'}
							id={'note'} />
						<input type={'text'} className="note" />
						<span style={{ textAlign: 'justify' }}><RiErrorWarningLine /> Your Location will help us serve better and extend a personalised experience.</span>
						{ifLoginthenRecomment ? <div className="mt-5">
							<span><BsFillHandThumbsUpFill /> RECOMMENDED GROUPS</span>
							{RecommendedGroups?.map(item => <section className="mt-2 w-100 d-flex justify-content-between"
							><span>{item}</span><Button onClick={() => toast(`you started following ${item}`)}
								variant="secondary" className=" rounded-pill">Follow</Button></section>)}

						</div> : null}
					</div>

				</div>
			</section>
		</>
	)
}

export default Home
