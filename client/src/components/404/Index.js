import "./404.css"
import { Link } from "react-router-dom"

function Index() {
    return (
        <h2 className='alert show'>
            Oops! Page Not Found 😥
            <Link to="/"><p>back to home </p></Link >
        </h2>
    )
}

export default Index
