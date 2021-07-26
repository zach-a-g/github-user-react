import UserCard from './UserCard'

function UserCardList (props) {
    return (
    <>
    {props.user.map(user => {
        return(
        <UserCard 
        key={user.id}
        user={user}
        />
        )
    })}
    
    </>
    )
}

export default UserCardList;