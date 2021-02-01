import React from "react";
import AppIcon from "./AppIcon";

class Overview extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { show: false };

        this.overview = React.createRef();

        this.toggle_show = this.toggle_show.bind(this);
    }

    toggle_show()
    {
        this.setState({
            show: !this.state.show
        });
    }

    componentDidMount()
    {
        if (this.state.show)
        {
            this.overview_ref.current.addEventListener(
                "wheel", (event) => {
                    event.preventDefault();
                }, false
            );
        }
    }

    render()
    {
        if (this.state.show)
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
        else
        {
            return null;
        }
    }
}

export default Overview;