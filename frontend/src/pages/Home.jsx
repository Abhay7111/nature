import Nav from '../components/Nav'
import '../Style/Home/Home.css'

function Home() {
  return (
    <div>
      <Nav/>

      <div className='home_main'>
        <div className="topshow">
          <div className="show">
            <img src="https://cdn.pixabay.com/photo/2022/09/08/05/35/fog-7440132_1280.jpg" alt="Image not found" />
          </div>
            <div className="show_message">
              <span>[ 1 ]</span>
              <p>I'm not great with words. That's why I take photos. Every image here has a story. Someone I met, a place I walked through, a moment I didn't expect but couldn't let pass. This is more than a portfolio. It's what I want to remember, and maybe, what you'll feel something from too.</p>
            </div>
        </div>

        <div className="capture">
          <span>[ ↓ ]</span>
          <span>[ 2 ]</span>
          <h1>Captures</h1>
        </div>
      </div>
    </div>
  )
}

export default Home
