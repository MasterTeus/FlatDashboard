import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  link: {
    marginBottom: 5,
    height: 55,
    textDecoration: "none",
    "&:hover, &:focus": {
      // backgroundColor: theme.palette.background.light,
      backgroundColor: "rgba(255,255,255, 0.1)",
    },
    borderRadius: 30,
    right: -20,
  },
  linkActive: {
    backgroundColor: "rgba(255,255,255, 0.2)",
  },
  linkNested: {
    right: 0,
    paddingLeft: 15,
    "&:hover, &:focus": {
      backgroundColor: "rgba(255,255,255, 0.1)",
    },
  },
  linkIcon: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary + "99",
    transition: theme.transitions.create("color"),
    height: 55,
    marginLeft: -15,
    borderRadius: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  linkIconActive: {
    // color: theme.palette.primary.main,
    background: "linear-gradient(to right, rgba(255,255,255, 0.2) , rgba(255,255,255, 0.1))",
  },
  linkText: {
    padding: 0,
    // color: theme.palette.text.secondary + "CC",
    color: "#ffffff60",
    transition: theme.transitions.create(["opacity", "color"]),
    fontSize: 16,
  },
  linkTextActive: {
    fontWeight: "bold",
    color: "#fff",
    // color: theme.palette.text.primary,
  },
  linkTextHidden: {
    opacity: 0,
  },
  nestedList: {
    paddingLeft: theme.spacing(2) + 30,
  },
  sectionTitle: {
    marginLeft: theme.spacing(4.5),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
    height: 1,
    backgroundColor: "#D8D8D880",
  },
}));
