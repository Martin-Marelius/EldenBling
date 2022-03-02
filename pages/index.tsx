import Image from 'next/image'
import Link from 'next/link'
import { DisplayImage, Footer, Navbar } from '../components'
import EldenBling from "../assets/EldenBling.png"
import { photos } from '../utils/data'
import { useEffect, useState } from 'react'


const IndexPage = () => {

  const [images, setImages] = useState([])

  useEffect(() => {
    fetch('https://picsum.photos/v2/list')
      .then(res => res.json())
      .then((out) => {
        setImages(out)
      })
      .catch(err => {
        console.log(err)
      });

  })

  return (
    <div className="bg-zinc-900 h-screen">
      <div className="flex items-center w-screen justify-center pt-4">
        <Image src={EldenBling} layout="intrinsic" width="400" height="60" />
      </div>
      <div className="mt-12 bg-inherit">
        <div className="flex flex-wrap place-content-center gap-x-px bg-inherit md:mx-24 ">
          {images.map((data) => <DisplayImage data={data} />)}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage


