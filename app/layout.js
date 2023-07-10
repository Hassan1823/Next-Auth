import '@/styles/globals.css'


// local imports
import Provider from './context/AuthContext'
import ToasterContext from './context/ToasterContext'
import Nav from './components/Nav'


export const metadata = {
  title: 'Next Auth',
  description: 'Next Auth Assignment',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className='app'>
          <Provider>
            <Nav />
            <ToasterContext />
            {children}
          </Provider>
        </main>
      </body>
    </html>
  )
}
