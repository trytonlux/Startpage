import React from "react";
import Overview from "./Overview";
import Dock from "./Dock";

class Desktop extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { show_overview: false };

        this.overview = React.createRef();
    }

    render()
    {
        return(
            <>
            <Overview ref={this.overview} />
            <Dock toggle_overview={() => this.overview.current.toggle_show()} />
            </>
        );
    }
}

export default Desktop;