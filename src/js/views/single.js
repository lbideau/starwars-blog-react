import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
/* import { Context } from "../store/appContext";
 */ import { ItemDetail } from "../component/ItemDetail";
import { Description } from "../component/description";

const apiUrl = "https://www.swapi.tech/api";

export const Single = props => {
	//	const { store, actions } = useContext(Context);
	const params = useParams();
	const [item, setItem] = useState(undefined);

	const getData = async (id, endpoint) => {
		const response = await fetch(`${apiUrl}/${endpoint}/${id}`);
		if (response.ok) {
			const body = await response.json();
			let arrayItem = [];
			if (endpoint === "people") {
				arrayItem.push(
					["Name", body.result.properties.name],
					["Birth Day", body.result.properties.birth_year],
					["Gender", body.result.properties.gender],
					["Height", body.result.properties.height],
					["Skin Color", body.result.properties.skin_color],
					["Eye Color", body.result.properties.eye_color]
				);
			} else if (endpoint === "vehicles") {
				arrayItem.push(
					["Name", body.result.properties.name],
					["Crew", body.result.properties.crew],
					["Passengers", body.result.properties.passengers],
					["Vehicle Class", body.result.properties.vehicle_class],
					["Model", body.result.properties.model],
					["Manufacturer", body.result.properties.manufacturer]
				);
			} else {
				arrayItem.push(
					["Name", body.result.properties.name],
					["Climate", body.result.properties.climate],
					["Terrain", body.result.properties.terrain],
					["Gravity", body.result.properties.gravity],
					["Diameter", body.result.properties.diameter],
					["Population", body.result.properties.population]
				);
			}

			setItem(arrayItem);
		}
	};

	useEffect(
		() => {
			if (params.id && params.endpoint) {
				getData(params.id, params.endpoint);
			}
		},
		[params.id, params.endpoint]
	);

	return (
		<>
			<div className="container">
				{item ? (
					<ItemDetail item={item} />
				) : (
					<div className="d-flex py-3 justify-content-center">
						<button className="btn btn-primary" type="button" disabled>
							<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
							Loading...
						</button>
					</div>
				)}
			</div>
			<div className="row py-5">
				{item &&
					item.map((prop, index) => {
						return <Description key={index} value={prop} />;
					})}
				{/* {item &&
        Object.keys(item.properties).map((propName, index) => {
            return <Description key={index} name={propName} value={item.properties[propName]} />;
        })} */}
				{/* <div className="col border-top border-danger text-center">
        <p>{params.endpoint}</p>
        <p className="text-danger pt-3 m-0">Name</p>
        <p className="text-danger">{item ? item.properties.name : ""}</p>
    </div>
    <div className="col border-top border-danger text-center">
        <p className="text-danger pt-3 m-0">Birth Year</p>{" "}
        <p className="text-danger">{item ? item.properties.birth_year : ""}</p>
    </div>
    <div className="col border-top border-danger text-center">
        <p className="text-danger pt-3 m-0">Gender</p>{" "}
        <p className="text-danger">{item ? item.properties.gender : ""}</p>
    </div>
    <div className="col border-top border-danger text-center">
        <p className="text-danger pt-3 m-0">Height</p>{" "}
        <p className="text-danger">{item ? item.properties.height : ""}</p>
    </div>
    <div className="col border-top border-danger text-center">
        <p className="text-danger pt-3 m-0">Skin Color</p>{" "}
        <p className="text-danger">{item ? item.properties.skin_color : ""}</p>
    </div>
    <div className="col border-top border-danger text-center">
        <p className="text-danger pt-3 m-0">Eye Color</p>{" "}
        <p className="text-danger">{item ? item.properties.eye_color : ""}</p>
    </div> */}
			</div>
		</>
	);
};

Single.propTypes = {
	item: PropTypes.object
};
