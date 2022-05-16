import { useEffect, useState } from "react";

import UsersListItem from "./UsersListItem";

function UsersList() {
  
    const [user, setUser] = useState([])

    // useEffect(() => {
    //     fetch(``)
    //     .then(res => res.json())
    //     .then(interface => setUser(interface))
    // }, [])
  
    return (
        <section>
            <h2>User Section</h2>
            <div className="scroll-container">
            <ul className="art-list">
                {user.map((users, index) =>
                    <UsersListItem 
                        index={index}
                        users={users}
                    />
                )}
            </ul>
            </div>
        </section>
    ) 
}

export default UsersList;
