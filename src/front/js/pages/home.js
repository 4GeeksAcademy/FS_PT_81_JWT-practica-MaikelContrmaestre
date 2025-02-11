import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

useEffect(()=>{
	if (!store.user && localStorage.getItem('token')) actions.getUserData()
},[])
	return (
		<div className="text-center mt-5">
			<div className="container justify-content-center">
				<h2>Practica JWT</h2>
				{store.user?.name ? <h2>Hola {store.user?.name}</h2> : <h2>Hola invitado</h2>}
			</div>
		</div>
	);
};
