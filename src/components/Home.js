import React,{Component} from 'react';
import {
    Jumbotron,
    Container,
  } from 'reactstrap';

class Home extends Component {

    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render(){
        return(
          <div>
          <Jumbotron fluid className="align-self-center">
            <Container fluid>
              <h1 className="display-3">Vikash Kumar Verma</h1>
              <p className="lead">Front-end Developer</p>
            </Container>
          </Jumbotron>
          </div>
        );
    }
}

export default Home;