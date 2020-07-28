import React from 'react';
import links from "./config";
import "./App.scss";

class App extends React.Component
{
    render()
    {
        const items = [];

        for (let link of links)
        {
        items.push(<li key={link}><a href={link.href}>{link.name}</a></li>);
        }

        return(
            <>
            <main>
                <span className="text-pink">~/Startpage</span>
                <br/>
                <span className="text-cyan">𝝺</span><span> ls</span>
                <br/>
                <ul>
                    {items}
                </ul>
            </main>
            </>
        );
    }
}

export default App;
