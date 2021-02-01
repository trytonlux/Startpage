import React from "react";
import AppIcon from "./AppIcon";

interface DockProps
{
    onOverviewLauncherClicked: () => void
}

class Dock extends React.Component<DockProps, {}>
{
    render()
    {
        return(
        <div className="dock">
            <AppIcon icon="github" bg="#161b22" link="https://github.com" />
            <AppIcon icon="email" bg="#505061" />
            <AppIcon icon="steam" bg="#2c2e35" />

            <AppIcon icon="launcher" onClick={this.props.onOverviewLauncherClicked} />
        </div>
        );
    }
}

export default Dock;
