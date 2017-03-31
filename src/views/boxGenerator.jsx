import React from 'react';
import { Component, PropTypes } from 'react';
import Single from '../components/single'
import Color from '../components/color'
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
            case "background":
                this.setState({ background: event.target.value });
                break;
            // default:
        }

    }
    getSidePanel = () => {
        return (
            <div className="Grid  nopadding">
                

                <Single name="Height" propname="height" ivalue={this.state.height} func={this.handleChange}></Single>
                <Single name="Width" propname="width" ivalue={this.state.width} func={this.handleChange}></Single>
                <Color name="Color" propname="background" ivalue={this.state.background} func={this.handleChange} color={this.state.background}></Color>
                
                
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
