import { useState} from 'react';
import './App.css';
import "./components/Footer"
import "./components/Header"
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const [text,setText] = useState("");

  const display = async(title) =>
  {
    try{
      const response = await fetch(`/contents/${title}.txt`);
      const output = await response.text();
      setText(output)
    }
    catch(error)
    {
      console.error("Error:",error)
    }
  };


  return (
      <>
        <Header/>
          <div className='flex min-h-screen max-h-full'>
            <div className='flex flex-col w-1/4 bg-gray-300 items-center'>
              <button type='button' className='bg-red-200 w-fit mt-4 text-xs' onClick={() => display('intro')}>Introduction</button>
              <button type='button' className='bg-red-200 w-fit mt-4 text-xs' onClick={() => display('basicIdeas')}>Basics of Web design</button>
              <button type='button' className='bg-red-200 w-fit mt-4 text-xs' onClick={() => display('howToStart')}>How to start</button>
            </div>

            <div className='flex flex-col w-3/4 bg-gray-700 items-center'>
              <p className='text-white text-base w-3/4 mt-2'>{text}</p>
            </div>
          </div>
        <Footer/>
      </>
  );
}

export default App;