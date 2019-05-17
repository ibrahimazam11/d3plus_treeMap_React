import React, {Component} from 'react';

class TreeMap extends Component {
    constructor(props) {
        super(props);
        this.config = props.config;
    }

    drawMap = () => {
        let data    = this.config.data,
            groupBy = this.config.groupBy;

        // eslint-disable-next-line
        let visualization       = d3plus.viz()
            .container("#viz")
            .history(false)
            .title(false)
            .messages(false)
            .data(data)
            .type("tree_map")
            .id(groupBy)
            .size(this.config.size)
            .resize(true)
            .draw();
        let w                   = window;
        window.handleBreadCrumb = function handleBreadCrumb(value, depth, states) {
            if (depth.previous === false && depth.value === 0) {
                document.getElementsByClassName("breadcrumb").innerHTML = "";
                w.breadcrumb                                            = [];
            } else if (depth.previous < depth.value) {
                if(states && (states.length-1 === w.breadcrumb.length)){
                    w.breadcrumb.push({val : value});
                }
            } else if (depth.previous > depth.value) {
                w.breadcrumb.pop();
            }
            var breadcrumbContainer = document.getElementsByClassName("breadcrumb");
            breadcrumbContainer     = breadcrumbContainer[0];
            if (w.breadcrumb.length) breadcrumbContainer.style.display = "block";
            else breadcrumbContainer.style.display = "none";
        };
    };

    render() {
        return (<div id="viz" onLoad={this.drawMap()}></div>);
    }
}

export default TreeMap;