import type { ReactNode } from "react"
import { Header } from "../../widgets/header";
import '../styles/global.css';

type RootLayoutProps = {
  children: ReactNode | ReactNode[],
}

export const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <Header />
        { children }
      </body>
    </html>
  )
}