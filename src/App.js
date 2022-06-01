import React, { Component } from "react";
import MyRoutes from "./app/routes/myRoutes";

// function App() {
//   return (
//     <div>
//       <MyRoutes />
//     </div>
//   );
// }

// export default App;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MyRoutes />
      </div>
    );
  }
}
