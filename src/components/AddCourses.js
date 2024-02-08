import { Button } from "reactstrap";
import { Container } from "reactstrap";
import React,{useEffect} from "react";
import { Form } from "reactstrap";
import { FormGroup,Input} from "reactstrap/es";
function AddCourse(){
    useEffect(()=>{
        document.title = "All courses";
    });
    return (
        <div>
            <h1 className="text-center my-3">Fill Course Detail</h1>
            <Form>
                <FormGroup>
                    <lable for="userID">Course Id</lable>
                    <Input type="text"  placeholder="Enter here" name="userId" id="userID"></Input>
                </FormGroup>
                <FormGroup>
                    <lable for="title">Course Title</lable>
                    <Input type="text"  placeholder="Enter title here" name="userId" id="userID"></Input>
                </FormGroup>
                <FormGroup>
                    <lable for="userID">Course description</lable>
                    <Input type="textarea"  placeholder="Enter here" name="userId" id="userID"  style={{height:150}}></Input>
                </FormGroup>
                <Container className="text-center">
                    <Button color="success">Add Course</Button>
                    <Button color="warning ml-2">Clear</Button>
                </Container>
            </Form>
        </div>
    )
}
export default AddCourse;