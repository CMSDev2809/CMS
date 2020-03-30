import React from "react";
import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";
import "./App.css";

class App extends React.Component {
  state = {
    activeAgency: "cfsmissoula",
    agencies: [
      {
        value: "cfsmissoula",
        label: (
          <div>
            CFS Missoula{" "}
            <i
              onClick={() =>
                this.removeAgency(
                  window.confirm(
                    "Are sure that you want to remove 'CFS Missoula'?"
                  )
                )
              }
              className="fas fa-minus-square"
            ></i>
          </div>
        )
      },
      {
        value: "cfskalispell",
        label: (
          <div>
            CFS Kalispell{" "}
            <i
              onClick={() =>
                this.removeAgency(
                  window.confirm(
                    "Are sure that you want to remove 'CFS Kalispell'?"
                  )
                )
              }
              className="fas fa-minus-square"
            ></i>
          </div>
        )
      },
      { value: "new", label: "New Agency" }
    ],
    data: {
      0: {
        parent: "cfsmissoula",
        databaseId: "1234567890",
        donorFirstName: "Broc",
        donorLastName: "Roberts",
        ivrCode: "123456",
        contactEmailList: {
          0: "broc@compliancemonitoringsystems.com"
        }
      }
    }
  };

  removeAgency(boolean) {}

  changeState(state) {
    this.setState(state);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Content changeState={s => this.changeState(s)} state={this.state} />
        <Footer />
      </div>
    );
  }
}

export default App;
