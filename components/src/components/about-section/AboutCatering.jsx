import Card from '../Card'
import Profile from '../Profile'

function AboutCatering() {
    return (
        <>
            <section id='about' style={{backgroundColor: 'lightsalmon'}}>
                <h1>About Catering Section</h1>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem' }}>
                    <Profile
                        src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="about food"
                        width="full"
                        height="400px"
                    />
                    <Card
                        style={{ display: "flex", flexDirection: 'column', alignItems: 'flex-start', }}
                        heading="About Catering"
                        subHeading="Tradition since 1889"
                        highlights="The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use seasonal ingredients."
                        subHighlights="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
                </div>
            </section>
        </>
    )
}

export default AboutCatering