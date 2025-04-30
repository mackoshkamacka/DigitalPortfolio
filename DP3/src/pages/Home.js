import Gallery from '../components/Gallery';

function Home() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-gray-800">MARK EVRO</h1>
        <h2>PERSONAL PROJECTS</h2>
        <h4 className="text-gray-600 mt-4">Showcasing my best projects and skills</h4>
        <div className="mt-12 w-full">
        <Gallery />
      </div>
      </div>
    );
  }
  
  export default Home;
  



