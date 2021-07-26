import UserCard from './UserCard';
import { Link } from "react-router-dom";

const UserCardList = (props) => {
    const userArray = props.users
    return (
        <>
        {userArray.map(user => {
            return (
                <>
                    <div key={user.id}>
                        <Link to={`user/${user.login}`}>
                            <UserCard user={user} />
                        </Link>
                    </div>
                </>
            )
        })}
           
        </>
    )
}

export default UserCardList;