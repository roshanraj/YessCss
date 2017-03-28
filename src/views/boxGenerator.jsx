import React from 'react';
import {Component, PropTypes} from 'react';

import FontAwesome from 'react-fontawesome';

const BoxGenerator = React.createClass({
    mixins: [OnResize],

    getInitialState() {
        return {
            loading: false,
            error: false,
            background: '#1FB6FF',
            value:0,
            width:"200",
            height:"200",
            border:"1px solid #333",
            borderRadius:"0px 0px 0px 0px"
        };
    },
    handleChangeComplete(color) {

        console.log(color)
        this.setState({ background: color.hex });
    },
    handleChange: function(type,event) {
        console.log(type);
        switch (type) {
            case "width":
                this.setState({width: event.target.value});
                break;
            case "height":
                this.setState({height: event.target.value});
                break;
            case "color":
                this.setState({background: event.target.value});
                break;
            case "border":
                this.setState({border: event.target.value});
                break;
            case "borderRadius":
                this.setState({borderRadius: event.target.value});
                break;
            // default:
        }

    },
    getSidePanel(){
        return (
            <div className="Grid col-lg-12 nopadding">
                <div className="Grid-item  Grid-item-top Grid-item-dark">
                    <div className="col-lg-3">
                        <p className="action-label">Size</p>
                    </div>
                    <div className="col-lg-4 center">
                        <input
                            className="text-box"
                            type="text"
                            value={this.state.width}
                            onChange={this.handleChange.bind(this,"width")}
                          />

                          <br/><span className="action-label" style={{"text-align":"center"}}>Width</span>
                    </div>
                    <div className="col-lg-1">
                        <FontAwesome size='1.5x' name='unlock-alt' />
                    </div>
                    <div className="col-lg-4">
                        <input
                            className="text-box"
                            type="text"
                            value={this.state.height}
                            onChange={this.handleChange.bind(this,"height")}
                          />

                          <br/><span className="action-label" style={{"text-align":"center"}}>Height</span>
                    </div>

                </div>


                <div className="Grid-item">
                    <div className="col-lg-3">
                        <p className="action-label">Color</p>
                    </div>
                    <div className="col-lg-7 center">
                        <input
                            className="text-box"
                            type="text"
                            value={this.state.background}
                            onChange={this.handleChange.bind(this,"color")}
                          />
                    </div>
                </div>


                <div className="Grid-item">
                    <div className="col-lg-3">
                        <p className="action-label">Border</p>
                    </div>
                    <div className="col-lg-7 center">
                        <input
                            className="text-box"
                            style={{width:"200"}}
                            type="text"
                            value={this.state.border}
                            onChange={this.handleChange.bind(this,"border")}
                          />
                    </div>
                </div>
                <div className="Grid-item">
                    <div className="col-lg-3">
                        <p className="action-label">Border Radius</p>
                    </div>
                    <div className="col-lg-7 center">
                        <input
                            className="text-box"
                            style={{width:"200"}}
                            type="text"
                            value={this.state.borderRadius}
                            onChange={this.handleChange.bind(this,"borderRadius")}
                          />
                    </div>
                </div>
                <div className="Grid-item Grid-item-bottom">…</div>
            </div>
        )
    },
    render() {
        let box_style = {
            "width":this.state.width,
            "height":this.state.height,
            "borderRadius":this.state.borderRadius,
            "background":this.state.background,
            "border":this.state.border
        };
        return (
            <div className="container col-lg-12" style={{"height":window.height-60}}>
                <div className="row" style={{ "height":window.height-60}}>
                    <div className="col-lg-8 subject">
                        <div className="element" style={box_style}></div>
                        {this.state.error}
                    </div>
                    <div className="col-lg-4 nopadding" style={{"border":"1px solid #cccccc", "height":"100%", "background":"#F7F7F7"}}>
                        {this.getSidePanel()}
                    </div>
                </div>
            </div>
        );
    }
});

export default BoxGenerator;
