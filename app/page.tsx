import AdminInfo from "@/components/AdminInfo";
import Button, { primaryButtonProps, secondaryButtonProps } from "@/components/Button";
import ContextTest from "@/components/ContextTest";
import Counter from "@/components/Counter";
import ElementWrapper from "@/components/ElementWrapper";
import Form from "@/components/Form";
import User from "@/components/User";
import UserInfo from "@/components/UserInfo";
import { MyContextProvider } from "@/context/context";

export default function Home() {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h1>Hello Next with TypeScript</h1>
      <User name="Abhilash" age={20}>
        <p>This is a child</p>
      </User>
      <UserInfo username="a" email="b" />
      <AdminInfo username="admin" email="admin@info.com" isAdmin={true} />
      <Counter />
      <Form />
      <ElementWrapper elementType="div" className="container mx-auto" onclick={async () => { 'use server'; console.log('From Parent onclick'); return null;}}>
          <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Work fast from anywhere</h5>
              
          </div>
      </ElementWrapper>
      <Button {...primaryButtonProps} />
      <Button {...secondaryButtonProps} />
      <MyContextProvider>
        <ContextTest />
      </MyContextProvider>
    </section>
  )
}
