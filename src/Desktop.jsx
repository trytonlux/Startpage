import React from "react";
import Overview from "./Overview";
import Dock from "./Dock";

class Desktop extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { show_overview: false };
    }

    render()
    {
        return(
            <>
            <Overview />
            <Dock on_overview_launcher_clicked={() => console.log("Clicked launcher")} />
            </>
        );
    }
}

export default Desktop;