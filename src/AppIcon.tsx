import React from "react";
import SVGIcon from "./SVGIcon";

interface AppIconStyle
{
    backgroundColor?: string,
    boxShadow?: string
}

interface AppIconProps
{
    bg?: string,
    link?: string,
    icon: string,
    label?: string,
    onClick?: (event: React.MouseEvent) => void,
}

interface AppIconState
{
    style: AppIconStyle
}

class AppIcon extends React.Component<AppIconProps, AppIconState>
{
    state: AppIconState = {
        style: {
            backgroundColor: this.props.bg
        }
    }

    componentDidMount()
    {
        if (this.props.icon !== "launcher")
        {
            const style = Object.assign({}, this.state.style);
            style.boxShadow = "0 6px 0 #000"

            this.setState({
                style: style
            });
        }
    }

    render()
    {
        return(
            <a className="app-icon" href={this.props.link} onClick={this.props.onClick}>
                <div className="app-icon-inner" style={this.state.style}>
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