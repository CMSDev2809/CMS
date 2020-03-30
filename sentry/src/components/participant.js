import React from "react";

class Participant extends React.Component {
  removeContact(boolean, i) {
    if (boolean) {
      let state = this.props.state;
      delete state.data[this.props.index].contactEmailList[i];
      this.props.changeState(state);
    }
  }

  render() {
    return (
      <div className="participant">
        <div className="content">
          <h2>
            {this.props.data.donorLastName}, {this.props.data.donorFirstName}
          </h2>
          <p>IVR: {this.props.data.ivrCode}</p>
          <p>Database ID: {this.props.data.databaseId}</p>
          <h3>Reports to:</h3>
          <div className="input-array">
            {Object.values(this.props.data.contactEmailList).map((el, i) => (
              <div>
                <input />
                <i
                  onClick={() =>
                    this.removeContact(
                      window.confirm("Remove this contact?"),
                      i
                    )
                  }
                  className="fas fa-minus-square fa-2x"
                ></i>
              </div>
            ))}
          </div>
          <i className="fas fa-plus-square fa-2x"></i>
        </div>
      </div>
    );
  }
}

export default Participant;
