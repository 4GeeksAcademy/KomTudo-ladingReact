import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import ModuleCard from "./card";
import { DataCard, Creditos, DataShips } from "./data";
import Footer from "./footer";
import './../../styles/index.css';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	return (
		<div className="vh-100">
			<Navbar />
			<Jumbotron />

			<div className="row   mx-md-5 mt-5">
				<h1 className="d-flex justify-content-center gap-3">GATETES</h1>
				
					{DataCard().map(key => (
						<ModuleCard img={key.img} tittle={key.tittle} text={key.cardText} button={key.button} />
					))}
				

			</div>
			<div className="row   mx-md-5 mt-5">
				<h1 className="d-flex justify-content-center gap-3">BARCAZOS</h1>
				{DataShips.map(key => (
					<ModuleCard img={key.img} tittle={key.Model} text={key.cardText} button={key.Country} />
				))}
			</div>
			<Footer />
		</div>

	);
};

export default Home;
