import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface propsRedirect {
	route: string;
}

export const Redirect = ({ route }: propsRedirect) => {
	const navigate = useNavigate();

	useEffect(() => {
		return navigate(route);
	}, []);

	return <div>Redirigiendo...</div>;
};
