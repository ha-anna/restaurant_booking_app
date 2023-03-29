"use client"
import Link from 'next/link'
import NavBar from './components/NavBar'
import Header from './components/Header'


export default function Home() {

  return (
      <main className="max-w-screen-2xl m-auto bg-white">
        <NavBar />
        <Header />
       {/* CARDS */}
          <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
            {/* CARD */}
            <div
              className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer"
            >
            <Link href="/restaurant/milestones-grill">
              <img
                src="https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg"
                alt=""
                className="w-full h-36"
              />
              <div className="p-1">
                <h3 className="font-bold text-2xl mb-2">Milestones Grill</h3>
                <div className="flex items-start">
                  <div className="flex mb-2">*****</div>
                  <p className="ml-2">77 reviews</p>
                </div>
                <div className="flex text-reg font-light capitalize">
                  <p className=" mr-3">Mexican</p>
                  <p className="mr-3">$$$$</p>
                  <p>Toronto</p>
                </div>
                <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
              </div>
              </Link>
            </div>
            {/* CARD */}
          </div>
          {/* CARDS */}
        </div>
      </main>
  )
}
