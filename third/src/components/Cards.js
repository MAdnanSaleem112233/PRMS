import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MOB from "../components/img/mobile.png";
import web from "../components/img/pc.png";
import soft from "../components/img/software.png";
import UI from "../components/img/ui.png";
import Data from "../components/img/data.png";
import  other from "../components/img/other.gif";
const Another = () => {
  return (
    <>
    <div style={{marginTop:"5%"}}>
      <Card style={{ width: '18rem', marginLeft: "15%", height: "300px" }}>
        <Card.Img variant="topleft" src={MOB} style={{ width: "80px", marginLeft: "10px", marginTop: "10px" }} />
        <Card.Body>
          <Card.Title>MOBILE DEVELOPMENT </Card.Title>
          <Card.Text>
            Our technical teams specialized in mobile development can develop hybr...
          </Card.Text>
          <Button style={{ marginTop: "0px" }} variant="primary">Get Details</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', marginLeft: "40%", height: "300px", marginTop: "-300px" }}>
        <Card.Img variant="topleft" src={web} style={{ width: "80px", marginLeft: "10px", marginTop: "10px" }} />
        <Card.Body>
          <Card.Title>WEB DEVELOPERS </Card.Title>
          <Card.Text>
            Our frontend teams are always at the frontend of technology for both the f...
          </Card.Text>
          <Button style={{ marginTop: "0px", backgroundColor:"black" }} variant="primary">Get Details</Button>
        </Card.Body>
      </Card>
     
        <Card style={{ width: '18rem', marginLeft: "65%", height: "300px", marginTop: "-300px" }}>
          <Card.Img variant="topleft" src={soft} style={{ width: "80px", marginLeft: "10px", marginTop: "10px" }} />
          <Card.Body>
            <Card.Title>SOFTWARE DEVELOPERS </Card.Title>
            <Card.Text>
              Our team of software engineers have the expertise to develop successf...
            </Card.Text>
            <Button style={{ marginTop: "0px", backgroundColor:"hsl(310, 91%, 56%)"}} variant="primary">Get Details</Button>
          </Card.Body>
        </Card>
        </div>

        <div style={{marginTop:"5%"}}>
      <Card style={{ width: '18rem', marginLeft: "15%", height: "300px" }}>
        <Card.Img variant="topleft" src={UI} style={{ width: "80px", marginLeft: "10px", marginTop: "10px" }} />
        <Card.Body>
          <Card.Title>UI/UX DEVELOPMENT</Card.Title>
          <Card.Text>
            Our technical teams specialized in mobile development can develop hybr...
          </Card.Text>
          <Button style={{ marginTop: "0px",backgroundColor:"#45ee37" }} variant="primary">Get Details</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem', marginLeft: "40%", height: "300px", marginTop: "-300px" }}>
        <Card.Img variant="topleft" src={Data} style={{ width: "80px", marginLeft: "10px", marginTop: "10px" }} />
        <Card.Body>
          <Card.Title>DATA ENGINEERING</Card.Title>
          <Card.Text>
            Our frontend teams are always at the frontend of technology for both the f...
          </Card.Text>
          <Button style={{ marginTop: "0px", backgroundColor:"orange" }} variant="primary">Get Details</Button>
        </Card.Body>
      </Card>
     
        <Card style={{ width: '18rem', marginLeft: "65%", height: "300px", marginTop: "-300px" }}>
          <Card.Img variant="topleft" src={other} style={{ width: "80px", marginLeft: "10px", marginTop: "10px" }} />
          <Card.Body>
            <Card.Title>SOFTWARE DEVELOPERS </Card.Title>
            <Card.Text>
              Our team of software engineers have the expertise to develop successf...
            </Card.Text>
            <Button style={{ marginTop: "0px", backgroundColor:"black"}} variant="primary">Get Details</Button>
          </Card.Body>
        </Card>
        </div>
    </>
  );
}
export default Another;