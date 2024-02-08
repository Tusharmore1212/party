import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import { Button } from "reactstrap";
import { ToastContainer,toast } from 'react-toastify';
import Home from './components/home';
import Course from './components/course';
import Allcourses from './components/allcourses';
import AddCourse from './components/AddCourses';
import { Container,Row,Col } from 'reactstrap';
import Menus from './components/Menus';
import { BrowserRouter as Router,Route,Routes
 } from 'react-router-dom';
function App() {

  const btnhandler = () =>{
    toast.error("this is my first msg")
  }
  return <div>
    <Router>
    <ToastContainer/>
    <Header/>
      <Container>
        <Row>
          <Col md={4}>
             <Menus/>
          </Col>
          <Col md={8}>
          <Routes> 
            <Route path="/" Component={Home} exact />
            <Route path="/add-courses" Component={AddCourse} exact />
            <Route path="/view-courses" Component={Allcourses} exact />
          </Routes>

          </Col>
        </Row>
      </Container>
    </Router>
  </div>

  
}

export default App;
