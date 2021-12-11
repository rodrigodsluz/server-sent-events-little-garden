import { Container } from "react-bootstrap";
import client from '../../services/client.js';
import {toast} from 'material-react-toastify';
import history from "../../services/history.js";
import { useEffect } from "react";
import './styles.css';

export default function Login() {

    const handleSubmit = async (event) => {
       event.preventDefault();
       const getData = async () => {
        try {
        const data = await client.get('/auth/checkSession');
            if (data.status === 200) {
                return history.push('/');
            }
        } catch (error) {
            //Continue to login
        }
       try {
       await client.post('/auth/login', {
           nickname: event.target.nickname.value
       });
       toast.success("Successfully logged in!");
       history.push('/');
       } catch (error) { 
           if (error.response?.data?.message)
           toast.error(error.response?.data?.message);
           else
           toast.error(error.message);
       }
       }
       getData();
    };

    useEffect(() => {
        (async () => {
            try {
            const data = await client.get('/auth/checkSession');
            if (data.status === 200) {
               history.push('/');
            }
            } catch (error) {
                //Stay
            }
        })();
    });

    return (
        <div className="loginWrapper">
            <div className="panel">
            <form onSubmit={handleSubmit}>
            <div className="inputWrapper">
            <input 
            type="text" 
            name="nickname" 
            label="nickname" 
            placeholder="Your nickname"
            required/>
            <button type="submit">Login</button>
            </div>
            </form>
            </div>
        </div>
    );
}