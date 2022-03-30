import "./styles.css";
import ToolTip from "./Tooltip";

export default function App() {
  let styles = {
    left: {
      right: "100%",
      top: "-25px"
    },
    top: {
      bottom: "50px"
    },
    right: {
      left: "100%",
      top: "-25px"
    }
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ToolTip position={styles.left} />
    </div>
  );
}
