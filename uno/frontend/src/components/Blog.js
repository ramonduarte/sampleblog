import React, { Component } from "react";
import { render } from "react-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Blog/Header';
import MainFeaturedPost from './Blog/MainFeaturedPost';
import FeaturedPost from './Blog/FeaturedPost';
// import RegularPost from './Blog/RegularPost';
import Main from './Blog/Main';
import Sidebar from './Blog/Sidebar';
import Footer from './Blog/Footer';


// TODO: dynamic categories 2021-03-02 21:52:16
const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

// TODO: dynamic sidebar 2021-03-02 21:53:15
const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

class Blog extends Component {
  constructor(props) {
    super(props);
    this.classes = makeStyles((theme) => ({
      mainGrid: {
        marginTop: theme.spacing(3),
      },
    }));
    this.state = {
      loaded: false,
      data: [
        {
          "id": 1,
          "title": "Loading...",
          "summary": "Loading",
          "image": "",
          "imageText": "Loading",
          "linkText": ""
        },
        {
          "id": 2,
          "title": "Loading..",
          "summary": "Loading",
          "image": "",
          "imageText": "Loading",
          "linkText": ""
        },
        {
          "id": 3,
          "title": "Loading.",
          "summary": "Loading",
          "image": "",
          "imageText": "Loading",
          "linkText": ""
        },
        {
          "id": 4,
          "title": "Loading",
          "summary": "Loading",
          "image": "",
          "imageText": "Loading",
          "linkText": ""
        }
      ]
    };
  }

  componentDidMount() {
    fetch("posts/")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
          <Container maxWidth="lg">
            <Header title="Blog" sections={sections} />
            <main>
              <MainFeaturedPost post={this.state.data[0]} />
              <Grid container spacing={4}>
                {this.state.data.slice(1,3).map((blogpost) => (
                  <FeaturedPost key={blogpost.title} post={blogpost} />
                ))}
              </Grid>
              <Grid container spacing={5} className={this.classes.mainGrid}>
                <Main title="+4" posts={this.state.data.slice(3)} />
                <Sidebar
                  title={sidebar.title}
                  description={sidebar.description}
                  archives={sidebar.archives}
                  social={sidebar.social}
                />
              </Grid>
            </main>
          </Container>
          <Footer title="Footer" description="Something here to give the footer a purpose!" />
        </React.Fragment>
    );
  }
}

export default Blog;

try {
  const container = document.getElementById("blog");
  render(<Blog />, container);
} catch (error) {
  
}

