import React from "react";
import myJson from "./data.js";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: myJson
    };
  }

  render() {
    const Tablecontent = this.state.data.map(item => {
      return (
        <tr>
          <td>{item.trade_id}</td>
          <td>{item.trade_date}</td>
          <td>{item.trade_amount}</td>
          <td>{item.trade_state}</td>
        </tr>
      );
    });

    return (
      <div className="container">
        <div className="row">
          <table>
            <tr>
              <th>Trade Id</th>
              <th>Trade Date</th>
              <th>Trade Amount</th>
              <th>Trade State</th>
            </tr>
            {Tablecontent}
          </table>
        </div>
      </div>
    );
  }
}
export default App;
