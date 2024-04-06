import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import ModuleCard from "./card";
import Footer from "./footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<div className="row">
				<div className="col-12">
					<Navbar />
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<Jumbotron/>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-3">
						<ModuleCard />
					</div>
					<div className="col-3">
						<ModuleCard />
					</div>
					<div className="col-3">
						<ModuleCard />
					</div>
					<div className="col-3">
						<ModuleCard />
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<Footer />
				</div>
			</div>
		</div>

	);
};

export default Home;
