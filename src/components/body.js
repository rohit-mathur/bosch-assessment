import React, { useState, useEffect } from 'react';
import { Container, Nav, NavItem, NavLink, TabContent, TabPane, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import UserProfile from './userProfile';

const Body = () => {
    const columns = [
        {
            name: 'ID',
            selector: 'id',
        },
        {
            name: 'First Name',
            selector: 'first_name',
            sortable: true,
        },
        {
            name: 'Last Name',
            selector: 'last_name',
            sortable: true,
        },
        {
            name: 'Email',
            selector: 'email',
            sortable: true,
        }
    ];
    const [activeTab, setActiveTab] = useState('1');
    const [usersList, setUsersList] = useState([]);
    const [selectedUser, setSelectedUser] = useState({});
    const [relocateOption, setrelocateOption] = useState([]);

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    useEffect(() => {
        axios.get("https://reqres.in/api/users")
            .then(response => setUsersList(response.data.data))
            .catch(err => console.log(err))
    }, [])

    const redirectToUserProfile = (row) => {
        setSelectedUser(row);
        setActiveTab('2');
    }

    const handleUserProfile = (e) => {
        let updatedData = {
            ...selectedUser,
            [e.target.name]: e.target.value
        }
        setSelectedUser(updatedData)
    }

    const handleCheck = (e) => {
        if (e.target.checked) {
            setrelocateOption([...relocateOption, e.target.value])
        } else {
            relocateOption.splice(relocateOption.indexOf(e.target.value), 1)
            setrelocateOption([...relocateOption])
        }
    }

    return (
        <Container fluid>
            <h5>Home</h5>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => toggle('1')}
                    >
                        Users List
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => toggle('2')}
                    >
                        User Profile
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <DataTable
                        columns={columns}
                        data={usersList}
                        onRowClicked={redirectToUserProfile}
                        pagination={true}
                    />

                </TabPane>
                <TabPane tabId="2">

                    <UserProfile
                        selectedUser={selectedUser}
                        handleUserProfile={handleUserProfile}
                        handleCheck={handleCheck}
                        relocateOption={relocateOption} />

                </TabPane>
            </TabContent>
        </Container>
    )
}

export default Body;