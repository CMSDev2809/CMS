import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

class ReactDropdown extends React.Component {
  render() {
    return (
      <div className="dropdown">
        <Dropdown
          options={this.props.agencies}
          onChange={activeAgency =>
            this.props.changeState({
              activeAgency
            })
          }
          value={this.props.activeAgency}
          placeholder="Select an option"
        />
      </div>
    );
  }
}

export default ReactDropdown;
