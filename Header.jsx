import React from "react";

const Header = (props) =>{
    return(
        <>
        <header style={styles.header}>
          <h1>{props.title}</h1>
        </header>
        </>
    );
};
const styles = {
    header:{
        position:"fixed",
        top:"0",
        left:"0",
        backgroundColor:"#91ef48ff",
        color:"#fff",
        height:"70px",
        width:"100%",
        fontFamily: "Sans-Serif",
        padding:"1px",
        zIndex :"1000"
        

    


    }

}
export default Header;