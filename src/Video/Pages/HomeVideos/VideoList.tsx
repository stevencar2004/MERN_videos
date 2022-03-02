import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

//Context
import { MernContext } from "../../../Context/Context";

//Components
import { Filtrado } from "../../Components/Filtrado";
import { VideoItem } from "./VideoItem";

export const VideoList = () => {
	const { fieldSearch, genderFilter, videos, loadVideos, isLoadingVideos, filterVideos } =
		useContext(MernContext);

	useEffect(() => {
		loadVideos();
		filterVideos();
	}, [genderFilter, fieldSearch]);

	return (
		<section className="container-md mt-4">
			<Filtrado />

			{!isLoadingVideos ? (
				<div className="videoList row gx-3 gy-4">
					{filterVideos().length > 0 ? (
						filterVideos().map((video) => <VideoItem video={video} key={video._id} />)
					) : (
						<div className="row mt-5 g-3 justify-items-center">
							<div className="col-12 col-md-6">
								<h2 className="text-muted">There are currently no videos...</h2>
								<Link
									to="/new-video"
									className="mt-4 btn btn-success d-flex align-items-center gap-2"
								>
									<i className="fa-solid fa-plus"></i>
									<span>Create Video</span>
								</Link>
							</div>
							<div className="col-12 col-md-6 text-center">
								<img src="./img/empty.svg" alt="" style={{ width: 280 }} />
							</div>
						</div>
					)}
				</div>
			) : (
				<div className="d-flex align-items-center">
					<strong>Loading...</strong>
					<div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
				</div>
			)}
		</section>
	);
};
