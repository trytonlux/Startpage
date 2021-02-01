import React from "react";
import AppIcon from "./AppIcon";

class Dock extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
        <div className="dock">
            <AppIcon icon="github" bg="#161b22" link="https://github.com" />
            <AppIcon icon="email" bg="#505061" />
            <AppIcon icon="steam" bg="#2c2e35" />

            <AppIcon icon="launcher" onClick={this.props.on_overview_launcher_clicked} />
        </div>
        );
    }
}

export default Dock;
