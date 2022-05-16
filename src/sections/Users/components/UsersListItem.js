
function UserListItem({index,user}){
    return(
    <li className="bg-blue" key={index}>
       <img
       src ={``}
       alt={user.title}/>
       <h3>{user.title}</h3>
       <p>Email:{user.email}</p>
    </li>
        )
}


export default UserListItem
