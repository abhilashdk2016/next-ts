import { FC, ReactNode } from "react"

interface UserProps {
    name: string,
    age: number,
    children: ReactNode
}
const User: FC<UserProps> = ({ name, age, children }) => {
  return (
    <div>User

    <p>{name}</p>
    <p>{age}</p>
    {children}
    </div>
  )
}

export default User