import React, { Component } from "react";
import { render } from "react-dom";
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Blog/Header';
import Paper from '@material-ui/core/Paper';
import Main from './Blog/Main';
import Sidebar from './Blog/Sidebar';
import Footer from './Blog/Footer';



class BlogPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      data: {
          "id": 1,
          "author": "",
          "title": "",
          "summary": "",
          "image": "",
          "imageText": "",
          "linkText": "#"
      },
      categories: [
        {
          "id": 1,
          "nicename": "",
          "description": "",
          "author": "",
          "posts": []
        }
      ],
      author: {
        "username": "",
        "url": "#"
      },
      otherPosts: []
    };
  }

  componentDidMount() {
    Promise.all([
    ])
      .then(([response]) => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        } else {
          return Promise.all([
            response.json(),
          ]);
        }
      })
      .then(([data]) => {
        this.setState(() => {
          data.summary = data.content;
          return {
            data,
            loaded: true
          };
        });
        Promise.all([
            ]);
          }
        })
        .then(([author]) => {
            this.setState(() => { return { author } });
            author.posts.map(value => {
              if (`${value}` !== `${blogid}`) {
                Promise.all([
                ])
                    return this.setState(() => {
                      return { placeholder: "Something went wrong!" };
                    });
                  } else {
                    return Promise.all([
                    ]);
                  }
                })
                .then(([post]) => {
                  this.setState(prevState => ({
                    otherPosts: [
                        ...prevState.otherPosts,
                        {
                          "title": post.title,
                        }
                      ]
                  }));
                });
              }
            });
        });
      });
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
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
              <Paper 
              >
                <img style={{ display: 'none' }} src={this.state.data.image} alt={this.state.data.imageText} />
              </Paper>
                <Main title={this.state.data.title} posts={[this.state.data]} />
                <Sidebar
                  title={this.state.author.username}
                  archives={this.state.otherPosts}
                />
            </main>
          </Container>
        </React.Fragment>
    );
  }
}

export default BlogPost;

try {
  const container = document.getElementById("blogpost");
  render(<BlogPost />, container);
} catch (error) {
  
}
