import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import Grid from "@material-ui/core/Grid";

import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
// import tileData from "./tileData";

const styles = theme => ({
  root: {
    margin: "1rem auto",
    width: "100%",
    height: "auto",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  },
  gridListTile: {
    "&:hover": {
      opacity: "0.7"
    }
  }
});

const getGridListCols = width => {
  console.log("width", width);
  if (isWidthUp("xl", width)) {
    return 3;
  }

  if (isWidthUp("lg", width)) {
    return 3;
  }

  if (isWidthUp("md", width)) {
    return 1;
  }
  if (isWidthUp("sm", width)) {
    return 1;
  }
  // xs
  return 1;
};

const CELL_HEIGHT = 250;
const GRID_LIST_TILE_SPACING = 0;

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

const projectsInfo = {
  cabling: "assets/images/works/cabling-0.jpg",
  camera: "assets/images/works/camera-0.jpg",
  intercom: "assets/images/works/intercom.jpg",
  testing: "assets/images/works/klein-tools.jpg",
  mounting: "assets/images/works/mounting-1.jpg",
  wifi: "assets/images/works/wifi-0.jpg"
};

function TitlebarGridList(props) {
  const { classes } = props;

  return (
    <Grid container justify="center" className={classes.root}>
      <Grid item xs={12}>
        {/* </Grid>className={classes.root}> */}
        {/* <Grid item xs> */}
        <GridList
          spacing={GRID_LIST_TILE_SPACING}
          cellHeight={CELL_HEIGHT}
          cols={getGridListCols(props.width)}
        >
          {/* <GridListTile
          key="Subheader"
          cols={getGridListCols(props.width)}
          style={{ height: "auto" }}
        >
          <ListSubheader component="div">GRIDLIST SUBHEADER</ListSubheader>
        </GridListTile> */}
          {Object.keys(projectsInfo).map(tile => (
            <GridListTile
              key={projectsInfo[tile]}
              cols={1}
              className={classes.gridListTile}
            >
              <img src={projectsInfo[tile]} alt={tile} />
              <GridListTileBar
                title={tile.toUpperCase()}
                subtitle={<span>subtitle {tile}</span>}
                // actionIcon={
                //   <IconButton className={classes.icon}>
                //     <InfoIcon />
                //   </IconButton>
                // }
              />
            </GridListTile>
          ))}
        </GridList>
      </Grid>
    </Grid>
  );
}

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withWidth()(TitlebarGridList));
