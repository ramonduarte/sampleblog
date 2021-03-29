import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';


export default function FeaturedPost(props) {
  const { post } = props;
  const origin = window.location.origin;

  return (
    <Grid item xs={12} md={6}>
        <CardActionArea component="a" href={`${origin}${post.link}`}>
              <CardContent>
                <Typography component="h2" variant="h5">
                  {post.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {post.created_at}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {post.summary}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Read more...
                </Typography>
              </CardContent>
            <Hidden xsDown>
              {post.image? (
              ) : (
                <div><i className="fas fa-spinner"></i></div>
              )}
            </Hidden>
        </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};
