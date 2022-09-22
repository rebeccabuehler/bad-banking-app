import React from "react";
import {UserContext} from './context';
import Card from './context';

function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState("");
    const ctx = React.useContext(UserContext);

    function validate(field, label) {
        if(!field) {
            setStatus('Error ' + label);
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        return true;
      }
    
      function handleLogin() {
        console.log(email, password);
        if(!validate(email, 'email')) return;
        if(!validate(password, 'password')) return;
        setShow(false);
      }

    return (
        <Card
            bgcolor="primary"
            header="Login"
            status={status}
            body={ show ? (
                <>
                    Email Address
                    <br />
                    <input
                        type="input"
                        className="form-control"
                        id="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                    />
                    <br />
                    Password
                    <br />
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.currentTarget.value)}
                    />
                    <br />
                    <button type="submit" className="btn btn-light" onClick={handleLogin}>
                        Login
                    </button>
                </>
                ) : ( 
                    <>
                    <h5>Success {JSON.stringify(ctx.users.name)}</h5>
                    <a href="/Component/deposit" className="btn btn-light">Deposit Money</a>
                    <a href="/Component/withdraw" className="btn btn-light">Withdraw Money</a>
                    </>
                )}
        />
    );
}
export default Login;