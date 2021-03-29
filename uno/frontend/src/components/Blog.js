import React, { Component } from "react";
import { render } from "react-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Blog/Header';
import MainFeaturedPost from './Blog/MainFeaturedPost';
import FeaturedPost from './Blog/FeaturedPost';
import Main from './Blog/Main';
import Sidebar from './Blog/Sidebar';
import Footer from './Blog/Footer';


class Blog extends Component {
  constructor(props) {
    super(props);
    this.classes = makeStyles((theme) => ({
      mainGrid: {
        marginTop: theme.spacing(3),
      },
    }));
    this.state = {
      origin: window.location.origin,
      loaded: false,
      data: [
        {
          "id": 1,
          "title": "Loading...",
          "summary": "Loading",
          "image": "",
          "imageText": "Loading",
          "linkText": "",
          "created_at": ""
        },
        {
          "id": 2,
          "title": "Loading..",
          "summary": "Loading",
          "image": "",
          "imageText": "Loading",
          "linkText": "",
          "created_at": ""
        },
        {
          "id": 3,
          "title": "Loading.",
          "summary": "Loading",
          "image": "",
          "imageText": "Loading",
          "linkText": "",
          "created_at": ""
        },
        {
          "id": 4,
          "title": "Loading",
          "summary": "Loading",
          "image": "",
          "imageText": "Loading",
          "linkText": "",
          "created_at": ""
        }
    ],
    categories: [
      {
        "id": 1,
        "nicename": "",
        "description": "",
        "author": "",
        "posts": []
      }
    ]
    };
  }

  componentDidMount() {
    fetch(`${this.state.origin}/posts/`)
      .then(postsResponse => {
        if (postsResponse.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return postsResponse.json();
      })
      .then(data => {
        data.reverse();
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
    fetch(`${this.state.origin}/categories/`)
      .then(categoriesResponse => {
        if (categoriesResponse.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
        });
      }
      return categoriesResponse.json();
    })
    .then(categories => {
      this.setState(() => {
        return { categories };
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
          <Container maxWidth="lg">
            <Header title="Todos Querem Uno! Blog" sections={this.state.categories} />
            <main>
              <MainFeaturedPost post={this.state.data[0]} />
              <Grid container spacing={4}>
                {this.state.data.slice(1,3).map((blogpost) => (
                  <FeaturedPost key={blogpost.title} post={blogpost} />
                ))}
              </Grid>
              <Grid container spacing={5} className={this.classes.mainGrid}>
                <Main title="Posts" posts={this.state.data.slice(3)} />
                <Sidebar
                  title="Todos Querem Uno"
                  description="A blog dedicated to the most friendship-damaging game ever played."
                  archives={[{title: "", url: "#"}]}
                  social={[{nicename: "Facebook", link: "#"}]}
                />
              </Grid>
            </main>
          </Container>
          <Footer title="Todos Querem Uno! Blog" description="A place to make fun & enemies!" />
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

