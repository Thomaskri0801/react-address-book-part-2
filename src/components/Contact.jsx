import { Link } from 'react-router-dom';

function Contact(user) {
    return (
        <tr>
            <td>{user.user.firstName}</td>
            <td>{user.user.lastName}</td> 
            <td><button><Link to={`/contact/${user.user.id}`}>View</Link></button></td>
        </tr>
    )
}

export default Contact