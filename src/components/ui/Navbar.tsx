import { manrope } from "@/src/lib/fonts"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <header className="w-full h-24 z-50 sticky top-0 bg-black/30 backdrop-blur-xs">
      <nav className="flex w-full h-full px-1 items-center border-b justify-between border-b-slate-100/20" style={{ lineHeight: "198%" }}>
        <Link href="/" title="Go to homepage">
          <div className="flex items-center gap-x-3">
            <Image src="/grn_logo.png" alt="grn logo" width={60} height={60} />
            <div className={`font-stretch-75% font-extrabold text-2xl tracking-tight uppercase ${manrope.className}`}>
              <p className="mb-0">
                God&apos;s royal
              </p>
              <p className="mt-0 font-extralight text-lg tracking-widest">Nation</p>
            </div>
          </div>
        </Link>
        <div className="h-full flex">
          <ul className="flex h-full [&>li]:justify-center [&>li]:w-24 [&>li]:items-center [&>li]:flex [&>li]:h-full [&>li]:border-r cursor-pointer [&>li>p]:font-medium [&>li]:hover:bg-purple-600 [&>li]:hover:duration-500 transition-all [&>li]:border-slate-100/20">
            <li className="flex h-full items-center border-l border-slate-200 px-5">
              <p>Connect</p>
            </li>
            <li>
              <p>Media</p>
            </li>
            <li>
              <p>Give</p>
            </li>
            <li>
              <p>Contact</p>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
