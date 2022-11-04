import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  mainContainer: {
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
}));