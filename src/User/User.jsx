import "../custom.css"

export default function User({user}){
    return (
        <div className="user-container">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    )
}