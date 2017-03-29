import React, {propTypes} from 'react';
import {Link} from 'react-router';
import ClassNames from 'classnames';
import ServerLink from '../serverLink';
import FontAwesome from 'react-fontawesome';
// import Switch from 'react-toggle-switch'
import $ from 'jquery';

class BoxShadow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                isBoxShadow: false,
                vlength: 0,
                hlength: 0,
                blurRadius:5,
                spreadRadius:5,
                color:"#888",
        };
    }


    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    handleChange(type, event) {
        console.log(type);
        switch (type) {
            case "vlength":
                this.setState({vlength: event.target.value});
                break;
            case "hlength":
                this.setState({hlength: event.target.value});
                break;
            case "blurRadius":
                this.setState({blurRadius: event.target.value});
                break;
            case "spreadRadius":
                this.setState({spreadRadius: event.target.value});
                break;
            case "color":
                this.setState({color: event.target.value});
                break;
            default:
                break;
        }

        
    }
    _handleCollapse(){
        this.setState({isBoxShadow: (!this.state.isBoxShadow)}); 
        this.refs.collapseButton.click();
    }

    render() {
        return (
            <div className="ccollapse panel panel-default">
                <div className="panel-heading">
                    <div className="panel-title block">
                        <div className = "big">
                            <a ref="collapseButton" data-toggle="collapse" data-parent="#accordion" href="#collapse1">Box shadow</a>
                        </div>
                        <div className = "small" >
                            {/*<Switch  onClick={() => { this._handleCollapse() }} on={this.state.isBoxShadow}/>*/}
                        </div>
                    </div>
                </div>
                <div id="collapse1" className="panel-collapse collapse">
                    <div className="panel-body">
                        <div className="col-sm-5">
                            Horizontal length
                        </div>
                        <div className="col-sm-7 center">
                            <input className="text-box" type="text" value={this.state.hlength} onChange={this.handleChange.bind(this, "hlength")}/>
                        </div>
                    </div>

                    <div className="panel-body">
                        <div className="col-sm-5">
                            Verticle Length
                        </div>
                        <div className="col-sm-7 center">
                            <input className="text-box" type="text" value={this.state.vlength} onChange={this.handleChange.bind(this, "vlength")}/>
                        </div>
                    </div>

                    <div className="panel-body">
                        <div className="col-sm-5">
                            Blur Radius
                        </div>
                        <div className="col-sm-7 center">
                            <input className="text-box" type="text" value={this.state.blurRadius} onChange={this.handleChange.bind(this, "blurRadius")}/>
                        </div>
                    </div>

                    <div className="panel-body">
                        <div className="col-sm-5">
                            Spread Radius
                        </div>
                        <div className="col-sm-7 center">
                            <input className="text-box" type="text" value={this.state.spreadRadius} onChange={this.handleChange.bind(this, "spreadRadius")}/>
                        </div>
                    </div>

                    <div className="panel-body">
                        <div className="col-sm-5">
                            Color
                        </div>
                        <div className="col-sm-7 center">
                            <input className="text-box" type="text" value={this.state.color} onChange={this.handleChange.bind(this, "color")}/>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
};

BoxShadow.propTypes = {
    handleChange: React.PropTypes.func,
}

export default BoxShadow;
