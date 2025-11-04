import React from "react";


const Button = ({label,onClick,color}) =>{
    const styles = {
        backgroundColor :"#f2f2f2",
        color:"#333",
        border:"none",
        padding:"10px",
        borderRadius:"5px",
        cursor:"pointer",
        fontSize:"10px"

    };
    return <button style={styles} onClick={onClick} >{label}</button>

}

export default Button;