import React from "react";
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

    render()
    {
        return(
            <>
            {this.state.show_overview &&
                <Overview />
            }

            <Dock onOverviewLauncherClicked={() => console.log("Clicked launcher")} />
            </>
        );
    }
}

export default Desktop;