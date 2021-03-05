import React, { Component } from "react";
import { render } from "react-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    fetch("posts")
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
      <Grid item xs={12} md={8}>
        <ul>
          {this.state.data.map(blogpost => {
            return (
              <li key={blogpost.id}>
                <Typography variant="h5" gutterBottom>{blogpost.title}</Typography>
                <Typography variant="h6" gutterBottom>{blogpost.author}</Typography>
                <Typography variant="p" gutterBottom>{blogpost.summary}</Typography>
                <Divider />
              </li>
            );
          })}
        </ul>
      </Grid>
    );
  }
}

export default App;

try {
  const container = document.getElementById("app");
  render(<App />, container);
} catch (error) {
  
}

