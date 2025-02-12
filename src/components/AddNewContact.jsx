import { useContext, useState } from "react"
import { DataContext } from "../App"
import { useNavigate } from 'react-router-dom';


function AddNewContact() {
    const dataContext = useContext(DataContext)
    const navigate = useNavigate()
    const [user, setUser] = useState({
        id: dataContext.users.length + 1,
        firstName: "",
        lastName: "",
        street: "",
        city: ""
    })

    const handleInputChange = (event) => {
        const name = event.name
        const inputValue = event.value

        
        if(name == "firstName") {
            setUser({...user, firstName: inputValue})
        } else if(name == "lastName") {
            setUser({...user, lastName: inputValue})
        } else if(name == "street") {
            setUser({...user, street: inputValue})
        } else if(name == "city") {
            setUser({...user, city: inputValue})
        }
    }
    
    
    const handleSubmit = async(event) => {
        event.preventDefault()

        try {
            const response = await fetch("https://boolean-uk-api-server.fly.dev/thomaskri08/contact", {
                method:'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            });

            dataContext.handleNewUser(user)
            
            console.log(response)
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name:</label><br/>
                <input type="text" id="firstName" name="firstName" onChange={(e) => handleInputChange(e.target)}/>
            </div>
            <div>
                <label htmlFor="lastName">Last Name:</label><br/>
                <input type="text" id="lastName" name="lastName" onChange={(e) => handleInputChange(e.target)}/>
            </div>
            <div>
                <label htmlFor="street">Street:</label><br/>
                <input type="text" id="street" name="street" onChange={(e) => handleInputChange(e.target)}/>
            </div>
            <div>
                <label htmlFor="city">City:</label><br/>
                <input type="text" id="city" name="city" onChange={(e) => handleInputChange(e.target)}/>
            </div>
            <div>
                <button type="submit">Create</button>
            </div>
        </form>
    )   
}

export default AddNewContact