import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';


const Display = (props) => {
    const [clicked, setClicked] = useState(false)

    if(!clicked){
        return(
            <Container fluid className="p-2" style={{flex:"15%"}}>
                <Card style={{ width: '14rem', backgroundColor:"#D1ECF1"}}>
                    <Card.Img variant="top" src={props.user.thumbnail} />
                    <Card.Body>
                        <Card.Title>{props.user.name}</Card.Title>
                        <Button variant="primary" style={{backgroundColor:"#452669"}} onClick={()=>setClicked(clicked=>!clicked)}>More Info</Button>
                    </Card.Body>
                </Card>
            </Container>
        )
    } 
    else {
        return(
            <Card style={{ width: '14rem', backgroundColor:"#D1ECF1" }}>
                <Card.Img variant="top" src={props.user.thumbnail} />
                <Card.Body>
                    <Card.Title>{props.user.name}</Card.Title>
                    <Card.Text>
                        <p><span>Phone:</span> {props.user.phone}</p>
                        <p><span>Email:</span> {props.user.email}</p>
                    </Card.Text>
                    <Button variant="primary" onClick={()=>setClicked(clicked=>!clicked)}>Less Info</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default Display