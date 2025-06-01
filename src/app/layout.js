import './global.css'


export default function RootLayout( { children }) {
return (
  <html lang="en" data-toolpad-color-scheme="light">
      <body >
      { children }
      </body>
    </html>
  )
}