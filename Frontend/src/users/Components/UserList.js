//3rd Party Modules
import React from 'react';

//Local Modules
import UserItem from './UserItem';
import Card from '../../shared/Components/UIElements/Card';

import {Table} from 'react-bootstrap'

//CSS Files

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './UserList.css';

function UserList (props){

    return <>
    {
        props.items.length ?    
        <Table striped bordered hover variant="dark" STY>
        <thead>
          <tr>
            <th>Roll Number</th>
            <th>Name</th>
            <th>Marks</th>
            <th>Attendance</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            {
                props.items.map(user=> 
                
                    <UserItem 
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    marks={user.marks}
                    attendance={user.attendance}
                    />
                )
            }
        </tbody>
        </Table>    
        
        :
        <div className='center'>
            <Card>
                <h2>No Items Found!!</h2>
            </Card>

        </div>
    }

    </>
}
export default UserList;