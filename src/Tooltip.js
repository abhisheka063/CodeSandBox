import "./styles.css";
function ToolTip(props) {
  let setPosition = () => {
    let position;
    // Creating styles for different positions
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
    // Setting positions according to recived props
    switch (props.position) {
      case "top":
        position = styles.top;
        break;
      case "bottom":
        position = styles.bottom;
        break;
      case "left":
        position = styles.left;
        break;
      case "right":
        position = styles.right;
        break;
      default:
        break;
    }
    // Returning positions
    return position;
  };

  return (
    <div className="tooltip">
      Hover over me
      <span className="tooltiptext" style={setPosition()}>
        Hi! I am Tooltip
      </span>
    </div>
  );
}

export default ToolTip;
