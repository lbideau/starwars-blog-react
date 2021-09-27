import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AppContext } from "../store/AppContext";

export const ItemCard = ({ item }) => {
	const { store, actions } = useContext(AppContext);
	return (
		<div className="card" style={{ minWidth: "300px" }}>
			<img src="https://i.imgur.com/fYbZenp.jpg" className="card-img-top" alt={item.name} />
			<div className="card-body">
				<h5 className="card-title">{item.name}</h5>
				<div className="d-flex justify-content-between">
					<Link
						className="btn btn-primary"
						to={`detail/${item.url.replace("https://www.swapi.tech/api/", "")}`}>
						{"Learn More"}
					</Link>
					<button
						type="button"
						onClick={event => {
							let url = "/detail/" + item.url.replace("https://www.swapi.tech/api/", "");
							if (
								store &&
								store.favorites.find((favorite, index) => {
									return favorite.url === url;
								})
							) {
								let index = store.favorites.indexOf(
									store.favorites.find((favorite, index) => {
										return favorite.url === url;
									})
								);
								actions.removeFavorite(index);
							} else {
								actions.addToFavorite(item.name, url, true);
							}
						}}
						className="btn border border-warning">
						{store &&
						store.favorites.find((favorite, index) => {
							return favorite.url === "/detail/" + item.url.replace("https://www.swapi.tech/api/", "");
						}) ? (
							<i className="fas fa-heart text-warning" />
						) : (
							<i className="far fa-heart text-warning" />
						)}
					</button>
				</div>
			</div>
		</div>
	);
};

ItemCard.propTypes = {
	item: PropTypes.object
};
