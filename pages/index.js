import Link from 'next/link'

export default function Home() {
  return (
   <>
       <h1>Hello, World!</h1> 
       <p>And here is a link to nowhere: <Link
          href="#"
       ><a>Visit me!</a></Link></p>
   </>
  )
}
