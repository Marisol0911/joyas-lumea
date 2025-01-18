import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    width: 400,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    backgroundColor: "#FFFFFF",
    borderLeft: "1px solid rgba(244, 180, 0, 0.1)",
  },
  container: {
    padding: theme.spacing(2),
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
  title: {
    fontFamily: "Playfair Display",
    letterSpacing: 1,
  },
  divider: {
    borderColor: "rgba(244, 180, 0, 0.1)",
  },
  emptyCart: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  continueButton: {
    borderColor: theme.palette.primary.main,
  },
  itemsList: {
    flex: 1,
    overflowY: "auto",
  },
  listItem: {
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    border: "1px solid rgba(244, 180, 0, 0.1)",
    position: "relative",
  },
  totalSection: {
    marginTop: theme.spacing(2),
    paddingTop: theme.spacing(2),
    borderTop: "1px solid rgba(244, 180, 0, 0.1)",
  },
  totalRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(2),
  },
  checkoutButton: {
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    backgroundColor: theme.palette.primary.main,
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));
