import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";

// Context
import { MernContext } from "./Context";

// Services
import * as videoServices from "../Services/Video/VideoServices";

// Domain Video
import { IVideos } from "../Video/Domain/IVideo";
import { INewVideo } from "../Video/Domain/INewVideo";

// Domain Context
import { TProviderProps } from "./Domain/TProviderProps";

// Components
import { toast } from "react-toastify";

const INITIAL_STATE: INewVideo = {
	title: "",
	description: "",
	url: "",
	gender: "",
};

const INITIAL_GENDERS = ["Programming", "News", "Music", "Entertainment", "Sports"];

export const Provider = ({ children }: TProviderProps) => {
	const [listGenders, setListGenders] = useState(INITIAL_GENDERS);
	const [fieldSearch, setFieldSearch] = useState("");
	const [genderFilter, setGenderFilter] = useState("");

	const [videos, setVideoList] = useState<IVideos[]>([]);
	const [isLoadingVideos, setLoadingVideoset] = useState<boolean>(true);

	const [newCreatedVideo, setCreatedNewVideo] = useState<INewVideo>(INITIAL_STATE);

	// SE ENCARGA DE PEDIR LOS VIDEOS Y GUARDARLOS
	const loadVideos = async () => {
		const res = await videoServices.getVideos();

		const orderedVideos = res.data
			.map((video) => {
				return {
					...video,
					createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
					updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date(),
				};
			})
			.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

		setVideoList(orderedVideos);
		setLoadingVideoset(false);
	};
	//______________________________

	// OBTIENE LA INFORMACION DE UN SOLO VIDEO
	const getInfoVideo = async (id: string) => {
		const { data } = await videoServices.getVideo(id);
		setCreatedNewVideo({
			title: data.title,
			description: data.description,
			url: data.url,
			gender: data.gender,
		});
	};
	//______________________________

	// BOTONES DEL CRUD
	const handleDeleteVideo = async (id: string) => {
		videoServices.deleteVideo(id);
		loadVideos();
	};
	const handleCreatedORUpdated = async (
		id: string | undefined,
		e: FormEvent<HTMLFormElement>,
	) => {
		e.preventDefault();
		if (id) {
			await videoServices
				.updatedvideo(id, newCreatedVideo)
				.then((res) => {
					toast.info("Updated Video");
				})
				.catch((error) => toast.warning("ops, Try Again..."));
		} else {
			await videoServices
				.createNewVideo(newCreatedVideo)
				.then((res) => {
					toast.success("New video added");
					setCreatedNewVideo(INITIAL_STATE);
				})
				.catch((error) => toast.warning("This video exist, create other"));
		}
	};
	//______________________________

	// OBTIENE LOS VALORES QUE SE INGRESAN EN LOS CAMPOS Y LOS GUARDA
	const inputChangeFormNewVideo = (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
	) => {
		const name = e.target.name;
		const value = e.target.value;
		setCreatedNewVideo({ ...newCreatedVideo, [name]: value });
	};
	//______________________________

	// CAMBIAN EL ESTADO DE LAS OPCIONES DE FILTRADO
	const handleFieldSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setFieldSearch(e.target.value);
	};

	const handleGenderFilter = (e: ChangeEvent<HTMLInputElement>) => {
		setGenderFilter(e.target.value);
	};
	//______________________________

	// ES LA LOGICA PARA FILTRAR EL CONTENIDO, YA SEA POR EL TEXTO DEL CAMPO SEARCH O POR LAS OPCIONES DE LOS RADIO BUTTONS
	const filterVideos = () => {
		if (fieldSearch !== "" && genderFilter !== "") {
			let filterdListVideos = videos.filter(
				(video) =>
					video.gender.toLowerCase() === genderFilter.toLowerCase() &&
					video.title.toLowerCase().includes(fieldSearch.toLowerCase()),
			);
			return filterdListVideos;
		} else if (genderFilter !== "") {
			let filterdListVideos = videos.filter(
				(video) => video.gender.toLowerCase() === genderFilter.toLowerCase(),
			);
			return filterdListVideos;
		} else if (fieldSearch !== "") {
			let filterdListVideos = videos.filter((video) =>
				video.title.toLowerCase().includes(fieldSearch.toLowerCase()),
			);

			return filterdListVideos;
		}
		return videos;
	};
	//______________________________

	return (
		<MernContext.Provider
			value={{
				videos,
				isLoadingVideos,
				newCreatedVideo,
				listGenders,
				fieldSearch,
				genderFilter,
				loadVideos,
				getInfoVideo,
				handleDeleteVideo,
				handleCreatedORUpdated,
				inputChangeFormNewVideo,
				handleFieldSearch,
				handleGenderFilter,
				filterVideos,
			}}
		>
			{children}
		</MernContext.Provider>
	);
};
