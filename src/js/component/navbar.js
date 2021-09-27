import React, { useContext } from "react";
import { Link } from "react-router-dom";
import starWarsLogo from "../../img/starWarsLogo.png";
import { AppContext } from "../store/AppContext";

export const Navbar = () => {
	const { store, actions } = useContext(AppContext);

	let handleRemoveFav = index => {
		let navDropDown = document.querySelector("#navDropDown");
		let dropButton = document.querySelector("#dropdownMenuButton1");
		navDropDown.classList.add("dropdown-menu", "dropdown-menu-end", "show");
		navDropDown.setAttribute("data-bs-popper", "none");
		dropButton.classList.add("btn", "btn-primary", "dropdown-toggle", "show");
		dropButton.setAttribute("aria-expanded", "true");
		actions.removeFavorite(index);
	};

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid">
				<Link to="/">
					<span className="navbar-brand" href="#">
						<img
							src={starWarsLogo}
							alt=""
							width="100"
							height="50"
							className="d-inline-block align-text-top"
						/>
					</span>
				</Link>
				<div className="dropdown">
					<button
						className="btn btn-primary dropdown-toggle"
						type="button"
						id="dropdownMenuButton1"
						data-bs-toggle="dropdown"
						aria-expanded="false">
						Favorites <span className="dot">{store.favorites.length}</span>
					</button>
					<ul
						id="navDropDown"
						className="dropdown-menu dropdown-menu-end"
						aria-labelledby="dropdownMenuButton1">
						{store.favorites.map((favorite, index) => {
							return (
								<li className="d-flex align-items-center" key={index}>
									<Link to={favorite.url} className="dropdown-item">
										{favorite.favName}
									</Link>
									<i
										className="far fa-trash-alt pe-2"
										onClick={e => {
											handleRemoveFav(index);
											if (store.favorites.length === 1) {
												navDropDown.classList.remove("show");
												navDropDown.removeAttribute("data-bs-popper");
												//dropButton.classList.remove("show");
												//dropButton.setAttribute("aria-expanded", "false");
											}
										}}
									/>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};
