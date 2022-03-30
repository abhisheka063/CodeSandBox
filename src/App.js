import "./styles.css";
import ToolTip from "./Tooltip";

export default function App() {
  // Passing positions as props

  return (
    <div className="App">
      <h1>React Classic</h1>
      <ToolTip position="top" />
    </div>
  );
}
