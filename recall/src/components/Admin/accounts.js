import React, { Component } from "react";
import fns from "../../fns";

class Accounts extends Component {
  state = {
    accounts: [],
    category: <div />,
    newUser: {
      username: "",
      password: "",
      level: 0
    }
  };

  accountCard(element) {
    return (
      <tbody style={{ backgroundColor: "transparent" }}>
        <tr>
          <td>
            <h2>{element.username}</h2>
          </td>
          <td>
            <h2>
              <select
                defaultValue={element.level}
                class="form-control"
                onChange={e =>
                  fns.updateLevel(element.username, e.target.value)}
              >
                <option value={0}>Admin</option>
                <option value={1}>User</option>
              </select>
            </h2>
          </td>
          <td>
            <h2
              className={"icon icon-cancel-squared"}
              style={{
                fontSize: "35px",
                color: "rgb(159, 0, 0)"
              }}
              onClick={async () => {
                await fns.deleteUser(element.username);
                this.fetchAccounts();
              }}
            />
          </td>
        </tr>
      </tbody>
    );
  }

  accounts(accounts) {
    return (
      <div>
        <div className="box" style={{ marginTop: "5px" }}>
          <header className="toolbar toolbar-header">
            <h1 className="title">User Accounts</h1>
          </header>
          <div className={"admin"}>
            <table>
              <tr style={{ borderBottom: "1px solid black" }}>
                <td>
                  <h1>Username</h1>
                </td>
                <td>
                  <h1>Access Level</h1>
                </td>
                <td />
              </tr>
            </table>
            <table>
              {this.state.accounts.map(element => this.accountCard(element))}
              <tr>
                <td>
                  <h2>
                    <input
                      type="text"
                      placeholder="Username"
                      class="form-control"
                      onChange={e => {
                        const newUser = Object.assign(this.state.newUser, {
                          username: e.target.value
                        });
                        this.setState({ newUser });
                      }}
                    />
                  </h2>
                </td>
                <td>
                  <h2>
                    <input
                      type="text"
                      placeholder="Password"
                      class="form-control"
                      onChange={e => {
                        const newUser = Object.assign(this.state.newUser, {
                          password: e.target.value
                        });
                        this.setState({ newUser });
                      }}
                    />
                  </h2>
                </td>
                <td>
                  <h2>
                    <select
                      defaultValue={0}
                      class="form-control"
                      onChange={e => {
                        const newUser = Object.assign(this.state.newUser, {
                          level: parseInt(e.target.value)
                        });
                        this.setState({ newUser });
                      }}
                    >
                      <option value={0}>Admin</option>
                      <option value={1}>User</option>
                    </select>
                  </h2>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    className="btn btn-large btn-positive"
                    onClick={async () => {
                      await fns.createUser(
                        this.state.newUser.username,
                        this.state.newUser.password,
                        this.state.newUser.level
                      );
                      this.fetchAccounts();
                    }}
                  >
                    Create New User
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }

  async fetchAccounts() {
    const accounts = await fns.getUsers();
    this.state.accounts = accounts;
    this.setState({
      category: this.accounts(accounts)
    });
  }

  componentDidMount() {
    this.fetchAccounts();
  }

  render() {
    return this.state.category;
  }
}

export default Accounts;
