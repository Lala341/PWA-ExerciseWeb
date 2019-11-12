import React, { Component } from 'react';
import {Card, Col} from 'react-bootstrap';


class Character extends Component {
    state={
        name:this.props.value.name,
        description: this.props.value.description,
        image: this.props.value.thumbnail.path+"."+this.props.value.thumbnail.extension,
        comics: this.props.value.comics,
        series:this.props.value.series,
        events:this.props.value.events,
        urls:this.props.value.urls
    }
    

    render() {
        return (
           
               
       <Col style={{ paddingTop: "20px" }}>
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.state.image} width="300" height="250" />
  <Card.Body>
    <Card.Title>{this.state.name}</Card.Title>
    <Card.Text>
     {this.state.description}
<br></br>
    

    </Card.Text>
    {
        this.state.urls.map((e)=>
            <div><br></br>
            <Card.Link style={{ color: '#A52A2A' }} href={e.url}>{e.type}</Card.Link>
                </div>
        
        
        )
    }
    
  </Card.Body>
</Card>
            
         </Col>      
           
        );
    }
}

export default Character;