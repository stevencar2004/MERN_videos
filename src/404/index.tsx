import { Link } from "react-router-dom";

export const NotFound = () => {
	return (
		<div className="container-md d-flex flex-column align-items-center ">
			<div className="mt-5">
				<div className=" text-center">
					<img src="./img/404.png" alt="" style={{ width: 380 }} />
				</div>
				<div className="mt-3">
					<h2 className="fs-1 ">Oops! Page not found...</h2>
					<Link
						to="/"
						className="mt-4 btn btn-primary d-flex align-items-center justify-content-center gap-2"
					>
						<i className="fa-solid fa-home"></i>
						<span>Go to home</span>
					</Link>
				</div>
			</div>
		</div>
	);
};
