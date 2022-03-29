import React, { useEffect, useState } from 'react'

const Friends = () => {
    const [friends, setFriends] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setFriends(data))
    }, [])
    return (
        <div>
            <h1>Hello!! Friends</h1>
            <p>
                {' '}
                <small>
                    {' '}
                    please give me some feedback: {friends.length}
                </small>{' '}
            </p>
        </div>
    )
}

export default Friends
