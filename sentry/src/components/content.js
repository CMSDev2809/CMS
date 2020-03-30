import React from "react";
import Dropdown from "./dropdown";
import Participant from "./participant";

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="item">
          <div className="sub-item">
            <h2>Select an Agency</h2>
            <Dropdown
              activeAgency={this.props.state.activeAgency}
              changeState={s => this.props.changeState(s)}
              agencies={this.props.state.agencies}
            />
          </div>
          {this.props.state.activeAgency.value === "new" ? (
            <div className="sub-item">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <i
                        onClick={() => window.confirm("Add this agency?")}
                        className="fas fa-plus-square fa-3x"
                      ></i>
                    </td>
                    <td>
                      <input />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : null}
        </div>
        {Object.values(this.props.state.data).map((el, i) => (
          <div className="item">
            <Participant
              state={this.props.state}
              changeState={s => this.props.changeState(s)}
              data={el}
              index={i}
            />
          </div>
        ))}
        <div className="item">
          <div className="item">
            <button>Revert Settings</button>
            <button>Save Settings</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
