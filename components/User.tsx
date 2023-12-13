interface UserProps {
    name: string,
    age: number
}
const User = ({ name, age } : UserProps) => {
  return (
    <div>User

    <p>{name}</p>
    <p>{age}</p>
    </div>
  )
}

export default User