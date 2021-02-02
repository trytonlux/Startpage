import React from "react";
import { CSSTransition } from "react-transition-group";
import Overview from "./Overview";
import Dock from "./Dock";

interface DesktopState
{
    show_overview: boolean
}

class Desktop extends React.Component<{}, DesktopState>
{
    state: DesktopState = {
        show_overview: false
    }

    toggle_overview = () =>
    {
        this.setState({
            show_overview: !this.state.show_overview
        });
    }

    render()
    {
        return(
            <>
            <CSSTransition in={this.state.show_overview} timeout={250} classNames="overview" unmountOnExit>
                <Overview />
            </CSSTransition>

            <Dock onOverviewLauncherClicked={this.toggle_overview} />
            </>
        );
    }
}

export default Desktop;