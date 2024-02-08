import React,{useEffect} from "react";
import { Jumbotron, Container,Button } from 'reactstrap';
function Home()
{
    useEffect(()=>{
        document.title = "Home";
    });
    return (
        <div>
            <Jumbotron className="text-center ">
                <h1>Learn Code with Tushar</h1>
                <p1>This is developed by Tushar More for avinash mane</p1>
                <Container>
                    <Button color="primary" outline>Start using</Button>
                </Container>
            </Jumbotron>
        </div>
    );
}
export default Home;