import React, { useState } from 'react';
import { Form, Row, Col, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';
import { countries } from './../data';

const UserProfile = ({ selectedUser, handleUserProfile, handleCheck, relocateOption }) => {
    const { first_name, last_name, email, id, number, country } = selectedUser;
    const [response, setResponse] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://reqres.in/api/users/${id}`, selectedUser)
            .then(response => setResponse({
                message: 'Details updated Successfully',
                ...response.data
            }))
            .catch(err => setResponse({
                message: 'Action failed'
            }));
    }
    
    const isValidNumber = (e) => {
        if(e.target.value.length !== 10){
            alert('Please enter a valid mobile number')
        }
    }
    
    return (
        <>
            <Form onSubmit={handleSubmit} className="profile-form">
                <Row form>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="firstName">First Name</Label>
                            <Input
                                type="text"
                                name="first_name"
                                placeholder="Enter first name"
                                value={first_name || ''}
                                onChange={handleUserProfile}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="lastName">Last Name</Label>
                            <Input
                                type="text"
                                name="last_name"
                                placeholder="Enter last name"
                                value={last_name || ''}
                                onChange={handleUserProfile}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                                type="email"
                                name="email"
                                placeholder="Enter email id"
                                value={email || ''}
                                onChange={handleUserProfile}
                            />
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="number">Contact Number</Label>
                            <Input
                                type="number"
                                name="number"
                                placeholder="Mobile number"
                                value={number || ''}
                                onChange={handleUserProfile}
                                onBlur={isValidNumber}
                            />
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="country">Country</Label>
                            <Input type="select" name="country" onChange={handleUserProfile} value={country || ''}>
                                <option value="">Select country</option>
                                {
                                    countries.map(country => <option key={country.code} value={country.code}>{country.name}</option>)
                                }
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col md={4}>
                        <FormGroup>
                            <Label for="city">Relocation:</Label>
                            <div>
                                <Input type="checkbox" name="relocate" value="Yes" onChange={handleCheck} /> Yes
                                <Input type="checkbox" name="relocate" value="No" onChange={handleCheck} /> No
                            </div>
                        </FormGroup>
                    </Col>
                </Row>
                <Button>Submit</Button>
            </Form>
            <div className="update-response">
                {
                    response && <p>{response.message}</p>
                }
                {
                    response && Object.keys(response)
                        .filter(key => key !== 'message')
                        .map(key => <div>{key}: {response[key]}</div>)
                }
                {
                    response && <span>Relocation: {relocateOption.join(", ")}</span>
                }
            </div>

        </>
    )
}

export default UserProfile;
