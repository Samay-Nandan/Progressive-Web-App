import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
    vertical-align: top;
    border-radius: 5px;
    thead {
        border-bottom: 2px solid black;
        tr {
           background: #fff !important;
        }   
    }
    td {
        padding: 10px;
        border-bottom: 2px solid rgba(0, 0, 0, 0.05);
    }
    tr {
        cursor: pointer;
    }
    tr:nth-child(odd) {
        background: rgba(0, 0, 0, 0.05);
    }
    th {
        padding: 20px;
    }
`;