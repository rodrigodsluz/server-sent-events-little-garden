import styled from 'styled-components';


export const SFSpinner = styled.div`

    margin: 2rem;

    img {
        display:block;
        margin:auto;
        max-width: 6rem;
        max-height: 6rem;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

`;

