import React, {propTypes} from 'react';
import {Link} from 'react-router';
import ClassNames from 'classnames';
import ServerLink from '../serverLink';
import FontAwesome from 'react-fontawesome';
import Switch from 'react-toggle-switch'
import $ from 'jquery';

import Single from '../single';
import Color from '../color';

class Border extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                borderColor: "#FFF",
                borderType: "solid",
                borderWidth: "2px",
               
        };
    }


    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    handleChange = (type, event) => {
        console.log(type);
        switch (type) {
            case "borderColor":
                this.setState({borderColor: event.target.value});
                break;
            case "borderType":
                this.setState({borderType: event.target.value});
                break;
            case "borderWidth":
                this.setState({borderWidth: event.target.value});
                break;
            default:
                break;
        }
        event.target.value = this.state.borderWidth+" "+this.state.borderType+" "+this.state.borderColor;
        this.props.func(this.props.propname, event);
        
    }
    _handleCollapse(){
        this.setState({isBoxShadow: (!this.state.isBoxShadow)}); 
        this.refs.collapseButton.click();
    }

    render() {
        return (
            <div className="ccollapse ">
                <div className="heading">
                    <div className="title block">
                        <div className = "big">
                            <a ref="collapseButton" data-toggle="collapse" data-parent="#accordion" href={"#"+this.props.propname}>{this.props.name}</a>
                        </div>
                        <div className = "small" >
                            <Switch  onClick={() => { this._handleCollapse() }} on={this.state.isBoxShadow}/>
                        </div>
                    </div>
                </div>
                <div id={this.props.propname} className="panel-collapse collapse">
                   



                <Color name="Color" propname="borderColor" ivalue={this.state.borderColor} func={this.handleChange} color={this.state.borderColor}></Color>
                <Single name="Type" propname="borderType" ivalue={this.state.borderType} func={this.handleChange}></Single>           
                <Single name="Width" propname="borderWidth" ivalue={this.state.borderWidth} func={this.handleChange}></Single>  



                  

                </div>
            </div>
        );
    }
};

Border.propTypes = {
    
    name: React.PropTypes.string,
    ivalue: React.PropTypes.string,
    func: React.PropTypes.func,
    propname:  React.PropTypes.string,
}

export default Border;
