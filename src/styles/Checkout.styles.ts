import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  title: {
    marginBottom: theme.spacing(6),
    textAlign: "center",
    fontFamily: "Playfair Display",
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: -16,
      left: "50%",
      transform: "translateX(-50%)",
      width: "60px",
      height: "2px",
      background: "linear-gradient(90deg, #E12D79, #F4B400)",
    },
  },
  alert: {
    marginBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(4),
  },
  sectionTitle: {
    marginBottom: theme.spacing(3),
    fontFamily: "Playfair Display",
  },
  formSection: {
    marginTop: theme.spacing(4),
  },
  orderSummary: {
    padding: theme.spacing(4),
    position: "sticky",
    top: 20,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: theme.shape.borderRadius,
  },
  listItem: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  divider: {
    borderColor: "rgba(244, 180, 0, 0.1)",
    margin: theme.spacing(2, 0),
  },
  totalSection: {
    marginBottom: theme.spacing(4),
  },
  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(1),
  },
  submitButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    backgroundColor: theme.palette.primary.main,
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));
