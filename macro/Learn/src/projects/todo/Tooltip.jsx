const Tooltip = ({ tooltipMessage }) => {
  return (
    <div
      style={{
        color: "#fff",
        padding: "5px",
        borderRadius: "4px",
        position: "absolute",
        top: "82%",
        left: "0",
        transform: "translateY(5px)",
        fontSize: "12px",
        width: "100%",
        textAlign: "center",
      }}
    >
      ⚠️Todo {tooltipMessage}
    </div>
  );
};

export default Tooltip;
