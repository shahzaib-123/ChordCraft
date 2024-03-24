// Home.js
import React from 'react';
import 'animate.css';
import { Link } from 'react-router-dom';
import './Home.css';
import Image from "../components/images/how-it-works.jpg";
import img from "../components/images/rabab_img.jpeg";

function Home() {
  return (

    <>
      <section className='header'>
        <div className='Text '>
          <div className="animated-title">
            <div className="text-top">
              <div>
                <span>ChordCraft</span>
                <span>ChordCraft is an AI-driven Rubab melody 
                  generation system. It has the ability to 
                  generate unlimited unique melodies using 
                  Generative Artificial Intelligence. </span>
              </div>

            </div>
            {/* incorrect button , will add onclick function later */}
            <div className="text-bottom">
              <div className='button'>

                <Link className=' nav-link' to='/generate'> <button class="btn btn-primary" type="submit">GENERATE</button></Link></div>

            </div>
          </div>
        </div>

        <img src={img} alt='' id="main-image" />
      </section>

      <section className='features'>
        <h1 className='heading-features'>Features</h1>
        <div className='cards-container'>
          <div className='maincontainer'>
            <div className='card'>
              <div className='front-card'> <img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExanN6cDJwc3BscTRmeno5NzNycGtlZTc4a3l1NmlsYmJmdXhqNzdjcyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/4xqM9jupQizXw2GxyZ/giphy.gif' className='card-p' alt='img' /> <h3>Generate</h3>
              </div>
              <div className='back-card'> <p> <h4>GENERATE:</h4>
              Generate royalty free music with one click.</p>  </div>
            </div>
          </div>
          <div className='maincontainer'>
            <div className='card'>
              <div className='front-card'><img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGlocDQ3aWJ5dXdwcHNpeHg1ODh3eWtsbzF2eHJrNGNuczhvaXV5dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7EAECqqbOtEgE/giphy.gif' className='card-p' alt='img' /> <h3>Customize</h3> </div>
              <div className='back-card'> <p> <h4>CUSTOMIZE:</h4>
              Customize the length of your generated melody to
              your liking as well as any genre.</p>  </div>
            </div>
          </div>
          <div className='maincontainer'>
            <div className='card'>
              <div className='front-card'><img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHB6czgyN3JhZW9lOXVoZDd0dDR4aXZnb3hoejVvcW5jcGs0d3BibCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/64pRj2UItv4pDgP3a5/giphy.gif' className='card-p' alt='img' /><h3>User Input</h3></div>
              <div className='back-card'> <p> <h4>UESR INPUT:</h4>
              You create your own melody, whatever genre you want
              to listen to, you can generate. <br></br><br></br>
              Just enter in your desired input and let your mind
              create music.</p>  </div>
            </div>
          </div>
          <div className='maincontainer'>
            <div className='card'>
              <div className='front-card'><img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHp4c3gzemlsNGVuNzI3eHBxM3JqaGNydXBtZXppd21leXhpZnZlNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/darrticlcUqBLJ5Fpu/giphy.gif' className='card-p' alt='img' /><h3>Playback</h3></div>
              <div className='back-card'><p> <h4>PLAYBACK:</h4>
              Play your generated melody as many times as you want,
              without every wondering if it will change or break.</p>  </div>
            </div>
          </div>
          <div className='maincontainer'>
            <div className='card'>
              <div className='front-card'><img src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYTN5OGk3OWxrc3J0anFrbHV3czFjNzh3OWhxZ2NiMXVtOWYybTJtMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WV9R2niZMMbcE5a9um/giphy.gif' className='card-p' alt='img' /><h3>Save</h3></div>
              <div className='back-card'><p><h4>SAVE:</h4>
              Easily save your melody with one click downloads.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className='how-it-works'>
        <div className='container-3'>
          <div className="wrapper">
            <p><h1>WHAT IS CHORDCRAFT?</h1>Developed with the vision of democratizing music 
            composition, ChordCraft utilizes cutting-edge AI models to 
            facilitate the creation of melodies. This platform stands 
            out by focusing on the Rubab, offering users a novel means 
            to explore its rich sonic palette through the lens of 
            technological innovation.Whether you are a professional 
            musician seeking inspiration, a student exploring the 
            depths of music theory, or simply an enthusiast eager 
            to create melodies, ChordCraft is your gateway to 
            uncharted musical territories. It eliminates the barriers 
            to music creation, making it accessible to all, regardless 
            of technical skill or musical background.ChordCraft invites 
            you to embark on a musical journey unlike any other. 
            With its intuitive interface, robust AI-driven engine, 
            and commitment to cultural heritage, ChordCraft is poised 
            to redefine the landscape of music composition. Explore 
            the unique melodies of the Rubab, foster your creativity, 
            and contribute to the preservation of musical tradition 
            through the power of innovation.</p>
          </div>
          <div className='wrapper-img'>
            <img src={Image} alt='' />

          </div>

        </div>
      </section>

    </>
  );
}

export default Home;
