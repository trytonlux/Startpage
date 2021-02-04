import config from "./config.json";

import React from "react";
import AppIcon from "./AppIcon";

class Overview extends React.Component<{}, {}>
{
    apps: JSX.Element[] = [];

    componentDidMount()
    {
        config.Apps.forEach((app) => {
            this.apps.push(
                <AppIcon key={app.label} label={app.label} icon={app.icon} link={app.url} bg={app.color} />
            );
        });
    }

    render()
    {
        return(
            <div className="overview">
                <div className="overview-inner">
                    {this.apps}
                </div>
            </div>
        );
    }
}

export default Overview;