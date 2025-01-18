import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "calc(100vh - 200px)",
  },
  paper: {
    padding: theme.spacing(6),
    textAlign: "center",
    maxWidth: 600,
    margin: "0 auto",
  },
  icon: {
    fontSize: 80,
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(3),
  },
  title: {
    marginBottom: theme.spacing(3),
    fontFamily: "Playfair Display",
  },
  message: {
    marginBottom: theme.spacing(4),
    color: theme.palette.text.secondary,
  },
  buttonContainer: {
    display: "flex",
    gap: theme.spacing(2),
    justifyContent: "center",
  },
  primaryButton: {
    padding: theme.spacing(1.5, 4),
    backgroundColor: theme.palette.primary.main,
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  secondaryButton: {
    padding: theme.spacing(1.5, 4),
    borderColor: theme.palette.secondary.main,
    color: theme.palette.secondary.main,
    "&:hover": {
      borderColor: theme.palette.secondary.dark,
      backgroundColor: "transparent",
    },
  },
}));
