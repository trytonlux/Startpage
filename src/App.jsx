import React from 'react';
import links from "./config";
import "./App.scss";

class App extends React.Component
{
    render()
    {
        return(
            <>
            <main>
                <span className="text-pink">~/Startpage</span>
                <br/>
                <span className="text-cyan">𝝺</span><span> ls</span>
                <br/>
            </main>
            </>
        );
    }
}

export default App;
