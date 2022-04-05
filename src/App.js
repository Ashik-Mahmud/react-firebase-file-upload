import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import FileUploaded from './components/FileUploaded';
import ShowImage from './components/ShowImage';

function App() {
 const [imageList, setImageList] = useState([])
  return (
    <>
    <ToastContainer />
     <FileUploaded setImageList={setImageList} />
     <ShowImage imageList={imageList} />
    </>
  );
}

export default App;
