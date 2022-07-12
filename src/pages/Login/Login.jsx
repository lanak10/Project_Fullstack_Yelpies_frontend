import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { login } from '../../utilities/users-service'

const Login = () => {
    const [message, setMessage] = useState("Enter your log in credentials")
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const handleChange = e => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value})
    }

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            login(credentials)
        } catch (e) {
            setMessage("The email address or password you entered is incorrect.")
        }
    }

    return (
        <form className="p-3 w-25 mx-auto" onSubmit={handleSubmit}>
            <div className="mb-1">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input
                    type="email"
                    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    name="email"
                    onChange={handleChange}
                    value={credentials.email}
                />
                <div id="emailHelp" className="form-text">{message}</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input
                    type="password"
                    className="form-control" id="exampleInputPassword1"
                    name="password"
                    onChange={handleChange}
                    value={credentials.password}
                />
            </div>
            <button type="submit" className="btn btn-danger">Log In</button>
        </form>
    );
}

export default Login;
