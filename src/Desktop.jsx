import React from "react";
import Overview from "./Overview";
import Dock from "./Dock";

class Desktop extends React.Component
{
    render()
    {
        return(
            <>
            <Overview />
            <Dock />
            </>
        );
    }
}

export default Desktop;