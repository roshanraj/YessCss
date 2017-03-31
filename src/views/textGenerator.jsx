import React from 'react';
import {Component, PropTypes} from 'react';
// import ColorsPicker from 'react-colors-picker';
import ColorPicker from 'react-color-picker'
import FontAwesome from 'react-fontawesome';


class TextGenerator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                   loading: false,
                    error: false,
                    text: "YessCSS",
                    color: "#1FB6FF",
                    fontWeight: "400",
                    fontSize: "32",
                    fontStyle: "normal",
                    value: 0
        };
    }


    handleChangeComplete = (color) => {

        console.log(color)
        this.setState({background: color.hex});
    }

    handleChange = (type, event) => {
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

    }
    onDrag(color, c) {
    this.setState({
      color
    })
  }
    getSidePanel = () => {
        return (
            <div className="Grid  nopadding">
                <div className="Grid-item  Grid-item-top Grid-item-dark">
                    <div className="">
                        <p className="action-label">Text</p>
                    </div>
                    <div className=" center">
                        <input className="text-box" type="text" value={this.state.text} onChange={this.handleChange.bind(this, "text")}/>
                    </div>

                </div>

                <div className="Grid-item">
                    <div className="">
                        <p className="action-label">Color</p>
                    </div>
                    <div className="entry form-group col-sm-7">
                      <div className="input-group">
                        <span className="input-group-btn">
                        	<button style={{"backgroundColor":this.state.color, "width":40}} className="btn" type="button"><span className="glyphicon glyphicon-no"></span></button>
                        </span>
                        
                        {/*<ColorPicker value={this.state.color} onDrag={this.onDrag.bind(this)} />*/}
                        <input className="form-control" type="text" value={this.state.color} onChange={this.handleChange.bind(this, "color")}/>
                      </div>
                  </div>
                </div>

                <div className="Grid-item">
                    <div className="">
                        <p className="action-label">Size</p>
                    </div>
                    <div className="center">
                        <input className="text-box" type="number" value={this.state.fontSize} onChange={this.handleChange.bind(this, "fontSize")} name="size" min="1"/>
                    </div>
                </div>

                <div className="Grid-item">
                    <div className="">
                        <p className="action-label">Weight</p>
                    </div>
                    <div className="center">
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
                    <div className="">
                        <p className="action-label">Style</p>
                    </div>
                    <div className=" center">
                        <select className="text-box" value={this.state.fontStyle} name="fontStyle" onChange={this.handleChange.bind(this, "fontStyle")}>
                            <option value="normal">Normal</option>
                            <option value="italic">Italic</option>
                            <option value="oblique">Oblique</option>
                        </select>
                    </div>
                </div>
                <div className="Grid-item Grid-item-bottom">…</div>
            </div>
        )
    }
    render() {
        let text_style = {
            "color": this.state.color,
            "fontSize": this.state.fontSize,
            "fontWeight": this.state.fontWeight,
            "fontStyle": this.state.fontStyle,
            "border": "none"
        };
        return (
            <div className="holder ">
              
                    <div className="subject" >
                        <div className="element subject" style={text_style}>{this.state.text}</div>
                        {this.state.error}
                    </div>
                    <div className="sidebar" >
                        {this.getSidePanel()}
                    </div>
                </div>
            
        );
    }
}

export default TextGenerator;
