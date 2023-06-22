import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed'
import LoginForm  from './components/LoginForm'

const projectId ="a65634c0-3bf5-4fde-a0c7-331321485e04";

const App = () =>{
    if(!localStorage.getItem('username')) return <LoginForm />
    return(
        <ChatEngine 
            height = "100vh"
            projectID = {projectId}
            userName = {localStorage.getItem('username')}
            userSecret= {localStorage.getItem('password')} 
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} /> }   
        />
    )
}

export default App