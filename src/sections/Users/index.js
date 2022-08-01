import {useEffect, useState} from 'react'
import UserList from './components/UsersList'

function UsersSection() {
  const [users, setUsers] = useState([])  

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=8")
      .then(resp => resp.json())
      .then((data) => setUsers(data.results))
  }, [])
  
  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className='users-list'>
          {users.map((user,id) => (
            <UserList user={user} key={id}/>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default UsersSection
