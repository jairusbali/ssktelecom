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

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
};

function TemporaryDrawer(props) {
  const { classes, show, setShow } = props;

  const sideList = (
    <div className={classes.list}>
      <List>
        {["Home", "Projects", "Services", "Contact"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} color="secondary" />
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
    <Drawer anchor="right" open={show} onClose={() => setShow(false)}>
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
