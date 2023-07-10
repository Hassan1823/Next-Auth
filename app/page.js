
import { getServerSession } from "next-auth"

// local imports
import { authOptions } from "./api/auth/[...nextauth]/route"
// import User from "./components/user"




export default async function Home() {

  const session = await getServerSession(authOptions)

  return (
    <>
      <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>
          Next-Auth & MongoDB
          <br className='max-md:hidden' />
          <span className='orange_gradient text-center'> Auth Assignment</span>
        </h1>
        <p className='desc text-center'>
          Login with email and password or Register your account using your email, username and password.
          All the implementation is based on Next-Auth & MongoDB.
        </p>
        <br />
        {
          session &&
          <>
            <h1>Email :

              {JSON.stringify(session.user.email)}
            </h1>
          </>
        }


        {/* <Feed /> */}
      </section>

    </>
    // <section className="">
    //   <h1>
    //     Home Page !!!
    //   </h1>
    //   <br />
    //   <br />
    //   <br />

    //   <h1>
    //     Server Side Rendered Data :
    //   </h1>
    //   <pre>
    //     {JSON.stringify(session)}
    //   </pre>
    //   <br />
    //   <br />

    //   <h1>Client Side Rendered Data :</h1>
    //   <User />
    // </section>
  )
}
