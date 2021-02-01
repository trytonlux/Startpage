import "bulma/bulma.sass";
import "./main.scss";

import React from "react";
import ReactDOM from "react-dom";
import Desktop from "./Desktop";

ReactDOM.render(
    <React.StrictMode>
        <Desktop />
    </React.StrictMode>,
    document.getElementById("root")
)