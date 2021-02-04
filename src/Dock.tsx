import config from "./config.json";

import React from "react";
import AppIcon from "./AppIcon";

interface DockProps
{
    onOverviewLauncherClicked: () => void
}

interface DockState
{
    apps: JSX.Element[]
}

class Dock extends React.Component<DockProps, DockState>
{
    state: DockState = {
        apps: []
    }

    componentDidMount()
    {
        const dock_apps = config.Dock;
        const apps: JSX.Element[] = [];

        config.Apps.forEach((app) => {
            if (dock_apps.includes(app.label))
            {
                apps.push(
                    <AppIcon key={app.label} icon={app.icon} link={app.url} bg={app.color} />
                );
            }
        });

        this.setState({
            apps: apps
        });
    }

    render()
    {
        return(
            <div className="dock">
                {this.state.apps}

                <AppIcon icon="launcher" onClick={this.props.onOverviewLauncherClicked} />
            </div>
        );
    }
}

export default Dock;
