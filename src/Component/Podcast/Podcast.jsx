import React from "react"
import "./Podcast.css"
import { Button, Dropdown, Image } from "react-bootstrap"
import { BsEyeFill, BsFillShareFill, BsThreeDots } from "react-icons/bs"

const Podcast = ({ item }) => {
	return (
		<article id={"podcast-container"}>
			<Image src={item?.image} fluid />
			<section>
				<h6>{item?.genre}</h6>
				<span id="heading_podcast">
					<h5>{item?.heading}</h5>
					<div className="dropdown">
						<button
							className="btn btn-secondary dropdown-toggle"
							type="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							<BsThreeDots />
						</button>
						<ul className="dropdown-menu">
							<li>
								<a className="dropdown-item" href="#">
									edit
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Report
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Option 3
								</a>
							</li>
						</ul>
					</div>
				</span>
				<p>
					{item?.description.length > 40
						? item?.description.slice(0, 40) + "..."
						: item?.description}
				</p>
				{item?.website && (
					<Button
						style={{
							width: "100%",
							background: "transparent",
							color: "orange",
							margin: "8px 0",
						}}
						onClick={() => window.open(item?.website, "_blank")}
					>
						Website
					</Button>
				)}
				<span id={"podcast_profile"}>
					<div>
						<span
							style={{
								display: "flex",
								columnGap: "5px",
								alignItems: "center",
							}}
						>
							<img src={item?.profileImage} alt="Profile Photo" />
							<h4>{item?.profilename}</h4>
						</span>
					</div>
					<div>
						<span
							style={{
								display: "flex",
								columnGap: "5px",
								alignItems: "center",
							}}
						>
							<BsEyeFill style={{ marginBottom: '5px' }} />
							<h6>{item?.views} views</h6>
						</span>
						<Button variant="secondary">
							<BsFillShareFill />
						</Button>
					</div>
				</span>
			</section>
		</article>
	)
}

export default Podcast
