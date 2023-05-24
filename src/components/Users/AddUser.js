import React,{useState} from 'react';

import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from '../UI/Button';
import ErrorModal from './ErrorModal';
import Wrapper from '../helper/Wrapper';

function AddUser(props){
    const[enteredUserName,setEnteredUserName]=useState('');
    const[enteredAge,setEnteredAge]=useState('');
    const[error,setError]=useState();

     function addUserhandler(event){
        event.preventDefault();
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
        props.onAddUser(enteredUserName, enteredAge);
        setEnteredUserName('');
        setEnteredAge('');
     }

     function userNameHandler(event){
        setEnteredUserName(event.target.value);
     }

     function ageHandler(event){
        setEnteredAge(event.target.value);
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
             <input type='text' id='username' value={enteredUserName} onChange={userNameHandler}/>
             <label htmlFor='age'>Age : </label>
             <input type='number' id='age' value={enteredAge} onChange={ageHandler}/>
             <Button type='submit'> Add User</Button>
           
           </form>
        </Card>
        </Wrapper>
    )
}

export default AddUser;