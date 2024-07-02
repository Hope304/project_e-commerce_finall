import { Head } from "@inertiajs/react";


export default function Home() {
  return (
    <>
      <Head title="Home"/>
      <div className="bg-gray-100 ">
        <div className="relative flex flex-col items-center justify-center" style={{ minHeight: 'calc(100vh - 80px)' }}>
          <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl" >
            Home
          </div>
        </div>
      </div>
    </>
  )
}
