import Image from "next/image"
import Link from "next/link"


const Topbar = () => {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/logo.svg" alt="logo" height={28} width={28} />
        <p className="text-heading3-bold text-light-1">Threads</p>
      </Link>
    </nav>
  )
}

export default Topbar