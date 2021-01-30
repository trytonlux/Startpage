import React from "react";

class Dock extends React.Component
{
    render()
    {
        return(
          <div className="dock">
              <div className="app-icon">
                  <div className="app-icon-inner">
                    <span>Github</span>
                  </div>
              </div>

              <span>:::</span>
          </div>
        );
    }
}

export default Dock;