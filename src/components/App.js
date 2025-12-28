import React, {Component, useState} from "react";
import Flames from "./Flames";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <div id="main">
                <Flames />
               {/* Do not remove the main div */}
            </div>
        )
    }
}


export default App;
