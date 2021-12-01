import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed.jsx'
import './App.css';
import LoginForm from './components/LoginForm';

const projectID = "b8e59a98-3b68-4520-94e4-f3998846fcd1";

const App = () => {

  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
      <ChatEngine 
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed= { (chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage= { () => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
  );
};

export default App;
