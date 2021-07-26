const UserCard = (props) => {
    //get user object as prop
    const { user } = props;
    
    const redirect = () => {
        console.log(user.login)
    }

    return (
        <div className="container">
            <div className="card" onClick={redirect}>
                <div className="card-header">
                    <img src={user.avatar_url} alt={user.login} className="card-header_avatar" />
                </div>
                <div className="card-content">
                    <h3 className="card-content_username">{user.name}</h3>
                    <p className="card-content_bio">{user.bio}</p>
                </div>
                <div className="card-footer">
                    <div className="card-footer_followers">
                        
                        <div className=".label">Followers: <span>{user.followers}</span> | Following: <span>{user.following}</span> </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard;