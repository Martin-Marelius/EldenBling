import Link from 'next/link'
import { Footer, Navbar } from '../components'

const IndexPage = () => (
  <div className="bg-zinc-900 h-screen">
    <Navbar />
    <h1 className="text-white text-4xl text-center pt-4">Elden Bling</h1>
    <Footer />
  </div>
)

export default IndexPage
