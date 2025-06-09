import Container from "./components/Container"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Main from "./components/Main"
import Profile from "./components/Profile"

function App() {

  return (
    <>
      <Container styles={{ display: 'flex', flexDirection: 'column', backgroundColor: 'gray', paddingInline: "2rem", margin: 'auto' }}>
        <Header />
        <Hero />
        <Main />
        <Footer />
      </Container>
    </>
  )
}

export default App
