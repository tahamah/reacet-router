import React from 'react'

const Friend = ({ friend }) => {
    const { name, username, id } = friend
    return (
        <div>
            <h2>Name: {name}</h2>
            <button>
                {username} id: {id}
            </button>
        </div>
    )
}

export default Friend
