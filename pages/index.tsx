import Image from 'next/image'
import Link from 'next/link'
import { DisplayImage, Footer, Navbar } from '../components'
import EldenBling from "../assets/EldenBling.png"


const IndexPage = () => {
  
  return (
    <div className="bg-zinc-900 h-screen">
      <div className="flex items-center w-screen justify-center pt-4">
        <Image src={EldenBling} layout="intrinsic" width="400" height="60" />
      </div>

      <div className="flex mx-48 mt-6 gap-px bg-inherit">
        <DisplayImage image="https://picsum.photos/200/400"/>
        <DisplayImage image="https://picsum.photos/200/800"/>
        <DisplayImage image="https://picsum.photos/400"/>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage


