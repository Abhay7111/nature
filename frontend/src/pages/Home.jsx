import Nav from "../components/Nav";
import "../Style/Home/Home.css";
import LocomotiveScroll from "locomotive-scroll";
import Star from '../components/Star'

function Home() {
  const scroll = new LocomotiveScroll({});
  return (
    <div>
      <Nav />

      <div className="home_main">
        <div className="topshow">
          <div className="show">
            <img
              src="https://cdn.pixabay.com/photo/2022/09/08/05/35/fog-7440132_1280.jpg"
              alt="Image not found"
            />
          </div>
          <div className="show_message">
            <span>[ 1 ]</span>
            <p>
              I'm not great with words. That's why I take photos. Every image
              here has a story. Someone I met, a place I walked through, a
              moment I didn't expect but couldn't let pass. This is more than a
              portfolio. It's what I want to remember, and maybe, what you'll
              feel something from too.
            </p>
          </div>
        </div>
        <div className="capture">
          <span>[ ↓ ]</span>
          <span>[ 2 ]</span>
          <h1>Captures</h1>
        </div>

        <div className="rotate_star_disk">
          <div className="rotate">
            <Star/>
          </div>
        </div>

        <h2 className="sub_headings">some BEST captured <div className="rotate"><Star/></div> </h2> 

        <div className="quick_gallery">
          <div className="wraper">
            <div className="card">
              <img src="https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367_1280.jpg" alt="image not found" />
              <h3>best sunset</h3>
            </div>
            <div className="card">
              <img src="https://cdn.pixabay.com/photo/2019/07/19/03/30/landscape-4347888_1280.jpg" alt="image not found" />
              <h3>The mounten</h3>
            </div>
            <div className="card">
              <img src="https://cdn.pixabay.com/photo/2024/09/22/23/40/butterfly-9067326_1280.png" alt="image not found" />
              <h3>The butterfly</h3>
            </div>
            <div className="card">
              <img src="https://cdn.pixabay.com/photo/2020/07/14/06/46/natural-5403034_1280.jpg" alt="image not found" />
              <h3>Dry nature</h3>
            </div>
            <div className="card">
              <img src="https://cdn.pixabay.com/photo/2025/04/02/15/40/ant-9509475_1280.jpg" alt="image not found" />
              <h3>The ant</h3>
            </div>
            <div className="card">
              <img src="https://cdn.pixabay.com/photo/2025/12/14/19/59/19-59-09-43_1280.jpg" alt="image not found" />
              <h3>Micro photography</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
