import React, {useEffect, useState} from 'react';
import GardenContainer from '../../components/garden/index.js';
import DefaultSpinner from '../../components/modals/spinner/default-spinner.js';
import client from '../../services/client.js';
import {toast} from 'material-react-toastify';
import history from '../../services/history.js';
import { handleDeletion, handleHandshake, handleUpdate } from './handler-helper.js';

export default function Garden() {

    const [loaded, setLoaded] = useState(false);
    const [id, setID] = useState("");
    const [nickname, setNickname] = useState("loading...");
    const [fruits, setFruits] = useState([]);
    const [animals, setAnimals] = useState([]);
    const [flowers, setFlowers] = useState([]);
    const [decorations, setDecorations] = useState([]);
    const [players, setPlayers] = useState(0);
    const [log, setLog] = useState([]);

    useEffect(() => {
        const loadEventSource = async () => {
        if (!loaded) {
        // Check if user is logged in
        try {
        const data = await client.get('/auth/checkSession', {});
        setID(data.data?.stack.id);
        setNickname(data.data?.stack.nickname);
        } catch (error) {
            setLoaded(true);
            return history.push('/login');
        }

        const events = new EventSource(`${process.env.REACT_APP_BACKEND_URL}/api/v1/listen/`
        , {withCredentials: true});

        events.onmessage = event => {

        const receivedData = JSON.parse(event.data);
        switch (receivedData.eventType) {
          case "handshake":
            handleHandshake(receivedData.data,
              setFruits,
              setFlowers,
              setAnimals,
              setDecorations,
              setPlayers);
            break;
          case "update":
            handleUpdate(receivedData.data, 
              setFruits, 
              setFlowers, 
              setDecorations, 
              setAnimals, 
              setPlayers,
              setLog);
            break;
          case "delete":
            handleDeletion(receivedData.data, 
              setFruits, 
              setFlowers, 
              setDecorations, 
              setAnimals);
            break;
          default:
            break;
        }
      };
      setLoaded(true);
    }
    }
    loadEventSource();
    }, [loaded]);

    // Receives data from components
    const parentListener = async function(data) {
      try {
        const response = await client.post('/update', data);
        if (response.status === 200) {
          toast.success("Done!", {
            autoClose: 1000,
            pauseOnFocusLoss: false,
            hideProgressBar: false
          });
        }
      } catch (error) {
        if (error.response?.data?.message.includes("You not in the garden")
        || error.response?.data?.message.includes("No such entity with provided ID")) {
          window.location.reload();
          toast.info("There was a communication problem. Please, try again.")
          return;
        } else if (error.status === 401) {
          history.push('/login');
          toast.info("Please, log in.")
          return;
        }
        toast.error(error.response?.data?.message);
      }
    };

    return (
        <>
            <GardenContainer 
            listener={parentListener}
            nickname={nickname}
            fruits={fruits}
            flowers={flowers}
            animals={animals}
            decorations={decorations}
            online={players}
            id={id}
            log={log}
            />
            {<DefaultSpinner hasLoaded={loaded}/>
            }

        </>
    );
};