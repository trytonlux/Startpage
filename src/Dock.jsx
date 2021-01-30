import React from "react";
import AppIcon from "./AppIcon";

class Dock extends React.Component
{
    render()
    {
        return(
          <div className="dock">

              <AppIcon />
              <AppIcon />
              <AppIcon />

          </div>
        );
    }
}

export default Dock;