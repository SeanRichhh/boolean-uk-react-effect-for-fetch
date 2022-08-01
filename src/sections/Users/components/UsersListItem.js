
function UserListItem({index,users}){
    return(
    <li className="bg-blue" key={index}>
       <img
       src ={``}
       alt={users.title}/>
       <h3>{users.title}</h3>
       <p>Email:{users.email}</p>
    </li>
        )
}


export default UserListItem
