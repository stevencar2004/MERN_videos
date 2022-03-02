import { useContext } from "react";
import { Link } from "react-router-dom";

// Domain
import { IpropsVideoItem } from "../../Domain/IPropsVideoItem";

// Context
import { MernContext } from "../../../Context/Context";

// Components
import ReactPlayer from "react-player";

export const VideoItem = ({ video }: IpropsVideoItem) => {
	const { handleDeleteVideo } = useContext(MernContext);

	return (
		<div className="col-md-6 col-xl-4">
			<div className="card" style={{ height: "600px" }}>
				<div
					className="d-flex justify-content-center"
					style={{ minHeight: 250, width: "100%", background: "#000" }}
				>
					<ReactPlayer url={video.url} style={{ height: "250px", maxWidth: "100%" }} />
				</div>

				<div className="card-body mt-4">
					<h5 className="card-title ">{video.title}</h5>
					<p className="card-text">
						{video.description.length > 30 && video.description.slice(0, 77) + "..."}
					</p>
					<h6 className="text-muted">Gender: {video.gender}</h6>
				</div>

				<div className="d-flex justify-content-between p-2">
					<a
						href={video.url}
						target="_blank"
						rel="noreferrer"
						className="btn btn-outline-primary"
					>
						Go to video
					</a>
					<div className="d-flex gap-2">
						<button
							className="btn btn-danger d-flex align-items-center gap-2"
							onClick={() => {
								const id = video._id;
								handleDeleteVideo(id);
							}}
						>
							<i className="fa-solid fa-trash"></i>
							<span>Delete</span>
						</button>

						<Link
							to={`/mern_videos/update/${video._id}`}
							className="btn btn-warning d-flex align-items-center gap-2"
						>
							<i className="fa-solid fa-pen"></i>
							<span>Edit</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
