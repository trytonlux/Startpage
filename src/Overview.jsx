import React from "react";
import AppIcon from "./AppIcon";

class Overview extends React.Component
{
    constructor(props)
    {
        super(props);

        this.overview = React.createRef();
    }

    componentDidMount()
    {
        this.overview.current.addEventListener(
            "wheel", (event) => {
                event.preventDefault();
            }, false
        );
    }

    render()
    {
        return(
            <div className="overview">
                <div ref={this.overview} className="overview-inner">
                    <AppIcon icon="github" label="GitHub" bg="#161b22" />
                    <AppIcon icon="github" label="GitHub" bg="#161b22" />
                    <AppIcon icon="github" label="GitHub" bg="#161b22" />
                    <AppIcon icon="github" label="GitHub" bg="#161b22" />
                    <AppIcon icon="github" label="GitHub" bg="#161b22" />
                    <AppIcon icon="github" label="GitHub" bg="#161b22" />

                    <AppIcon icon="github" label="GitHub" bg="#161b22" />
                    <AppIcon icon="github" label="GitHub" bg="#161b22" />
                    <AppIcon icon="github" label="GitHub" bg="#161b22" />
                    <AppIcon icon="github" label="GitHub" bg="#161b22" />
                    <AppIcon icon="github" label="GitHub" bg="#161b22" />
                    <AppIcon icon="github" label="GitHub" bg="#161b22" />

                    <AppIcon icon="github" label="GitHub" bg="#161b22" />
                    <AppIcon icon="github" label="GitHub" bg="#161b22" />
                    <AppIcon icon="github" label="GitHub" bg="#161b22" />
                    <AppIcon icon="github" label="GitHub" bg="#161b22" />
                    <AppIcon icon="github" label="GitHub" bg="#161b22" />
                    <AppIcon icon="github" label="GitHub" bg="#161b22" />

                    <AppIcon icon="github" label="GitHub" bg="#161b22" />
                    <AppIcon icon="github" label="GitHub" bg="#161b22" />
                    <AppIcon icon="github" label="GitHub" bg="#161b22" />
                    <AppIcon icon="github" label="GitHub" bg="#161b22" />
                    <AppIcon icon="github" label="GitHub" bg="#161b22" />
                    <AppIcon icon="github" label="GitHub" bg="#161b22" />

                    <AppIcon icon="github" label="GitHub" bg="#161b22" />
                    <AppIcon icon="github" label="GitHub" bg="#161b22" />
                    <AppIcon icon="github" label="GitHub" bg="#161b22" />
                    <AppIcon icon="github" label="GitHub" bg="#161b22" />
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