import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <form>
          <label name="screen">Hi</label>
          <br />
          <div className="cal">
            <input type="button" className="in" name="1" value="1" />
            <input type="button" className="in" name="2" value="2" />
            <input type="button" className="in" name="3" value="3" />
            <input type="button" className="in" name="/" value="/" />
            <br />
            <input type="button" className="in" name="4" value="4" />
            <input type="button" className="in" name="5" value="5" />
            <input type="button" className="in" name="6" value="6" />
            <input type="button" className="in" name="*" value="*" />
            <br />
            <input type="button" className="in" name="7" value="7" />
            <input type="button" className="in" name="8" value="8" />
            <input type="button" className="in" name="9" value="9" />
            <input type="button" className="in" name="-" value="-" />
            <br />
            <input type="button" className="in" name="x" value="X" />
            <input type="button" className="in" name="0" value="0" />
            <input type="button" className="in" name="=" value="=" />
            <input type="button" className="in" name="+" value="+" />
          </div>
        </form>
      </div>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
