import Image from 'next/image'

export default function Home() {
  return (
    <main className="main">
      <div className="description"></div>

      <div className="center">
        <Image
          className="logo"
          src="/logo.png"
          alt="Advida Logo"
          width={280}
          height={60}
          priority
        />
      </div>

      <div className="grid"></div>
    </main>
  )
}
