import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  heading: {
    fontSize: "40px",
    color: "black",
    fontWeight: "bold",
    textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
  },
  diceContainer: {
    display: "flex",
    justifyContent: "center",
    perspective: "1000px",
    margin: "20px auto",
    gap: "30px",
  },
  diceRoot: {
    width: "100px",
    height: "100px",
    position: "relative",
    transformStyle: "preserve-3d",
    transition: "transform 0.3s ease-out box-shadow 1s ease-out",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  diceFace: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "48px",
    background: "white",
    boxShadow: "inset 0 0 10px rgba(0,0,0,0.3)",
    border: "2px solid #ccc",
    borderRadius: "15px",
    backfaceVisibility: "hidden",
    transform: "translateZ(1px)",
  },
  rolling: {
    animation: "$rollAnimation 1s",
  },
  "@keyframes rollAnimation": {
    "0%": { transform: "rotateX(0deg) rotateY(0deg)" },
    "20%": { transform: "rotateX(144deg) rotateY(72deg)" },
    "40%": { transform: "rotateX(288deg) rotateY(144deg)" },
    "60%": { transform: "rotateX(72deg) rotateY(216deg)" },
    "80%": { transform: "rotateX(216deg) rotateY(288deg)" },
    "100%": { transform: "rotateX(360deg) rotateY(360deg)" },
  },

  rollingTwo: {
    animation: "$rollReverseAnimation 1s",
  },
  "@keyframes rollReverseAnimation": {
    "0%": { transform: "rotateY(0deg) rotateX(0deg)" },
    "20%": { transform: "rotateY(144deg) rotateX(72deg)" },
    "40%": { transform: "rotateY(288deg) rotateX(144deg)" },
    "60%": { transform: "rotateY(72deg) rotateX(216deg)" },
    "80%": { transform: "rotateY(216deg) rotateX(288deg)" },
    "100%": { transform: "rotateY(360deg) rotateX(360deg)" },
  },

  rollButton: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "18px",
    fontWeight: "bold",
    backgroundColor: "#3f51b5",
    color: "white",
    transition: "background-color 0.3s, transform 0.3s",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    "&:hover": {
      backgroundColor: "#303f9f",
      transform: "translateY(-2px)",
      boxShadow: "0 6px 8px rgba(0,0,0,0.15)",
    },
  },

  totalScore: {
    marginTop: "20px",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#3f51b5",
    textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
  },
}));
