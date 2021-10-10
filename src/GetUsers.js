import { useEffect, useState } from 'react'


const GetUsers = () => {

    const [username, setUsername] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/users'
    })

    return (
        <div>
            
        </div>
    )
}

export default GetUsers
