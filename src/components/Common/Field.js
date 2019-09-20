import React, {Component} from 'react'

class Field extends Component {

    render() {
        return (
            <div className="form-group">
                {this.props.elementName === 'input' ?
                    <input className="form-control"
                           id={this.props.name}
                           type={this.props.type}
                           placeholder={this.props.placeholder}
                           required="required"
                           data-validation-required-message="Please enter your name."
                           value={this.props.value}
                           onChange={event => this.props.onChange(event)}
                    />
                    :
                    <textarea className="form-control"
                              id={this.props.name}
                              placeholder={this.props.placeholder}
                              required="required"
                              data-validation-required-message="Please enter a message."
                              value={this.props.value}
                              onChange={event => this.props.onChange(event)}
                    />
                }
                <p className="help-block text-danger" />
            </div>
        )
    }
}

export default Field;
