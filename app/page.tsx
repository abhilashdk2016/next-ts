import AdminInfo from "@/components/AdminInfo";
import User from "@/components/User";
import UserInfo from "@/components/UserInfo";

export default function Home() {
  return (
    <section>
      <h1>Hello Next with TypeScript</h1>
      <User name="Abhilash" age={20}>
        <p>This is a child</p>
      </User>
      <UserInfo username="a" email="b" />
      <AdminInfo username="admin" email="admin@info.com" isAdmin={true} />
    </section>
  )
}
