import "./styles.css";
import ToolTip from "./Tooltip";

export default function App() {
  // Creating position styles and passing them as props
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
    },
    bottom: {
      bottom: "0px"
    }
  };

  return (
    <div className="App">
      <h1>React Classic</h1>
      <ToolTip position={styles.bottom} />
    </div>
  );
}
