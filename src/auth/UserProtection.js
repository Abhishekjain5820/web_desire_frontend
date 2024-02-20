import {Navigate} from 'react-router-dom'

const UserProtection = ({Children}) => {
 let isAuthenticated=false;

 if(isAuthenticated){
    return Children;
 }
 else{
   return <Navigate to="/login"/>
 }
}

export default UserProtection