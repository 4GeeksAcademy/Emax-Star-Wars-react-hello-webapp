import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron text-white">

			<div className="top d-flex justify-content-around align-items-center my-4">

				<div className="left">

					<img src="https://piks.eldesmarque.com/bin/esports/2021/05/Carl-Star-wars-skin-brawl-stars.jpg" alt="..." style={{ width: "600px" }}></img>


				</div>

				<div className="right">
					<h2 className="display-4">{store.planets[Number(params.uid) - 1].name}</h2>

					<p className="fs-4" style={{ width: "900px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quasi hic distinctio laudantium. Illo quos nostrum numquam deserunt animi quia eius laboriosam commodi vitae aliquid dignissimos unde error, quo assumenda iusto praesentium vero ratione esse blanditiis, nam temporibus incidunt recusandae vel! Obcaecati, quos voluptatem. Velit magni nostrum perspiciatis odit officiis ipsam similique, illo ab labore quo quibusdam quasi suscipit esse corporis quaerat, harum enim vel architecto tempora laborum, sapiente excepturi explicabo. Eaque accusantium ea odit mollitia voluptatum maxime aperiam eius molestias sint! Aliquid reprehenderit, consequatur, alias harum voluptatibus dolorem minima id iusto in explicabo fugiat enim, earum minus dolorum! Quisquam.</p>

				</div>

			</div>


			<hr className="my-4" />

			<div className="text-center">

				<p className="display-4">Rotation Period: {store.planets[Number(params.uid) - 1].rotation_period} </p>
				<p className="display-4">Orbital Period: {store.planets[Number(params.uid) - 1].orbital_period} </p>
				<p className="display-4">Diameter: {store.planets[Number(params.uid) - 1].diameter} </p>
				<p className="display-4">Climate: {store.planets[Number(params.uid) - 1].climate} </p>
				<p className="display-4">Gravity: {store.planets[Number(params.uid) - 1].gravity
				} </p>

			</div>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button" style={{ marginLeft: "30px" }}>
					Back home
				</span>
			</Link>
		</div>
	);
};

SinglePlanet.propTypes = {
	match: PropTypes.object
};
