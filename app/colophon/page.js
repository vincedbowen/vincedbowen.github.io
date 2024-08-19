import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Colophon() {
  return (
  <main>
    <Navbar/>
    <h1 className="text-4xl font-bold mb-6 ml-8 mt-4">Colophon</h1>
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <p className="text-lg text-center max-w-5xl">
        Hello! I am a senior studying Computer Science at the University of Colorado Boulder.
        I am minoring in Biomedical Engineering and receiving a certificate in Engineering Leadership.
        This last spring, I was admitted into an accelerated Master of Science program in Computer Science and have been very excited to take graduate courses for that.
        Currently, I am extremely passionate about using technology and software to solve challenges in our healthcare & medical system.
        During my free time, I enjoy cycling, getting outdoors, and listening to music!
      </p>
    </div>
  </main>
  );
}