import React from "react";
import parseSync from "@babel/core";

function UserInput(props) {
  return (
    <>
      <label>={props.label}</label>
      <input
        value={props.value}
        onChange={(evt) => props.onChange(evt.currentTarget.value)}
        type={props.type}
        placeholder={props.placeholder}
      />
      {props.errorMessage && <span>{props.errorMessage}</span>}
      <div className="UserInput"></div>
    </>
  );
}

export default UserInput;

/*
class UserInput extends React.Component {
	constructor(){
	super();
	this.state={
		value :''
	}
	this.setValue= this.setValue.bind(this);
	}
	setValue(value){
		this.setState({
			//short hand notation from ES6
			value,
			
		});
		
	}
render() {
return (
<>
<label>={props.label}</label>
<input value={this.state.value} onChange ={(evt)=>this.setValue(evt.currentTarget.value)} />
	errorMessage= {props.errorMessage && <span>{props.errorMessage}</span> }
	
</>
);
	}
}
export default UserInput;*/
