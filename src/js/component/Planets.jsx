import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

const Planets = () => {
	const { store, actions } = useContext(Context);
     
    console.log(store.planets)


	return (

		<>

			<h1 className="title-p my-3">Planets</h1>
			<div className=" d-flex flex-row overflow-auto my-5 mx-5">

				{store.planets && store.planets.length > 0 && store.planets.map((item, index) => (

					<div className="cards mx-5">

						<div className="card mb-5" style={{ width: "20rem", }}>
							<img src={`https://starwars-visualguide.com/assets/img/planets/${item.url.split("/")[5]}.jpg`} className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text"> Climate: {item.climate}</p>
								<p className="card-text">Orbital Period: {item.orbital_period}</p>
								<p className="card-text">Diameter: {item.diameter}</p>

								<div className="buttons">
									<Link to={"/singlePlanet/"  + item.url.split("/")[5] }
										type="button"
										className="btn btn-outline-primary"
									>
										Learn more!
									</Link>
									<div className="yellow-container">
										<i
											className="fa-regular fa-heart fa-2xl"
											style={{ color: "#ff0000" }}
										></i>
									</div>
								</div>
							</div>
						</div>

					</div>

				))}
			</div>

		</>
	);
};

export default Planets;