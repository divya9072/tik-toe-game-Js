import React from "react";
import './styles.css'

const styles={
    background:'rgb(135, 192, 49)',
    border:'2px solid darkgreen',
    fontSize:'30px',
    fontWeight:'800',
    cursor:'pointer',
    outline:'none'
};
const Square=({value,onClick})=>(
     
    <button style={styles} onClick={onClick}>
        {value}
        </button>
);

export default Square;