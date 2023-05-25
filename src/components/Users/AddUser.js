import React,{useState, useRef} from 'react';

import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from './ErrorModal';
import Wrapper from '../helper/Wrapper';

function AddUser(props){
    
    const[error,setError]=useState();
    const nameInputRef= useRef();
    const ageInputRef=useRef();
    const CollegeInputRef=useRef();
     function addUserhandler(event){
        event.preventDefault();
        
        const enteredUserName=nameInputRef.current.value;
        const enteredAge=ageInputRef.current.value;
        const enteredCollegeName=CollegeInputRef.current.value;
        if(enteredUserName.trim().length===0 || enteredAge.trim().length===0){
            setError({
                title:'InValid Input',
                message:'Please enter valid username and age(non-empty values)'
            })
            return;
        }
        if(+enteredAge < 1){
            setError({
                title:'InValid Age',
                message:'Please enter valid age(age>=1)'
                })
            return;
        }
        props.onAddUser(enteredUserName, enteredAge, enteredCollegeName);
        nameInputRef.current.value='';
        ageInputRef.current.value='';
       
     }

    

     function errorHandler(){
        setError(null);
     }


    return(
        <Wrapper>
           { error && <ErrorModal title={error.title} message={error.message} onErrorHandler={errorHandler}/>}
        <Card className={classes.input}>
            <form onSubmit={addUserhandler}>
             <label htmlFor='username'>UserName : </label>
             <input type='text' id='username'  ref={nameInputRef}/>
             <label htmlFor='age'>Age : </label>
             <input type='number' id='age'  ref={ageInputRef}/>
             <label htmlFor='clg'>College Name:</label>
             <input type='text' id='clg' ref={CollegeInputRef}></input>
             <Button type='submit'> Add User</Button>
           
           </form>
        </Card>
        </Wrapper>
    )
}

export default AddUser;