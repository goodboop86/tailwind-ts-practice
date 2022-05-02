import { useState } from 'react'
import './App.css';
import { Sidebar } from './components/Sidebar';
import { Button } from './components/Button';
import { type } from '@testing-library/user-event/dist/type';


function App() {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);


  return (
    <>
      <Button setIsOpenSideBar={setIsOpenSideBar}>
        <div className="flex justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="md:h-12 md:w-12 h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
          </svg>
        </div>
      </Button>
      <Sidebar isOpenSideBar={isOpenSideBar} setIsOpenSideBar={setIsOpenSideBar} />
    </>
  );
}

export default App;
