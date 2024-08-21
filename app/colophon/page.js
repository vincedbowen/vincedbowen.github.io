import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Colophon() {
  return (
  <main className='overflow-x-hidden flex flex-col min-h-screen'>
    <Navbar/>
    <h1 className="text-4xl font-bold mb-6 ml-14 mt-4">Colophon</h1>
    <div className="flex flex-col flex-grow bg-gray-100">
      <p className=" ml-14 max-w-5xl">
        This website was designed using <Link href={'https://react.dev/'} className='underline hover:no-underline hover:text-red'>React</Link>, <Link href={'https://v2.tailwindcss.com/docs'} className='underline hover:no-underline hover:text-light-blue'>Tailwind CSS</Link>, and <Link href={'https://nextjs.org/'} className='underline hover:no-underline hover:text-yellow'>Next.js</Link>.
        This is probably (definitely) overkill, but I wanted to gain some more experience with these tools, and create a reusable and beautiful personal portfolio. 
        <br/> <br/>

        I used <Link href={'https://www.npmjs.com/package/typewriter-effect'} className='underline hover:no-underline hover:text-red'>typewriter-effect</Link> and <Link href={'https://www.framer.com/motion/'} className='underline hover:no-underline hover:text-light-blue'>Framer motion</Link> to animate some whimsical components.
        <br/> <br/>

        Recently, my <Link href={'https://kennethbowen.com/'} className='underline hover:no-underline hover:text-yellow'>dad</Link> got me hooked on Swiss design!
        I love the simplicity and visuals of Swiss design, so I tried to incorporate some of those elements.
        The colors used were heavily inspired by one of my favorite albums and album covers, <Link href={'https://www.youtube.com/watch?v=o4qsjmLxhow&list=PLlLGTTlLJXAX-UwWbyH8m6SGSWRntdCf0'} className='underline hover:no-underline hover:text-red'>The New Abnormal</Link> by the Strokes. Give it a listen!!
        <br/><br/>

        Finally, huge thanks to my buddy, <Link href={'https://natew.xyz/'} className='underline hover:no-underline hover:text-light-blue'>Nate</Link>, for the website re-design inspiration.
      </p>
    </div>
    <Footer/>
  </main>
  );
}