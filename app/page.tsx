
import Menu from './components/menu'
import About from './components/about'
import Line from './components/line'
import Olympuscard from './components/projects'
import Ms from './components/ms'
import Virtu from './components/virtu'
import Contact from './components/contact'
import Placeholder from './components/placeholder'
import All from './components/all'

/* todos

- DONE: clean up images - proper sizing and stretching/compressing
- DONE: add email button
- DONE: fix alignment of ms and virtu
- DONE: fix alignment of contact section, sp. top sentence
- DONE: double scroll thing with projects
- DONE: when scrolling down, content above should fade out
- add underline to menu bar
- DONE: fix menu bar - add links, lock in place, should only show up when you scroll
- DONE: other elements should also only show up when you scroll
- look into overscrolling
- host

*/

export default function Home() {

  return (
    <main className='flex min-h-screen bg-main flex-col'>
      <Menu />
      <Placeholder />
      <div className='ml-20 mt-20 justify-self-center mb-20'>
        <p className='text-2xl font-khula text-white'>Hi, my name is</p>
        <h1 className='mt-3 text-6xl font-libre text-white'>Mia Scarpati.</h1>
        <div className='w-[30rem] md:w-[35rem]'>
          <p className='mt-3 text-2xl font-khula text-white leading-relaxed'>I’m a computer science & statistics student at Northwestern University passionate about building innovative solutions to challenging problems.</p>
        </div>
      </div>


      <About />


      <div id='projects' className='flex flex-row justify-center mt-20 mb-20'>
        <Olympuscard />
        {/* <Capstone /> */}
      </div>
      <Line />
      <div className='ml-auto mr-auto mb-20 mt-20'>
        <Virtu />
        <Ms />
      </div>
      <Line />
      <Contact />
      {/* <All /> */}


    </main>
  )
}
