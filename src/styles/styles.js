import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "rgba(255, 255, 255, 0.3);",
    borderRadius: "25px",
  },
  text: {
    color: "#232323",
    marginBottom: theme.spacing(1),
    // marginTop: theme.spacing(1),
  },
  returnedText: {
    margin: theme.spacing(2),
    // marginBottom: theme.spacing(2),
    alignItems: "center",
    height: "350px",
    width: "80%",
    wordWrap: "break-all",
    overflowY: "scroll",
  },
  copyButton: {
    position: "relative",
    left: "77%",
  },
  uploader: {
    marginTop: theme.spacing(1),
  },
  appInfoPaper: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "rgba(255, 255, 255, 0.3)",
    borderTopLeftRadius: "25px",
    borderTopRightRadius: "25px",
  },
  aboutUsText: {
    margin: theme.spacing(2),
    alignItems: "center",
    width: "80%",
    wordWrap: "break-all",
  },
  loader: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(5),
  },
}));
