import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import React, {  useState,useContext } from 'react'; 
import UserContext from './UserContext';
import { fetchApi } from './utils/Api';
import { config } from './utils/Config';

function Login({ users }){
    const router = useRouter();

    const user = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    
    const login = async () => {
        
        let inputData = {
            "email": email,
            "password":password
        }
        const response = await fetchApi(config.LOGIN_API,inputData)
        const data = await response.json();

        
        if(data.status == "success"){
            user.setlogged(true);
            localStorage.setItem('userLoginStatus', true);
            router.push("/posts");
        }
        else{
            user.setlogged(false);
            localStorage.setItem('userLoginStatus', false);
            router.push("/login");
        }
        
        
     }
    
    
    return (
        <div>
            <Head>
                <title>Login Application</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous" />
            </Head>
            <form className={styles.container575} >
                <div className="text-center">
                    <Image src="/comorins.png" alt="Comorin Logo" width={120} height={120} />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" defaultValue={email} onChange={(e)=>setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    <p>{email}</p>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" defaultValue={password} onChange={(e)=>setPassword(e.target.value)} id="exampleInputPassword1" />
                    <p>{password}</p>
                </div>
                <div class="form-group form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="button" class="btn btn-primary" onClick={()=>login()}>Submit</button>
            </form>
            
        </div>
        
    )
}

export default Login

