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

    darken_colour(hex: string, percent: number): string
    {
        // Convert Hex to RGB values
        var R = parseInt(hex.substring(1, 3), 16);
        var G = parseInt(hex.substring(3, 5), 16);
        var B = parseInt(hex.substring(5, 7), 16);

        R = Math.round(R * (100 + percent) / 100);
        G = Math.round(G * (100 + percent) / 100);
        B = Math.round(B * (100 + percent) / 100);

        R = (R<255)?R:255;
        G = (G<255)?G:255;
        B = (B<255)?B:255;

        var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
        var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
        var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

        return `#${RR}${GG}${BB}`;
    }

    componentDidMount()
    {
        if (this.props.bg !== undefined)
        {
            const style = Object.assign({}, this.state.style);
            const dark = this.darken_colour(this.props.bg, 20);

            style.boxShadow = `0 6px 0 ${dark}`;

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