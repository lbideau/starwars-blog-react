import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const ItemDetail = ({ item }) => {
	console.log("ItemDetail ", item);
	return (
		<div className="row flex-wrap mt-md-5">
			<div className="col-md-6 p-0">
				<img src="https://i.imgur.com/fYbZenp.jpg" className="img-fluid" alt="" />
			</div>

			<div className="col-md-6 mt-3 mt-md-0 pl-md-4">
				<h1 className="display-3">{item[0][1]}</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut semper orci. Ut facilisis ante
					non vulputate molestie. Aenean et odio ipsum. Quisque in ex lectus. Pellentesque semper sagittis
					nulla quis volutpat. Etiam sapien augue, faucibus eu lobortis id, eleifend ut metus. Sed dapibus
					diam dignissim, luctus nisl et, faucibus augue.
				</p>
			</div>
		</div>
	);
};

ItemDetail.propTypes = {
	item: PropTypes.array
};
