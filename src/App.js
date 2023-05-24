import React,{useState, Fragment} from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [users,setUsers] = useState([])
  function AdduserHandler(uName,uAge){
    setUsers((prevUserList) =>{
      return[...prevUserList, {name: uName, age:uAge, id:Math.random().toString()}]
    })
  }
  return (
    <Fragment>
      <AddUser onAddUser={AdduserHandler} />
      <UserList  users={users}/> 
     
    </Fragment>
  );
}

export default App;


