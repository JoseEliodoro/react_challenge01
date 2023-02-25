
import './index.css';

export const Btn = ({ text, handleClick, icon })=>{

    return (
        <>
            <button onClick={handleClick}>{icon}<p>{text}</p></button>
        </>
    );
}