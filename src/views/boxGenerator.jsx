import React from 'react';
import { Component, PropTypes } from 'react';

import Infinite from 'react-infinite';
import InfiniteScroll from 'react-infinite-scroller';
import FontAwesome from 'react-fontawesome';

class BoxGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: false,
            background: '#1FB6FF',
            value: 0,
            width: "200px",
            height: "200px",
            border: "1px solid #333",
            borderRadius: "0px 0px 0px 0px",
            testList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
        };
    }

    handleChangeComplete = (color) => {

        console.log(color)
        this.setState({ background: color.hex });
    }
    handleChange = (type, event) => {
        console.log(type);
        switch (type) {
            case "width":
                this.setState({ width: event.target.value });
                break;
            case "height":
                this.setState({ height: event.target.value });
                break;
            case "color":
                this.setState({ background: event.target.value });
                break;
            case "border":
                this.setState({ border: event.target.value });
                break;
            case "borderRadius":
                this.setState({ borderRadius: event.target.value });
                break;
            // default:
        }

    }
    getSidePanel = () => {
        return (
            <div className="Grid  nopadding">
                <div className="Grid-item  Grid-item-top Grid-item-dark">
                    <div className="">
                        <p className="action-label">Size</p>
                    </div>
                    <div className=" center">
                        <input
                            className="text-box"
                            type="text"
                            value={this.state.width}
                            onChange={this.handleChange.bind(this, "width")}
                            />

                        <br /><span className="action-label" style={{ "textAlign": "center" }}>Width</span>
                    </div>
                    <div className="">
                        <FontAwesome name='unlock-alt' />
                    </div>
                    <div className="">
                        <input
                            className="text-box"
                            type="text"
                            value={this.state.height}
                            onChange={this.handleChange.bind(this, "height")}
                            />

                        <br /><span className="action-label" style={{ "textAlign": "center" }}>Height</span>
                    </div>

                </div>


                <div className="Grid-item">
                    <div className="">
                        <p className="action-label">Color</p>
                    </div>
                    <div className=" center">
                        <input
                            className="text-box"
                            type="text"
                            value={this.state.background}
                            onChange={this.handleChange.bind(this, "color")}
                            />
                    </div>
                </div>


                <div className="Grid-item">
                    <div className="">
                        <p className="action-label">Border</p>
                    </div>
                    <div className="center">
                        <input
                            className="text-box"
                            style={{ width: "200px" }}
                            type="text"
                            value={this.state.border}
                            onChange={this.handleChange.bind(this, "border")}
                            />
                    </div>
                </div>
                <div className="Grid-item">
                    <div className="">
                        <p className="action-label">Border Radius</p>
                    </div>
                    <div className=" center">
                        <input
                            className="text-box"
                            style={{ width: "200px" }}
                            type="text"
                            value={this.state.borderRadius}
                            onChange={this.handleChange.bind(this, "borderRadius")}
                            />
                    </div>
                </div>
                <div className="Grid-item Grid-item-bottom">…</div>
            </div>
        )
    }
    getList = () => {
        console.log("Inside block for list");
        var newList = []
        for (var i = 0; i <= 10; i++)
            newList.push(Math.floor(Math.random() * 100))
        this.setState({ testList: this.state.testList.concat(newList) })
        console.log("new list is ", this.state.testList);
    }
    render() {
        let box_style = {
            "width": this.state.width,
            "height": this.state.height,
            "borderRadius": this.state.borderRadius,
            "background": this.state.background,
            "border": this.state.border
        };
        return (
            <div className="holder" >

                <div className="subject">
                    <div className="element" style={box_style}></div>
                    {this.state.error}
                </div>
             {/*   <Infinite onInfiniteLoad={() => { this.getList() } }  infiniteLoadBeginEdgeOffset={200} containerHeight={400} elementHeight={100} displayBottomUpwards>
                    {
                        this.state.testList.map(function (val, index) {
                            return (
                                <div className="" style={{ height: "50px", width: "100px", border: "1px solid #888" }} key={index}>
                                    {val}
                                </div>
                            )
                        })
                    }

                </Infinite> */}
                
                <div className="sidebar" style={{ "border": "1px solid #cccccc", "height": "100%", "background": "#F7F7F7" }}>
                    {this.getSidePanel()}
                </div>

            </div>
        );
    }
}

export default BoxGenerator;
