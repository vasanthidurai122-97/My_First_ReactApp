import React from "react";

const Footer = (props) =>{
    const styles = {
        footer :{
           position:"fixed",
           bottom:"0",
           left:"0",
           width:"100%",
           backgroundColor :"#9f9a9aff",
           color:"#f9eeeeff",
           padding:"10px",
           textAlign :"Center",
           fontSize:"17px",


        }
    }
    return(
        <>
        <footer style={styles.footer}>
            <p>{props.text}</p>
        </footer>
        </>
    );
};
export default Footer;
