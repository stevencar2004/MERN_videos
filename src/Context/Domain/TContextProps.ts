import { ChangeEvent, FormEvent } from "react";
import { INewVideo } from "../../Video/Domain/INewVideo";
import { IVideos } from "../../Video/Domain/IVideo";

export type TContextProps = {
	videos: IVideos[];
	isLoadingVideos: boolean;
	newCreatedVideo: INewVideo;
	listGenders: string[];
	fieldSearch: string;
	genderFilter: string;
	//
	loadVideos: () => void;
	handleDeleteVideo: (id: string) => void;
	getInfoVideo: (id: string) => void;
	handleCreatedORUpdated: (id: string | undefined, e: FormEvent<HTMLFormElement>) => void;
	inputChangeFormNewVideo: (
		e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
	) => void;
	handleFieldSearch: (e: ChangeEvent<HTMLInputElement>) => void;
	handleGenderFilter: (e: ChangeEvent<HTMLInputElement>) => void;
	filterVideos: () => IVideos[];
};
