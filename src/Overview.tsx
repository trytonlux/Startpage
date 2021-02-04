import config from "./config.json";

import React from "react";
import AppIcon from "./AppIcon";

interface OverviewState
{
    apps: JSX.Element[]
}

class Overview extends React.Component<{}, OverviewState>
{
    state: OverviewState = {
        apps: []
    }

    componentDidMount()
    {
        config.Apps.forEach((app) => {
            this.state.apps.push(
                <AppIcon key={app.label} label={app.label} icon={app.icon} link={app.url} bg={app.color} />
            );
        });
    }

    render()
    {
        return(
            <div className="overview">
                <div className="overview-inner">
                    {this.state.apps}
                </div>
            </div>
        );
    }
}

export default Overview;