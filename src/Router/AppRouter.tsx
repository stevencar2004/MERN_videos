import { Routes, Route, BrowserRouter, Navigate, useNavigate } from "react-router-dom";
//
import { ToastContainer } from "react-toastify";
//
import NavBar from "../Components/NavBar";
import NewVideoForm from "../Video/Pages/NewVideoForm";
import { VideoList } from "../Video/Pages/HomeVideos/VideoList";
import { NotFound } from "../404";
import { Dashboard } from "../Dashboard";
import { Redirect } from "../Components/Redirect";

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<NavBar />

			<Routes>
				<Route path="/mern_videos/" element={<VideoList />} />
				<Route path="/mern_videos/new-video" element={<NewVideoForm />} />
				<Route path="/mern_videos/update/:id" element={<NewVideoForm />} />
				<Route path="/mern_videos/dashboard" element={<Dashboard />} />
				<Route path="/mern_videos/404" element={<NotFound />} />
				<Route path="/mern_videos/*" element={<Redirect route="/mern_videos/404" />} />
			</Routes>

			<ToastContainer />
		</BrowserRouter>
	);
};
