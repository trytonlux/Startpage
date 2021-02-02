import React from "react";
import AppIcon from "./AppIcon";

class Overview extends React.Component<{}, {}>
{
    render()
    {
        return(
            <div className="overview">
                <div className="overview-inner">
                    <AppIcon icon="github" label="GitHub" bg="#161b22" />
                    <AppIcon icon="github" label="GitHub" bg="#161b22" />
                    <AppIcon icon="github" label="GitHub" bg="#161b22" />
                    <AppIcon icon="github" label="GitHub" bg="#161b22" />
                    <AppIcon icon="github" label="GitHub" bg="#161b22" />
                    <AppIcon icon="github" label="GitHub" bg="#161b22" />

                    <AppIcon icon="github" label="GitHub" bg="#161b22" />
                    <AppIcon icon="github" label="GitHub" bg="#161b22" />
                </div>
            </div>
        );
    }
}

export default Overview;