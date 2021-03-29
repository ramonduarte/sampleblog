import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';


// TODO: add to model image, imageText, linkText 2021-03-02 22:08:03
export default function MainFeaturedPost(props) {
  const { post } = props;
  const origin = window.location.origin;

  return (
      <Grid container>
        <Grid item md={6}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {/* <Link href= {`${origin}${post.link}`}> */}
                {post.title}
              {/* </Link> */}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {/* <Link href= {`${origin}${post.link}`}> */}
                {post.summary}
              {/* </Link> */}
            </Typography>
            <Link variant="subtitle1" href={`${origin}${post.link}`}>
              {"Read more..."} {/* TODO: dynamic text 2021-03-28 16:01:18 */}
            </Link>
        </Grid>
      </Grid>
  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};
