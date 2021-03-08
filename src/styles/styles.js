import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "rgba(255, 255, 255, 0.3);",
    borderRadius: "25px",
  },
  avatar: {
    marginTop: theme.spacing(3),
    margin: theme.spacing(1),
    paddingLeft: "45px",
  },
  text: {
    color: "#232323",
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  returnedText: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    alignItems: "center",
    height: "350px",
    width: "80%",
    wordWrap: "break-all",
    overflowY: "scroll",
  },
}));
