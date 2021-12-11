import React, { useEffect, useState } from 'react';
import './styles.css';
import client from '../../services/client.js';
import history from '../../services/history.js';
import { toast } from 'material-react-toastify';
import { ImHome } from 'react-icons/im';

const Stats = () => {

    const getDate = () => {
        return new Date().toISOString().substr(0, 10);
    }

    const [loaded, setLoaded] = useState(false);
    const [globalDate, setGlobalDate] = useState(getDate());
    const [action, setAction] = useState("Harvest");
    const [userData, setUserData] = useState([
        "---",
        "---",
        "---",
        "---",
        "---",
        "---",
        "---",
        "---",
        "---",
        "---"
    ]);
    const [globalData, setGlobalData] = useState({
        totalFruitsHarvested: 10,
        totalFlowersPollinated: 5,
        totalGallonsOfWater: 8,
        totalMinutesSatOnBench: 4,
        totalDecorationsCleaned: 3,
        totalAnimalsPetted: 8,
        totalAnimalsFed: 20
    });

    useEffect(() => {
        if (!loaded) {
            openTab(undefined, "Global");
            setLoaded(true);
        }
    }, [loaded]);

    useEffect(() => {
        (async () => {
        try {
            const data = await client.get('/stats/global', {params: {
                 date: globalDate
                }
            });
            setGlobalData(data.data?.stack);
        } catch (error) {
            if (error.response.data.message)
            toast.error("Error fetching data: " + error.response.data.message);
            else
            toast.error("Error fetching data: " + error.message);
        }
        })();
    }, [globalDate]);

    useEffect(() => {
        (async () => {
        try {
            const data = await client.get('/stats/users', {params: {
                 action: action
                }
            });
            setUserData(data.data?.stack);
        } catch (error) {
            if (error.response?.data?.message)
            toast.error("Error fetching data: " + error.response?.data?.message);
            else
            toast.error("Error fetching data: " + error.message);
        }
        })();
    }, [action]);


    const openTab = (e, tabId) => {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
      
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        document.getElementById(tabId).style.display = "flex";
        if (e) {
        e.currentTarget.className += " active";
        } else {
            document.getElementById("mainTab").className += " active";
        }
    }

    const goBack = () => {
        history.push('/');
    }

    return (
        <>
        <ImHome size={70} className="goBackStats" onClick={goBack}/>
        <div className="statsWrapper">
            <div className="statsPanel">

            <div className="tab">
            <button id="mainTab" className="tablinks" onClick={e => openTab(e, "Global")}>Global</button>
            <button className="tablinks" onClick={e => openTab(e, "Users")}>Users</button>
            </div>

            <div id="Global" className="tabcontent active">
            <input type="date" id="date" name="Day"
            value={globalDate}
            min="2021-10-12" onChange={e => setGlobalDate(e.target.value)}/>
            <ul>
                <li>Fruits Harvested:  <span className="cllr">{globalData.totalFruitsHarvested}</span></li>
                <li>Flowers Pollinated:  <span className="cllr">{globalData.totalFlowersPollinated}</span></li>
                <li>Gallons of Water Spent:  <span className="cllr">{globalData.totalGallonsOfWater}</span></li>
                <li>Minutes People Sat on Bench:  <span className="cllr">{globalData.totalMinutesSatOnBench}</span></li>
                <li>Decorations Cleaned:  <span className="cllr">{globalData.totalDecorationsCleaned}</span></li>
                <li>Animals Petted:  <span className="cllr">{globalData.totalAnimalsPetted}</span></li>
                <li>Animals Fed:  <span className="cllr">{globalData.totalAnimalsFed}</span></li>
            </ul>
            </div>
            <div id="Users" className="tabcontent">
            <select id="action" onChange={e => setAction(e.target.value)}>
                <option value="Harvest">Harvest</option>
                <option value="Pollinate">Pollinate</option>
                <option value="Clean">Clean</option>
                <option value="Minutes Sat Down">Minutes Sat Down</option>
                <option value="Pet">Pet</option>
                <option value="Feed">Feed</option>
            </select>
            <ol>
                <li className="title"
                style={{textAlign: 'center:', 
                listStyleType: 'none'}}><h5> {action + ":"} </h5></li>
                <li value="1">{userData[0]}</li>
                {
                    userData.slice(1).map((name) => {
                        return <li>{name}</li>
                    })
                }
            </ol>
            </div>
            </div>
        </div>
        </>
    );
};

export default Stats;