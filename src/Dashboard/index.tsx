import { useContext, useEffect } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { MernContext } from "../Context/Context";

export const Dashboard = () => {
	const { listGenders, videos, isLoadingVideos, loadVideos, handleDeleteVideo } =
		useContext(MernContext);

	useEffect(() => {
		loadVideos();
	}, []);

	return (
		<section className="container-md mt-5">
			<div className="row gx-3 gy-4">
				<h3>Genders:</h3>
				{listGenders ? (
					listGenders.map((gender) => (
						<div className="col">
							<div
								className={`card p-3 ${
									listGenders.indexOf(gender) % 2 == 0 ? "bg-success" : "bg-primary"
								}`}
							>
								<h3 className="text-center text-white fw-boolder">{gender}:</h3>
								<h4 className="text-center" style={{ color: "#ECECEC" }}>
									{
										videos.filter(
											(video) => video.gender.toLowerCase() === gender.toLowerCase(),
										).length
									}
								</h4>
							</div>
						</div>
					))
				) : (
					<h2>Oops! Try again...</h2>
				)}
			</div>

			<div className="my-5 pt-3 row gx-3">
				<div className="col-12 col-md-6">
					<h4 className="">Recently added</h4>
					<div className="mt-3 ">
						{!isLoadingVideos ? (
							<div className="videoList row gy-4">
								{videos.length > 0 &&
									videos.slice(0, 3).map((video) => (
										<div className="col-12 col-md-6 col-xxl-4">
											<h5 className="text-muted" style={{ height: 50 }}>
												{video.title}
											</h5>
											<div
												className="d-flex justify-content-center"
												style={{ height: "200px", width: "100%", background: "#000" }}
											>
												<ReactPlayer
													url={video.url}
													style={{ maxHeight: "100%", maxWidth: "100%" }}
												/>
											</div>
										</div>
									))}
							</div>
						) : (
							<div className="d-flex align-items-center">
								<strong>Loading...</strong>
								<div
									className="spinner-border ms-auto"
									role="status"
									aria-hidden="true"
								></div>
							</div>
						)}
					</div>
				</div>

				<div className="col-12 col-md-6 px-3">
					<h4>List Videos</h4>
					{!isLoadingVideos ? (
						<ul className="list-group ">
							{videos.length > 0 &&
								videos.map((video) => (
									<li className="list-group-item d-flex justify-content-between gap-2">
										<p>{video.title}</p>
										<div className="d-flex gap-1">
											<button
												className="btn btn-danger d-flex align-items-center gap-2"
												onClick={() => {
													const id = video._id;
													handleDeleteVideo(id);
												}}
											>
												<i className="fa-solid fa-trash"></i>
											</button>

											<Link
												to={`/update/${video._id}`}
												className="btn btn-warning d-flex align-items-center gap-2"
											>
												<i className="fa-solid fa-pen"></i>
											</Link>
										</div>
									</li>
								))}
						</ul>
					) : (
						<div className="d-flex align-items-center">
							<strong>Loading...</strong>
							<div
								className="spinner-border ms-auto"
								role="status"
								aria-hidden="true"
							></div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};
