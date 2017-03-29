
import React from "react";

 class Checkbox extends React.Component{
  constructor() {

    super();
    this.state = {

      checked: true

    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event){
  this.setState({
  checked: !this.state.checked
  });
  }

  render() {
    return(
    <button className = "checkbox icon" onClick={this.handleClick}>
      <i className = "material-icons">{this.state.checked ? "check_box"
        :"check_box_outline_blank"}</i>
    </button>
     );
   }
}

export default Checkbox;
