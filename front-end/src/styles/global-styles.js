import { createGlobalStyle } from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'material-react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`

    :root {
    --primary-brown: #4C2500;
    --primary-green: #96CA2D;
    --secondary-brown: #351A00;
    --secondary-green: #689F38;
    --tertiary-green: #3D6718;
    }

    * {
    height: 100%;
    margin: 0;
    padding: 0;
    }

    .Toastify__toast {
        max-height: 25px;
        justify-contents: center;
    }

    .Toastify__toast-body {
        margin-top: 10px;
    }

    .Toastify__toast-container {
        max-height: 30px;
    }

    html, body { 
        height: 100%;
        margin: 0;
        overflow-y: hidden;
    }

    a {
        text-decoration: none;
    }
    
    ul {
        list-style: none;
    }
    
    button {
        cursor: pointer;
        border: 0;
        background: none;
    }



`;