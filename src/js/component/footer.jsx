import React from "react";
import { Creditos } from "./data";

const Footer = () => {
    return (
        <div className="footer bg-dark p-4 mt-4 text-center">
            <p className="h6 text-white">Copyright {Creditos}</p>
        </div>
    )
}

export default Footer;