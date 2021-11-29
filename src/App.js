import { ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed.jsx'

function App() {
  return (
    <div className="App">
      <ChatEngine 
        height="100vh"
        projectID="b8e59a98-3b68-4520-94e4-f3998846fcd1"
        userName="john"
        userSecret="qwerty"
        renderChatFeed= { (chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage= { () => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </div>
  );
}

export default App;
