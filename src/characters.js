import React, { Component } from 'react';
import Character from "./character";
import {Row, Container} from 'react-bootstrap';

var md5 = require('md5');


class Characters extends Component {
    state={
        list:[]
    }
    componentDidMount() {
        if (!navigator.onLine) {
            if (localStorage.getItem('list') === null)
                this.setState({ list: [] })
            else
                this.setState({ list: JSON.parse(localStorage.getItem('list')) });
        }
      
        var ts="test123";
        var llavepublica="0bb31512f11bb043f45ddf3aaebbc7ff";
        var llaveprivada="50181f3a52ebb61c8b6696509c2ecddc90ce393a";
        var hash=md5(ts+llaveprivada+llavepublica);        ;
        var apikey=llavepublica;

        console.log("https://gateway.marvel.com:443/v1/public/characters?ts="+ts+"&hash="+hash+"&apikey="+apikey);
        fetch("https://gateway.marvel.com:443/v1/public/characters?ts="+ts+"&hash="+hash+"&apikey="+apikey)
          .then(res => {
              return res.json();
          }).then(res => {
              console.log(res);
              console.log(JSON.stringify(res.data.results));
              this.setState({ list: res.data.results });
              localStorage.setItem('list', JSON.stringify(res.data.results));
          });
      }

    render() {
        return (
            <Container className="text-center">
<br></br>
<br></br>
<img  src="https://todocomics.files.wordpress.com/2013/02/marvel-logo.png" width="300" height="120" />
<br></br>
<br></br>
<br></br>
<br></br>
            <Row className="justify-content-md-center">
               
            {
                this.state.list.length==0&&(
                     <div className="m"> <h3>Loading ...</h3> </div> 
                )
            }
            {
                this.state.list.length!=0 &&(
                    this.state.list.map((e,i)=>
                    <Character value={e} key={i}></Character>
                       
                    )
                )
                    
                
            }
            
            </Row>   
            </Container>
        );
    }
}

export default Characters;