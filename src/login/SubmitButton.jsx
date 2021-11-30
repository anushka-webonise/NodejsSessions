import React from "react";

/*export const SubmitButton= ({ title, disabled, onClick, buttonClass }) =>{
return (
<button disabled ={disabled} onClick={onClick} className ={buttonClass}>{title}</button>
)
};*/

export default class SubmitButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button
        type="submit"
        disabled={this.props.disabled}
        onClick={this.props.onClick}
      >
        {this.props.title}
      </button>
    );
  }
}
