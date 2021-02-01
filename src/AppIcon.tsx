import React from "react";
import SVGIcon from "./SVGIcon";

interface AppIconProps
{
    bg: string,
    link: string,
    icon: string,
    label: string,
    onClick: (event: React.MouseEvent) => void,
}

class AppIcon extends React.Component<AppIconProps, {}>
{
    render()
    {
        const style = {
            backgroundColor: this.props.bg
        }

        return(
            <a className="app-icon" href={this.props.link} onClick={this.props.onClick}>
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