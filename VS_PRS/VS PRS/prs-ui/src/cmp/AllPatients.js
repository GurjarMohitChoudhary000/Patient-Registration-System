import React, {useState,useEffect} from "react";
import base_url from "../api/BootApi";
import base_url_adm from "../api/BootApiAdm";
import axios from "axios";
import { Button, ButtonGroup, Input, Table} from "reactstrap";
import { useNavigate } from "react-router-dom";
import './SearchBar.css';
import ErrorBoundary from "../ErrorBoundary";



const AllPatients = () => {

    let navigate = useNavigate();

    const [patients, setPatients] = useState([]);
    const [query, setQuery] = useState("");
    const [isTouched, setIsTouched] = useState(false);
    const [searchData, setSearchData] = useState([]);
    const [id, setId] = useState(0);
    const [state, setState] = useState({ room: 0, admId: 0 });
    const [identity, setIdentity] = useState(0);

    useEffect(()=>{
            document.title="Patients || Patient Registration System";
        getAllPatientsFromServer();
    }, []);
    
    useEffect(() => {
        getPatientsFromSearching();
    }, [query])
    
    useEffect(() => {
        
    }, [searchData])
    
    useEffect(() => {
        deleteFromPatients();
    }, [id])
    
    useEffect(() => {
        handleTheRoom(identity);
    },[identity])

    const getAllPatientsFromServer =()=>{
        axios.get(`${base_url}/patients`).then(
            (response) => {
                setPatients(response.data);
            },
            (error)=>{
                alert("Something went wrong");
            }
        )
    }

    

    const getPatientsFromSearching = () => {
        axios.get(`${base_url}/search/${query}`).then(
            (response) => {
                setSearchData(response.data);
            },
            (error) => {
                console.log("Error", error);
            }

        )
    }

    const deleteFromPatients = () => {
        axios.delete(`${base_url}/patients/${id}`).then(
            (response) => {
                getAllPatientsFromServer();
            },
            (error) => {
                alert('Something went wrong')
            }
        )
    }

    let count = 0;

    const handleTheChange = (e) => {
        count++;
        if (count >= 3) {
            setIsTouched(true);
            setQuery(e.target.value);
        }

        if (e.target.value === '') {
            setIsTouched(false);
        }
    }

    const handleTheRoom = (identity) => {
        console.log("idennnnnnn",identity);
        axios.get(`${base_url_adm}/admission/${identity}`).then(
            (response) => {
                console.log("responseeee",response.data);
            },
            (error) => {
                alert('Something went wrong')
            }
        )
    }
    
    return(
        <div>
            <div className="container-fluid text-sm-center p-5 bg-light">
                <h2 className="text-center">PATIENTS LIST</h2>
                <hr/>
                <div>
                    <pre />
                    <Input id="search-input" type="text" placeholder="Search..." onChange={handleTheChange} />
                </div>
                <div className="row" >
                            <div style={{
                                maxHeight: '321px',
                                overflowY: 'auto',
                            }}>
                    <Table bordered hover responsive size="" striped>
                        <thead>
                            <tr >
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>DOB</th>
                                <th>Gender</th>
                                <th>Contact</th>
                                <th>Address</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                isTouched ?
                                    searchData.map((allItems) => {
                                        return (
                                            <tr key={allItems.id}>
                                                <td>{allItems.firstName}</td>
                                                <td>{allItems.lastName}</td>
                                                <td>{allItems.dOB}</td>
                                                <td>{allItems.gender}</td>
                                                <td>{allItems.mob}</td>
                                                <td>{allItems.address}</td>
                                                <td>{allItems.emailId}</td>
                                                <td>

                                                    <ButtonGroup>
                                                        <ErrorBoundary>
                                                            <Button color="primary" outline size="sm"
                                                                onClick={() => {
                                                                    navigate('/UpdatePatients',{state:{id:allItems.id, fname:allItems.firstName, lname:allItems.lastName, dob:allItems.dOB, gender:allItems.gender, mob:allItems.mob, address:allItems.address, email:allItems.emailId}})
                                                                }}
                                                            >
                                                                Update
                                                            </Button>
                                                        </ErrorBoundary>
                                                        <ErrorBoundary>
                                                            <Button color="danger" outline size="sm"
                                                                onClick={() => {
                                                                    setId(allItems.id);
                                                                } }
                                                            >
                                                                Delete
                                                            </Button>
                                                        </ErrorBoundary>
                                                        <ErrorBoundary>
                                                            <Button color="primary" outline size="sm"
                                                                onClick={() => {
                                                                    navigate('/AddRoom', { state: { id: allItems.id, fname: allItems.firstName, lname: allItems.lastName, dob: allItems.dOB, gender: allItems.gender, mob: allItems.mob, address: allItems.address, email: allItems.emailId } })
                                                                }}
                                                            >
                                                                Add Room
                                                            </Button>
                                                        </ErrorBoundary>
                                                    </ButtonGroup>
                                                </td>
                                            </tr>
        
                                            
                                        
                                        )                                     
                                        
                        })
                                : (                 
            patients.length>0 ? patients.map((item)=>                                
                <tr key={item.id}>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.dOB}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.mob}</td>
                                    <td>{item.address}</td>
                                    <td>{item.emailId}</td>
                    <td>
                        
                        <ButtonGroup>
                            <ErrorBoundary>
                            <Button color="primary" outline size="sm"
                                    onClick={() => {
                                        navigate('/UpdatePatients', {
                                            state: {
                                                id: item.id,
                                                fname: item.firstName,
                                                lname: item.lastName,
                                                dob: item.dOB,
                                                gender: item.gender,
                                                mob: item.mob,
                                                address: item.address,
                                                email: item.emailId
                                            }
                                        })
                                    }}
                                            >
                                                Update
                                </Button>
                            </ErrorBoundary>
                            <ErrorBoundary>
                                <Button color="danger" outline size="sm"
                                    onClick={() => {
                                        setId(item.id);
                                    }}
                                >
                                                Delete
                                </Button>
                            </ErrorBoundary>
                            <ErrorBoundary>
                                <Button color="primary" outline size="sm"
                                    onClick={() => {
                                        navigate('/AddRoom', { state: { id: item.id, fname: item.firstName, lname: item.lastName, dob: item.dOB, gender: item.gender, mob: item.mob, address: item.address, email: item.emailId } })
                                    }}
                                >
                                    Add Room
                                </Button>
                            </ErrorBoundary>
                        </ButtonGroup>
                                    </td>
                                    </tr>

                                    ) : "Patient Not Found")
                                    
            }
                            
                        </tbody>
                                </Table>
                            </div>
                </div>
        </div>
        </div>
    );
};

export default AllPatients;


