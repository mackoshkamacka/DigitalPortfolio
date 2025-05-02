import Projects from '../sections/Projects'; 
import About from '../sections/About'; 

function Home() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800">MARK EVRO</h1>
        <div className='content'>
            <About />
        </div>
      </div>
    );
  }
  
export default Home;
  



