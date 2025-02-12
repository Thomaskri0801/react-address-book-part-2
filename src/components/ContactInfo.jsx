import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { DataContext } from "../App"

function ContactInfo() {
    const [user, setUser] = useState(null)
    const { id } = useParams()
    const dataContext = useContext(DataContext)

    useEffect(() => {
        if (dataContext.users && id) {
            setUser(dataContext.users.find((user) => user.id == id));
        }
    }, [user, id])

    if (!user) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <h1>{user.firstName} {user.lastName}</h1>
            <p>{user.street}, {user.city}</p>
        </div>
    )

}

export default ContactInfo