import { Component } from "react";
import File from "./components/File";

class App extends Component {
  render() {
    return (
      <div>
        <File name="Ammar" name2="Hasan" />
        <File name="Alaa" name2="Balkees" />
        <File name="Manar" name2="Hasan" />
      </div>
    );
  }
}

export default App;