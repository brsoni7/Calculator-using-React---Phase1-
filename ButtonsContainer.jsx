import styles from "./ButtonsContainer.module.css";

const buttonNames = ['C', '*', '/', '7', '8', '9', '4' ,'5', '6', '1', '2', '3','0', '-' , '+', '.' , '='];
const ButtonsContainer = () =>{
    
    return <div className={styles.buttons_container}>
        {buttonNames.map(buttonName => <button className= {styles.button}>{buttonName}</button>)}
        
      </div>

}
export default ButtonsContainer;