import { ScrollTrigger,SplitText } from 'gsap/all'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger,SplitText);

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';
import About from './components/about';
import Art from './components/Art';


const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About/>
      <Art/>
    </main>
  )
}

export default App