import { Avatar } from '@material-ui/core';
import React,{useState} from 'react'
import "./ChatScreen.css";




function ChatScreen() {
    const [input, setinput] = useState("");
    const [message, setmessage] = useState([
        {
            name: 'Ellen',
            image: 'https://scontent.fhan2-5.fna.fbcdn.net/v/t1.0-1/p100x100/14054217_1575572632744151_6350193831390840932_n.jpg?_nc_cat=109&ccb=3&_nc_sid=7206a8&_nc_ohc=_eVX0ZSoIQ4AX_fE5EH&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fhan2-5.fna&tp=6&oh=e969ed8b549cc77d77105352b050bb5d&oe=6063C769',
            message: 'Uh xây cả bếp 1',
        },
        {
            name: 'Ellen',
            image: 'https://scontent.fhan2-5.fna.fbcdn.net/v/t1.0-1/p100x100/14054217_1575572632744151_6350193831390840932_n.jpg?_nc_cat=109&ccb=3&_nc_sid=7206a8&_nc_ohc=_eVX0ZSoIQ4AX_fE5EH&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fhan2-5.fna&tp=6&oh=e969ed8b549cc77d77105352b050bb5d&oe=6063C769',
            message: 'Uh xây cả bếp 2',
        },
        {
            name: 'Ellen',
            image: 'https://scontent.fhan2-5.fna.fbcdn.net/v/t1.0-1/p100x100/14054217_1575572632744151_6350193831390840932_n.jpg?_nc_cat=109&ccb=3&_nc_sid=7206a8&_nc_ohc=_eVX0ZSoIQ4AX_fE5EH&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fhan2-5.fna&tp=6&oh=e969ed8b549cc77d77105352b050bb5d&oe=6063C769',
            message: 'Uh xây cả bếp 3',
        },
        {
            message: 'đi chơi game'
        }
        
    ])
    const handleSend= e => {
        e.preventDefault();
        setmessage([...message, { message: input}]);
        setinput('');
    }
    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">YOU MATCH WITH ELLEN ON TODAY</p>
            {message.map((message) => (
             message.name ? (
                <div key = {message.message} className='chatScreen__message'>
                    <Avatar
                    
                        className="chatScreen__image"
                        src={message.image}
                    />
                    <p className="chatScreen__text">{message.message}</p>
                </div>
             ) : (
                <div key = {message.message}  className='chatScreen__message'>
                    <p className="chatScreen__textUser">{message.message}</p>
                </div>
             )  
            
            ))}
            <form className='chatScreen__input'>
                    <input 
                    value={input}
                    onChange={(e) => setinput(e.target.value)}
                    className="chatScreen__inputField"
                    type="text" placeholder="write a message..."/>
                    <button 
                    type="submit" 
                    onClick={handleSend}
                    className="chatScreen__inputButton">SEND</button>
                </form>
        </div>
        
    )
}

export default ChatScreen
