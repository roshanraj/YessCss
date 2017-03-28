import React from 'react';
import {Component, PropTypes} from 'react';

import FontAwesome from 'react-fontawesome';
import Switch from 'react-toggle-switch';
import MultiSelect from '../components/multiSelect';

import BoxShadow from '../components/boxShadow';

const ButtonGenerator = React.createClass({


    getInitialState() {
        return {
            loading: false,
            error: false,
            text: "Click Me",
            color: "#1FB6FF",
            fontWeight: "400",
            fontSize: "32",
            fontStyle: "normal",
            isBoxShadow: false,
            isBorder: false,
            value: 0
        };
    },
    handleChangeComplete(color) {

        console.log(color)
        this.setState({background: color.hex});
    },
    handleChange: function(type, event) {
        console.log(type);
        switch (type) {
            case "text":
                this.setState({text: event.target.value});
                break;
            case "color":
                this.setState({color: event.target.value});
                break;
            case "fontStyle":
                this.setState({fontStyle: event.target.value});
                break;
            case "fontWeight":
                this.setState({fontWeight: event.target.value});
                break;
            case "fontSize":
                this.setState({fontSize: event.target.value});
                break;

            default:
                break;
        }

    },

    getBorder(){
        return (
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <div className="panel-title block">
                            <div className = "big">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">Box shadow</a>
                            </div>
                            <div className = "small" >
                                <Switch onClick={() => { this.setState({isBorder: !this.state.isBorder});   } } on={this.state.isBorder}/>
                            </div>
                        </div>
                    </div>
                    <div id="collapse2" className="panel-collapse collapse in">
                        <div className="panel-body">
                            <div className="col-sm-3">
                                box-shadow
                            </div>
                            <div className="col-sm-7 center">
                                <input className="text-box" type="text" value={this.state.color} onChange={this.handleChange.bind(this, "color")}/>
                            </div>
                        </div>
                    </div>
                </div>
            )
    },
    getSidePanel() {

        return (
            <div className="Grid col-sm-12 nopadding">
                <div className="Grid-item  Grid-item-top Grid-item-dark">
                    <div className="textHolder">
                      Text
                    </div>
                    <div className="lastHolder">
                        <input className="text-box" type="text" value={this.state.text} onChange={this.handleChange.bind(this, "text")}/>
                    </div>

                </div>
                <div className="Grid-item">
                    <MultiSelect name="fsfsdaf" value={0}></MultiSelect>
                </div>
                <div className="Grid-item">
                    <div className="textHolder">
                      Color
                    </div>
                    <div className="lastHolder">
                        <input className="text-box" type="text" value={this.state.color} onChange={this.handleChange.bind(this, "color")}/>
                    </div>
                </div>

                <div className="Grid-item">
                    <div className="textHolder">
                        Font Size
                    </div>
                    <div className="lastHolder">
                        <input className="text-box" type="number" value={this.state.fontSize} onChange={this.handleChange.bind(this, "fontSize")} name="size" min="1"/>
                    </div>
                </div>

                <div className="Grid-item">
                    <div className="textHolder">
                        Font Weight
                    </div>
                    <div className="lastHolder">
                        <select className="text-box" value={this.state.fontWeight} name="fontStyle" onChange={this.handleChange.bind(this, "fontWeight")}>
                            <option value="100">100</option>
                            <option value="200">200</option>
                            <option value="300">300</option>
                            <option value="400">400</option>
                            <option value="500">500</option>
                            <option value="600">600</option>
                            <option value="700">700</option>
                        </select>
                    </div>
                </div>

                <div className="Grid-item">
                    <div className="col-sm-3">
                        Font Style
                    </div>
                    <div className="col-sm-7 center">
                        <select className="text-box" value={this.state.fontStyle} name="fontStyle" onChange={this.handleChange.bind(this, "fontStyle")}>
                            <option value="normal">Normal</option>
                            <option value="italic">Italic</option>
                            <option value="oblique">Oblique</option>
                        </select>
                    </div>
                </div>
                <div className="Grid-item">
                    <div className="col-sm-3">
                        Box Background
                    </div>
                    <div className="col-sm-7 center">
                        <input className="text-box" type="text" value={this.state.color} onChange={this.handleChange.bind(this, "color")}/>
                    </div>
                </div>
                
                <div className="panel-group parent-panel" id="accordion">
                        <BoxShadow ref="boxshadow"></BoxShadow>
                        {this.getBorder()}

                </div>
                <div className="Grid-item">

                    

                </div>
                <div className="Grid-item Grid-item-bottom">…</div>
            </div>

        )
    },
    render() {
       
        let shadow_style = (typeof this.refs.boxshadow == "undefined")?"0 0 0 #888": (this.refs.boxshadow.vlength+"  "+this.refs.boxshadow.hlength+"  "+this.refs.boxshadow.vlength+"  "+this.refs.boxshadow.vlength+"  "+this.refs.boxshadow.color);
        let text_style = {
            "color": this.state.color,
            "fontSize": this.state.fontSize,
            "fontWeight": this.state.fontWeight,
            "fontStyle": this.state.fontStyle
        };
        let box_style = {
            "color": this.state.color,
            "fontSize": this.state.fontSize,
            "fontWeight": this.state.fontWeight,
            "fontStyle": this.state.fontStyle,
            "boxshadow": shadow_style,
        };
        return (
            <div className="container col-sm-12" style={{
                "height": window.height - 60
            }}>
                <div className="row" style={{
                    "height": window.height - 60
                }}>
                    <div className="col-sm-8 subject" >
                        <div className="element" style={text_style}>{this.state.text}</div>
                        {this.state.error}
                    </div>
                    <div className="col-sm-4 nopadding" style={{
                        "border": "1px solid #cccccc",
                        "height": "100%"
                    }}>
                        {this.getSidePanel()}
                    </div>
                </div>
            </div>
        );
    }
});

export default ButtonGenerator;
