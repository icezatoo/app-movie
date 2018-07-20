import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import HeaderTitle from '../../headertitle/Headertitle';

const CardItem = ({ classes, character, name, baseurl, profile_path }) => (
  <Fragment>
    <Grid item xs>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={baseurl + profile_path}
          title={name}
        />
        <CardContent>
          <HeaderTitle>{name}</HeaderTitle>
          <Typography component="p">{character}</Typography>
        </CardContent>
      </Card>
    </Grid>
  </Fragment>
);

export default CardItem;
