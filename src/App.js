import React, {Component} from 'react';
import './App.css';
import TreeMap from './Tree-Map';
let config = {
    "data" : [
        {
            "key"       : "Afghanistan",
            "region"    : "Asia",
            "subregion" : "Southern Asia",
            "value"     : 25500100
        },
        {
            "key"       : "Åland Islands",
            "region"    : "Europe",
            "subregion" : "Northern Europe",
            "value"     : 28502
        },
        {
            "key"       : "Albania",
            "region"    : "Europe",
            "subregion" : "Southern Europe",
            "value"     : 2821977
        },
        {
            "key"       : "Algeria",
            "region"    : "Africa",
            "subregion" : "Northern Africa",
            "value"     : 37900000
        },
        {
            "key"       : "American Samoa",
            "region"    : "Oceania",
            "subregion" : "Polynesia",
            "value"     : 55519
        },
        {
            "key"       : "Andorra",
            "region"    : "Europe",
            "subregion" : "Southern Europe",
            "value"     : 76246
        }
    ],
    groupBy: ["region", "subregion", "key"],
    size: "value"
};

class App extends Component {
    render() {
        return (
            <div>
                <div id="breadcrumb">
                    <ul className="breadcrumb">
                    </ul>
                </div>
                <TreeMap config={config}/>
            </div>
        );
    }
}

export default App;