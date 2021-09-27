import React, { Component, useContext } from "react";
import { AppContext } from "../store/AppContext";

export const Footer = () => {
	const { store, actions } = useContext(AppContext);
	return (
		<footer className="footer mt-auto py-3 text-center">
			<p>
				Made with <i className="fa fa-heart text-danger" /> by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>
			</p>
		</footer>
	);
};
