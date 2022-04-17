import React, { useEffect } from 'react';
import {Container, Row, Col} from "reactstrap";
import AllPatients from "./AllPatients";
import Header from "./Header";
import Menus from "./Menus";
import Registration from "../Registration";
import ErrorBoundary from '../ErrorBoundary';
import UpdatePatients from './UpdatePatients';
import AddRoom from './AddRoom';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const Home =()=>{
        useEffect(()=>{
            document.title="Home || Patient Registration System";
        },[]);
    return (
            <>
                <Router>
                <Container>
                    <Header />
                    <Row>
                        <Col md={2}>
                            <ErrorBoundary>
                                <Menus />
                            </ErrorBoundary>
                        </Col>
                        <Col md={10}>
                            <Routes>
                                    <Route path="/home" element={<index />} />
                                    <Route path="/registration" element={<Registration />} exact />
                                    <Route path="/patientsList" element={<AllPatients />} exact />
                                    <Route path="/updatePatients" element={<UpdatePatients />} />
                                    <Route path="/addRoom" element={<AddRoom />} />
                                    <Route path="*" element={ <h1>Error 404 Page Not Found !!!</h1>}/>
                            </Routes>
                        </Col>
                    </Row>
                </Container>
                </Router>
        </>
    );
}

export default Home;
