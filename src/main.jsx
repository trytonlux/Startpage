import "bulma/bulma.sass";
import "./main.scss";

import React from "react";
import ReactDOM from "react-dom";
import Dock from "./Dock";

ReactDOM.render(
    <React.StrictMode>
        <Dock />
    </React.StrictMode>,
    document.getElementById("root")
)