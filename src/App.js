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
      <h1>React Classic</h1>
      <ToolTip position={styles.top} />
    </div>
  );
}
