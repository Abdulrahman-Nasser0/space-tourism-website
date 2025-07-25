import './App.css'
import ExploreBtn from './components/common/ExploreBtn'
import Navbar from './components/layout/Navbar'
import Hero from './components/layout/Hero'


function App() {
  
  return (
    <div
      className="
        flex flex-col 
        min-h-screen bg-black
        bg-[url('/Home.png')] lg:bg-[url('/Home-lg.jpg')]
        bg-cover bg-center bg-no-repeat
      ">

        <Navbar />
        <Hero />
    </div>
  )
}

export default App

/*
function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div>
      <nav>
        <button onClick={() => setActiveSection('home')}>Home</button>
        <button onClick={() => setActiveSection('destination')}>Destination</button>
      </nav>

      <main>
        {activeSection === 'home' && <HomeSection />}
        {activeSection === 'destination' && <DestinationSection />}
      </main>
    </div>
  );
}
*/


// Tailwind's built-in font size utilities
/* 
<p className="text-xs">    Extra small text - 12px      </p>
<p className="text-sm">    Small text - 14px            </p>
<p className="text-base">  Base text - 16px             </p>
<p className="text-lg">    Large text - 18px            </p>
<p className="text-xl">    Extra large text - 20px      </p>
<p className="text-2xl">   2X large text - 24px         </p>
<p className="text-3xl">   3X large text - 30px         </p>
<p className="text-4xl">   4X large text - 36px         </p>
<p className="text-5xl">   5X large text - 48px         </p>
<p className="text-6xl">   6X large text - 60px         </p>
<p className="text-7xl">   7X large text - 72px         </p>
<p className="text-8xl">   8X large text - 96px         </p>
<p className="text-9xl">   9X large text - 128px        </p> 
*/