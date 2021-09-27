import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const AppContext = createContext(undefined);

const AppContextProvider = ({ children }) => {
	const [store, setStore] = useState({
		favorites: []
	});

	const actions = {
		addToFavorite: (_name, _url, _isFav) => {
			const favs = [...store.favorites, { favName: _name, url: _url, isFav: _isFav }];
			setStore(prev => ({
				...prev,
				favorites: favs
			}));
		},

		removeFavorite: index => {
			const newFav = store.favorites.filter((fav, i) => i !== index);
			setStore(prev => ({ ...prev, favorites: newFav }));
		}
	};
	const context = { store, actions };

	return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

AppContextProvider.propTypes = {
	children: PropTypes.node
};

export default AppContextProvider;
