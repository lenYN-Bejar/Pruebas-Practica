import { useNavigate, Link, Outlet } from "react-router-dom"

export default function DasdBoard() {

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/about')
    }

    return(
        <div>
            <Outlet/>

            <button onClick={handleClick}>Logout</button>
            <br></br> 
            <Link to='welcome'>Say Welcome</Link>
            <br></br>
            <Link to='google'>Say Google</Link>

        </div>
    )
}