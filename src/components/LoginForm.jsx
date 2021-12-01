import { useState } from "react";
import { axios } from "axios";

const projectID = "b8e59a98-3b68-4520-94e4-f3998846fcd1"

const LoginForm = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {'Project-ID': projectID, 'User-Name': username, 'User-Secret': 
        password};

        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
            setError('');
        } catch (error) {
            setError('Oops, incorrect credentials.');
        }
    }

    return (
        <div className="wrapper">
            <h1 className="title">Chat Application</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={ (e) => setUsername(e.target.value) }
                 className="input" placeholder="Username" required />
                <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) }
                 className="input" placeholder="Password" required />
                 <div align="center">
                    <button className="button">
                        <span>Start Chatting</span>
                    </button>
                 </div>
            </form>
            <h1>{error}</h1>
        </div>
    );
};

export default LoginForm;