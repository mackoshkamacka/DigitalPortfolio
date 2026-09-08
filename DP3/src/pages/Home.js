// import Projects from '../sections/Projects'; 
import About from '../sections/About'; 
import Hero from '../sections/Hero'; 

function Home() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className='content'>
            <Hero />
            <About />
        </div>
      </div>
    );
  }
  
export default Home;
  



