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
				<Route path="/" element={<VideoList />} />
				<Route path="/new-video" element={<NewVideoForm />} />
				<Route path="/update/:id" element={<NewVideoForm />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/404" element={<NotFound />} />
				<Route path="/*" element={<Redirect route="404" />} />
			</Routes>

			<ToastContainer />
		</BrowserRouter>
	);
};
