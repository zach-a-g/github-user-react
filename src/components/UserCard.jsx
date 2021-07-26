function UserCard(props) {
    return (
        <>
                <div className="userDiv">
                    <h5><a href={props.user.html_url}>{props.user.login}</a></h5>
                    <img src={props.user.avatar_url} alt={props.user.login} className="userPhoto"></img>
                    <p>{props.user.bio}</p>
                        <p>Followers: {props.user.followers}  Following: {props.user.following}</p>
                </div>
        </>
    )
}

export default UserCard