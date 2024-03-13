import "../custom.css"

export default function User({user}){
    return (
        <div className="user-container">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <h3>Address</h3>
            <div className="address-container">
                <p>{user.address.street}</p>
                <p>{user.address.city}</p>
                <p>{user.address.zipcode}</p>
            </div>
        </div>
    )
}