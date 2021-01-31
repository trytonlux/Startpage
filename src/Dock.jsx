import React from "react";
import AppIcon from "./AppIcon";

class Dock extends React.Component
{
    render()
    {
        return(
          <div className="dock">

              <AppIcon icon="github" bg="#000" />
              <AppIcon icon="github" bg="#000" />
              <AppIcon icon="github" bg="#000" />
              <AppIcon icon="github" bg="#000" />

              <AppIcon icon="launcher" />

          </div>
        );
    }
}

export default Dock;