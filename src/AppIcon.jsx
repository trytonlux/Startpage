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
            <div className="app-icon">
                <div className="app-icon-inner" style={style}>
                    <SVGIcon name={this.props.icon} />
                </div>

                {this.props.label !== undefined &&
                    <span className="app-icon-label">{this.props.label}</span>
                }
              </div>
        );
    }
}

export default AppIcon;