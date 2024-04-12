import React from "react";
import './../../styles/index.css';

const ModuleCard = (props) => {
    return (
        <div className="card d-flex dflex-row col-md-3 mb-3 mt-3 p-1">
            <img src={props.img} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.tittle}</h5>
                    <p className="card-text">{props.text}</p>
                    <a href="#" className="btn btn-primary">{props.button}</a>
                </div>
        </div>
    )
}

export default ModuleCard;
