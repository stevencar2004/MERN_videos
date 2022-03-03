import axios from "axios";
import { INewVideo } from "../../Video/Domain/INewVideo";
import { IVideos } from "../../Video/Domain/IVideo";

const URL_API: string = "https://api-mern-videos.herokuapp.com";

// GET LIST VIDEOS
export const getVideos = async () => {
	return await axios.get<IVideos[]>(`${URL_API}/videos`);
};

// GET ONE VIDEO
export const getVideo = async (id: string) => {
	return await axios.get<IVideos>(`${URL_API}/videos/${id}`);
};

// CREATE A VIDEO
export const createNewVideo = async (newVideo: INewVideo) => {
	return await axios.post(`${URL_API}/videos`, newVideo);
};

// UPDATE A VIDEO
export const updatedvideo = async (id: string | undefined, video: INewVideo) => {
	return await axios.put(`${URL_API}/videos/${id}`, video);
};

// DELETE A VIDEO
export const deleteVideo = async (id: string) => {
	return await axios.delete(`${URL_API}/videos/${id}`);
};
