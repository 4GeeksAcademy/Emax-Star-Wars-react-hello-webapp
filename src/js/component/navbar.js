import React from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css"

export const Navbar = () => {
	return (
		<div className="header">
			<nav className="navbar">

				<div className="left">

					<Link to="/">
						<img src="https://yt3.googleusercontent.com/0FgTOtFlh29rnwRZ0MUXAkkf-aho_LMsy2NJZNuoJhrb9UayXizmhn97gQb4_tWmiLOPSsZzE2I=s900-c-k-c0x00ffffff-no-rj" className="logo" alt=""></img>
					</Link>

				</div>

				<div className="right">

					<div className="ml-auto">
						<div className="dropdown dropstart">
							<button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites
							</button>
							<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
								<li><a className="dropdown-item" href="#">Action</a></li>
								<li><a className="dropdown-item" href="#">Another action</a></li>
								<li><a className="dropdown-item" href="#">Something else here</a></li>
							</ul>
						</div>

					</div>
				</div>

			</nav>

		</div>
	);
};
