import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Link } from "react-scroll";

const styles = theme => ({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  root: {
    backgroundColor: theme.palette.primary
  }
});

function TemporaryDrawer(props) {
  const { classes, show, setShow } = props;

  const sideList = (
    <div className={classes.list}>
      <List>
        {["Home", "Projects", "Services", "Contact"].map((text, index) => (
          <ListItem button key={text}>
            <Link
              activeClass="active"
              className="test1"
              to={text}
              spy={true}
              smooth={true}
              duration={500}
              offset={-64}
            >
              <ListItemText primary={text} color="secondary" />
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );

  useEffect(() => {
    console.log("created");

    return () => {
      console.log("dest");
    };
  }, []);

  return (
    <Drawer
      color="primary"
      anchor="right"
      open={show}
      onClose={() => setShow(false)}
    >
      <div
        tabIndex={0}
        role="button"
        onClick={() => setShow(false)}
        onKeyDown={() => setShow(false)}
      >
        {sideList}
      </div>
    </Drawer>
  );
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TemporaryDrawer);
