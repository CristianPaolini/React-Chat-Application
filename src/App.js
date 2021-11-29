import { ChatEngine } from 'react-chat-engine';
import './App.css';

function App() {
  return (
    <div className="App">
      <ChatEngine 
        height="100vh"
        projectID="b8e59a98-3b68-4520-94e4-f3998846fcd1"
        userName="john"
        userSecret="qwerty"
      />
    </div>
  );
}

export default App;
