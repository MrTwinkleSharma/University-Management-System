//3rd Party Modules
import React from 'react';
//Local Modules
import Card from '../../shared/Components/UIElements/Card';

//CSS Files
import './UserItem.css'

function UserItem (props)
{
    return <tr>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.marks}</td>
      <td>{props.attendance}</td>
      <td><button>EDIT DETAILS</button></td>
    </tr>

};
export default UserItem;