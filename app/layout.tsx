import type { ReactNode } from "react"

type NextRootLayout = {
  children: ReactNode | ReactNode[],
}

export default function NextRootLayout({ children }: NextRootLayout) {
  return (
    <>
      { children }
    </>
  )
}