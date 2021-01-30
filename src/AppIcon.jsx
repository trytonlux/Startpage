import React from "react";
import { GithubIcon } from "./icons";

class AppIcon extends React.Component
{
    render()
    {
        return(
            <div className="app-icon">
                  <div className="app-icon-inner">
                      <GithubIcon />
                  </div>
                  <span className="app-icon-label">Github</span>
              </div>
        );
    }
}

export default AppIcon;