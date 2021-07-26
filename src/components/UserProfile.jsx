import { useParams, Redirect, Link } from 'react-router-dom';

const UserProfile = (props) => {
    const { username } = useParams();
    const { users } = props;
    console.log(users)

    let singleUser = users.find((user => {
        if (user.login === username) {
            return user;
        } else {
            return console.log('username invalid')
        }
    }))

    if (users.length > 0) {
        return (
            <>
                <div className="user-profile">
                    <nav>
                        <Link to="/">Home</Link>
                    </nav>    
                    <h1>{singleUser.name}</h1>
                    <img src={singleUser.avatar_url}/>
                    <p>{singleUser.bio}</p>
                    <p>Public Repos: {singleUser.public_repos}</p>
                    <a href={singleUser.html_url}>
                        <p>Github URL: {singleUser.html_url}</p>
                    </a>    
                </div>
            </>
        );
    } else {
        <Redirect to='/' />
        return null;
    }
    
}

export default UserProfile;