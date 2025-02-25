"use client"

import { useState } from "react"

import { Footer } from "./Footer"
import { Header } from "./Header"
import { Navigation } from "./Navigation"

type Props = {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="flex flex-col min-h-screen bg-stone-100">
        <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        <main className="pb-5 flex-1">{children}</main>
        <Footer />
      </div>
      <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}
