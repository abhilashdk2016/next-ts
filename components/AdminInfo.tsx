import { Info } from './UserInfo';
type AdminInfoProps = Info & {
    isAdmin: boolean
}
const AdminInfo = ({ username, email, isAdmin }: AdminInfoProps) => {
  return (
    <div>
        AdminInfo
        <ul>
            <li>{username}</li>
            <li>{email}</li>
            <li>{isAdmin ? "yes" : "no"}</li>
        </ul>
    </div>
  )
}

export default AdminInfo