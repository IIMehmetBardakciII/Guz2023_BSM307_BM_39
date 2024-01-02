import type { Metadata } from 'next'

import ToasterContext from './context/ToasterContext'
import AuthContext from './context/AuthContext'

import './globals.css'
import ActiveStatus from './components/ActiveStatus'


export const metadata: Metadata = {
  title: 'Messenger',
  description: 'Messenger-Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthContext>
        <ToasterContext />
        <ActiveStatus />
        {children}
        </AuthContext>
      </body>
    </html>
  )
}
