import { Link, NavLink } from "react-router-dom";

const index = () => {
	return (
		<>
			<nav className="navbar navbar-expand-md navbar-light">
				<div className="container-md d-flex  justify-content-md-around  justify-content-sm-between">
					<NavLink className="navbar-brand d-flex gap-2" to="/mern_videos/">
						<img src="./img/play-solid.svg" alt="" style={{ width: 18 }} />
						<span>MERN Videos</span>
					</NavLink>

					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#menu"
						aria-controls="menu"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div
						className="collapse navbar-collapse d-md-flex justify-content-md-end"
						id="menu"
					>
						<ul className="navbar-nav mb-2 mb-md-0">
							<li className="nav-item">
								<NavLink className="nav-link" to="/mern_videos/">
									Home
								</NavLink>
							</li>

							<li className="nav-item">
								<NavLink className="nav-link " to="/mern_videos/new-video">
									Create Video
								</NavLink>
							</li>

							<li className="nav-item">
								<NavLink className="nav-link " to="/mern_videos/dashboard">
									Dashboard
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
};

export default index;
