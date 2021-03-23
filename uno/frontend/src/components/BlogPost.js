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
          "author": "Loading...",
          "title": "Loading...",
          "summary": "Loading",
          "image": "",
          "imageText": "Loading",
          "linkText": ""
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
    };
  }

  componentDidMount() {
    }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
          <Container maxWidth="lg">
            <main>
                <Sidebar
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
