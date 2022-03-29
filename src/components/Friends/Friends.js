import React, { useEffect, useState } from 'react'
import Friend from '../Friend/Friend'

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

            {friends.map((friend) => (
                <Friend key={friend.id} friend={friend} />
            ))}
        </div>
    )
}
git add .
git commit -m ""
git push

export default Friends
