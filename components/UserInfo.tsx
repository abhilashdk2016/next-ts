export type Info = {
    username: string;
    email: string;
}

const UserInfo = ({ username, email }: Info ) => {
  return (
    <div>
        UserInfo
        <ul>
            <li>{username}</li>
            <li>{email}</li>
        </ul>
    </div>
    
  )
}

export default UserInfo