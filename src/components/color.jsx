import React, {propTypes} from 'react';
import ClassNames from 'classnames';
import ColorPicker from 'rc-color-picker';

class Color extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                name: "",
                value: props.ivalue,
        };
    
    }


    shouldComponentUpdate(nextProps, nextState) {
      return true
    }

    _handleChange = (event) => {
      
        // this.props.func()
        this.setState({value:event.target.value});
    }

    changeHandler = (colors) => {
        console.log(colors);
    }

    closeHandler = (colors) => {
        console.log(colors);
    }

   
    render() {
        return (
            <div className="Grid-item single">
                    <div className="text">
                        <p className="action-label">{this.props.name}</p>
                    </div>
                    <div className="input dual">
                        <div className="color" style={{background:this.props.color}}>
                            <ColorPicker
                                color={'#0ad'}
                                alpha={50}
                                onChange={this.changeHandler}
                                placement="topReft"
                                />
                             </div>
                        <input
                            
                            className="text-box"
                            type="text"
                            value={this.props.ivalue}
                            onChange={this.props.func.bind(this,this.props.propname)}
                            />
                            
                    </div>
                </div>
            
        );
    }
};

Color.propTypes = {
    name: React.PropTypes.string,
    ivalue: React.PropTypes.string,
    func: React.PropTypes.func,
    propname: React.PropTypes.string,
    color: React.PropTypes.string
}

export default Color;
