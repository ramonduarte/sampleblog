import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';


export default function Sidebar(props) {
  const { archives, description, social, title } = props;

  return (
    <Grid item xs={12} md={4}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      {archives.map((archive) => (
        <Link display="block" variant="body1" href={archive.url} key={archive.title}>
          {archive.title}
        </Link>
      ))}
      {social.map((network) => (
        <Link display="block" variant="body1" href={network} key={network}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              {
                {
                  "Facebook": <FacebookIcon />,
                  "Twitter": <TwitterIcon />,
                  "GitHub": <GitHubIcon />,
                }[network.nicename]
              }
            </Grid>
            <Grid item>{network.nicename}</Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};
