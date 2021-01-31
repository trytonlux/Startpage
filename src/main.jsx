import "bulma/bulma.sass";
import "./main.scss";

import React from "react";
import ReactDOM from "react-dom";
import Overview from "./Overview";
import Dock from "./Dock";

ReactDOM.render(
    <React.StrictMode>
        <Overview />
        <Dock />
    </React.StrictMode>,
    document.getElementById("root")
)