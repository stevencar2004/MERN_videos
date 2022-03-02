import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { MernContext } from "../../../Context/Context";

const Index = () => {
	const params = useParams();
	const {
		listGenders,
		newCreatedVideo,
		getInfoVideo,
		inputChangeFormNewVideo,
		handleCreatedORUpdated,
	} = useContext(MernContext);

	useEffect(() => {
		if (params.id) {
			getInfoVideo(params.id);
		}
	}, []);

	return (
		<section className="container-md mt-4">
			<form
				onSubmit={(e) => {
					handleCreatedORUpdated(params.id, e);
				}}
			>
				<div className="row mb-3 align-items-center">
					<label htmlFor="title" className="col-sm-2 col-form-label fs-5">
						Title:
					</label>
					<div className="col-sm-10">
						<input
							type="text"
							className="form-control"
							id="title"
							name="title"
							placeholder="Title Video"
							onChange={inputChangeFormNewVideo}
							autoFocus
							required
							value={newCreatedVideo.title}
						/>
					</div>
				</div>

				<div className="row mb-3 align-items-center">
					<label htmlFor="url" className="col-sm-2 col-form-label fs-5">
						URL:
					</label>
					<div className="col-sm-10">
						<input
							type="text"
							className="form-control"
							id="url"
							name="url"
							placeholder="https://www.exampleVideo.com/show?v=2SzURw"
							onChange={inputChangeFormNewVideo}
							required
							value={newCreatedVideo.url}
						/>
					</div>
				</div>

				<div className="row mb-3 align-items-center">
					<label htmlFor="textarea" className="col-sm-2 col-form-label fs-5">
						Description:
					</label>
					<div className="col-sm-10">
						<textarea
							name="description"
							className="form-control"
							onChange={inputChangeFormNewVideo}
							placeholder="Write a description for this Video"
							id="textarea"
							required
							value={newCreatedVideo.description}
						></textarea>
					</div>
				</div>

				<div className="row mb-3 align-items-center">
					<label htmlFor="textarea" className="col-sm-2 col-form-label fs-5">
						Gender:
					</label>
					<div className="col-sm-10">
						<select
							className="form-select"
							aria-label="Default select example"
							required
							name="gender"
							onChange={inputChangeFormNewVideo}
						>
							<option selected>Select Gender</option>
							{listGenders.map((gender) => (
								<option value={gender} key={gender}>
									{gender}
								</option>
							))}
						</select>
					</div>
				</div>

				<div className="mt-4 d-flex gap-3 align-items-center">
					{params.id ? (
						<button
							type="submit"
							className="btn btn-info d-flex align-items-center gap-2"
						>
							<i className="fa-solid fa-floppy-disk"></i>
							<span>Edit Video</span>
						</button>
					) : (
						<button
							type="submit"
							className="mt-4 btn btn-success d-flex align-items-center gap-2"
						>
							<i className="fa-solid fa-plus"></i>
							<span>Create Video</span>
						</button>
					)}
					<Link to="/">Go to Back</Link>
				</div>
			</form>
		</section>
	);
};

export default Index;
