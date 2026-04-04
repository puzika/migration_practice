import type { ReactNode } from "react";

type RootLayoutProps = {
  children: ReactNode | ReactNode[],
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        { children }
      </body>
    </html>
  )
}