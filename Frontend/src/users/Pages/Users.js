//3rd Party Modules
import React, { useEffect,useState } from 'react';

//Local Modules
import UserList from '../Components/UserList';
import LoadingSpinner from '../../shared/Components/UIElements/LoadingSpinner';
import ErrorModal from '../../shared/Components/UIElements/ErrorModal';
import { useHttpClient } from '../../shared/util/useHttpClient';

function Users (){
    const [loadedUsers, setLoadedUsers] = useState([]);
    const {isLoading, error, clearError, sendRequest} = useHttpClient();

    useEffect(()=>{

    //    const fetchUsers = async ()=> {
    //         try{
    //             const response = await sendRequest({
    //                 api:'/api/users',
    //                 headers:{
    //                     'Content-Type':"application/json ; charset=UTF-8"                    
    //                 },
    //                 method:'GET'                 
    //             });
    //             setLoadedUsers(response.data);
    //         }
    //         catch(err){
                
    //         }
    //     }
    //     fetchUsers();
    const data = [ {id:2019021159, name:"Twinkle Sharma", marks:65, attendance:85}]
    setLoadedUsers(data);
    }
    ,[sendRequest]);
    return <>
    {isLoading && <div className='center'> <LoadingSpinner asOverlay/> </div>}
    {error && <ErrorModal onClear={clearError} error={error}/>}
    {!isLoading && !error && <UserList items={loadedUsers}></UserList> }
    </>
}
export default Users;