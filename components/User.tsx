import { ReactNode } from "react"

interface UserProps {
    name: string,
    age: number,
    children: ReactNode
}
const User = ({ name, age, children } : UserProps) => {
  return (
    <div>User

    <p>{name}</p>
    <p>{age}</p>
    {children}
    </div>
  )
}

export default User