import Image from 'next/image'
import Link from 'next/link'
import { Footer, Navbar } from '../components'
import EldenBling from "../assets/EldenBling.png"


const IndexPage = () => (
  <div className="bg-zinc-900 h-screen">
    <div className="flex items-center w-screen justify-center pt-4">
      <Image src={EldenBling} layout="intrinsic" width="400" height="60"/>
    </div>
    <div className="flex flex-row mx-48 mt-6 flex flex-col row-span-3">
      <Pics/>
    </div>
    <Footer />
  </div>
)

export const Pics = () => {
  let pictures: string[] = ["1","2","1","1","1","1","1","1","1","1","1","1","1","1"];

  return (
    <div className=''>
      {pictures.map((image) => <Image src="https://picsum.photos/200" layout="intrinsic" width="200" height="200"/>)}
      
    </div>
  )
}

export default IndexPage


