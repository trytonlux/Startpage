import React from "react";
import SVGIcon from "./SVGIcon";

class AppIcon extends React.Component
{
    render()
    {
        return(
            <div className="app-icon">
                  <div className="app-icon-inner">
                      <SVGIcon name="github" />
                  </div>
                  <span className="app-icon-label"></span>
              </div>
        );
    }
}

export default AppIcon;