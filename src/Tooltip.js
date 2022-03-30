import "./styles.css";
function ToolTip(props) {
  return (
    <div className="tooltip">
      Hover over me
      <span className="tooltiptext" style={props.position}>
        Hi! I am Tooltip
      </span>
    </div>
  );
}

export default ToolTip;
