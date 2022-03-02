import { useContext } from "react";
import { MernContext } from "../../../Context/Context";

export const Filtrado = () => {
	const { handleFieldSearch, handleGenderFilter } = useContext(MernContext);

	return (
		<div className="my-5 d-flex flex-md-wrap flex-column flex-md-row justify-content-between align-items-md-center gap-4">
			<div className="flex-grow-1">
				<input
					type="text"
					className="form-control"
					placeholder="write the name of the video..."
					onChange={handleFieldSearch}
				/>
			</div>

			<div className="">
				<div className="form-check form-check-inline">
					<input
						className="form-check-input"
						type="radio"
						id="programming"
						value="programming"
						name="gender"
						onChange={handleGenderFilter}
					/>
					<label className="form-check-label" htmlFor="programming">
						Programming
					</label>
				</div>

				<div className="form-check form-check-inline">
					<input
						className="form-check-input"
						type="radio"
						id="music"
						value="music"
						name="gender"
						onChange={handleGenderFilter}
					/>
					<label className="form-check-label" htmlFor="music">
						Music
					</label>
				</div>

				<div className="form-check form-check-inline">
					<input
						className="form-check-input"
						type="radio"
						id="news"
						value="news"
						name="gender"
						onChange={handleGenderFilter}
					/>
					<label className="form-check-label" htmlFor="news">
						News
					</label>
				</div>

				<div className="form-check form-check-inline">
					<input
						className="form-check-input"
						type="radio"
						id="sport"
						value="sports"
						name="gender"
						onChange={handleGenderFilter}
					/>
					<label className="form-check-label" htmlFor="sport">
						Sports
					</label>
				</div>
			</div>

			{/* <button
					type="submit"
					className="btn btn-primary d-flex align-items-center gap-2 flex-grow-1 flex-lg-grow-0 justify-content-center"
				>
					<i className="fa-solid fa-magnifying-glass"></i>
					<span>Search</span>
				</button> */}
		</div>
	);
};
