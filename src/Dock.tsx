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
            <AppIcon icon="launcher" onClick={this.props.onOverviewLauncherClicked} />
        </div>
        );
    }
}

export default Dock;
