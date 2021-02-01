import React from "react";
import SVGIcon from "./SVGIcon";

class AppIcon extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const style = {
            backgroundColor: this.props.bg
        }

        return(
            <a className="app-icon" href={this.props.link}>
                <div className="app-icon-inner" style={style}>
                    <SVGIcon name={this.props.icon} />
                </div>

                {this.props.label !== undefined &&
                    <span className="app-icon-label">{this.props.label}</span>
                }
            </a>
        );
    }
}

export default AppIcon;