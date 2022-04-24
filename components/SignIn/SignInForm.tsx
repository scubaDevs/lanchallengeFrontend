import { RESPONSE_LIMIT_DEFAULT } from 'next/dist/server/api-utils';
import React, { Dispatch, SetStateAction, useState } from 'react';
import styles from '../SignIn/signform.module.scss';





   /*  const registerUser = async (e: React.ChangeEvent<HTMLInputElement>) => {
      
  
      const res = await fetch(
        'https://langchallenge.herokuapp.com/create',
        {
          body: JSON.stringify({
            email: e.
            pass: e.target.senha
          }),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        }
      )
  
      const result = await res.json()
      // result.user => 'Ada Lovelace'
     */
  

export const SignInForm = ()=>{


    const [email, setEmail] = useState(' ');
 

const [pass, setPass] = useState('');


const handleChangeEmail = (e:React.ChangeEvent<HTMLInputElement>)=>{
    
       setEmail(e.target.value);
};

const handleChangePass = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setPass(e.target.value)
};

const [user,setUser] = useState([]);
const handleClick = async (e: React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    let resposta = await fetch('https://langchallenge.herokuapp.com/signup',{
        body:JSON.stringify({
            email: email,
            pass: pass
        }),
        headers: {
            'Content-Type' : 'application/json'
        },
        method: 'post'
    });
    try{
    const json = await resposta.json();
    setUser(json);
    
    
    setEmail('');
    setPass('');
    localStorage.key(user[1])
    } catch(error){
        console.log("Deu erro: ", error)
    }



};

    return(
        <div>
            <h1>Sign In</h1>
            <hr/>
            <form>
                <label htmlFor='email'>
                Email <br/>
                <input id='email' type='email' name='email' placeholder='Digite seu email...' value={email} onChange={handleChangeEmail} required/><br/>
                </label>
                <label htmlFor='senha'>
                Senha<br/>
                <input id='senha' type='password' name='senha' value={pass} placeholder='Digite sua senha...' onChange={handleChangePass} required/><br/>
                </label>
                <button onClick={handleClick}>Enviar</button>

            </form>
            <hr/>
            
            
            
        </div>
    )
};