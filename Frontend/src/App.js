//3rd Party Modules
import React, {Suspense} from 'react';
import {BrowserRouter as Router, Route,Redirect,Switch} from 'react-router-dom';

//Local Modules
import MainNavigation from './shared/Components/Navigation/MainNavigation';
import AuthContext from  './shared/Context/auth-context';
import useAuth from './shared/util/authHook';
import Card from './shared/Components/UIElements/Card';
import LoadingSpinner from './shared/Components/UIElements/LoadingSpinner';
import Users from './users/Pages/Users'
//CSS Files
import './index.css';

//LazyLoading of Files for Code Splitting
const Authenticate = React.lazy(()=>import('./users/Pages/Authenticate'));


function App (){

  const {token, userId, login, logout} = useAuth();

  let routes;
  if(token){
    if(true){    
      routes = (<Switch>
        <Route path="/" exact>
        </Route>
        <Route path="/students" exact>  
          {/* <Students/> */}
        </Route>
        <Redirect to='/students' />
        </Switch>)
    }
    else
    {
      routes = (<Switch>
        <Route path="/" exact>
        </Route>
        <Route path="/student/:id" exact>  
          {/* <Student/> */}
        </Route>
        <Redirect to='/student/:id' />
       </Switch>)      
    }
  }
  else{
    routes = (<Switch>
      <Route path="/users" exact>
        <Users/>
      </Route>

      <Route path="/auth" exact>
        <Authenticate/>
      </Route>
        
      <Redirect to='/' />
    </Switch>)

  }
  return <Router>
  <AuthContext.Provider value={{isLoggedIn:!!token,token:token , userId:userId, login:login, logout:logout}}>
  <h1>Welcome to Our Website</h1>
  <MainNavigation/>
  <main><Suspense fallback={<div className='center'>
                <Card>
                <LoadingSpinner />
                </Card>
            </div>} >{routes}</Suspense>
  </main>
  </AuthContext.Provider>
  </Router>
}


export default App;