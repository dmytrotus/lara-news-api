import Image from 'next/image'

export default function PostTile() {

  return (
    <div className="group cursor-pointer">
        <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800">
            <a className="relative block aspect-video">
            <Image
                src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Vercel Logo"
                className="object-cover transition-all w-full"
                width={500}
                height={500}
                priority
            />
            </a>
        </div>
        <div className="flex gap-3">
            <a href="/category/technology">
                <span className="inline-block text-xs font-medium tracking-wider uppercase mt-5 text-blue-600">Technology
                </span>
            </a>
        </div>
        <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2 dark:text-white">
            <a href="/post/architectural-engineering-wonders-of-the-modern-era-for-your-inspiration">
                <span
                    className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900"
                >
                    Architectural Engineering Wonders of the modern era for your Inspiration
                </span>
            </a>
        </h2>

    </div>

  )
}
