import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import FileUploaded from './components/FileUploaded';
import ShowImage from './components/ShowImage';

function App() {
 const [imageList, setImageList] = useState([]);
 const [loading, setLoading] = useState(false)
  return (
    <>
    <ToastContainer />
     <FileUploaded setImageList={setImageList} setLoading={setLoading} />
     <ShowImage imageList={imageList} setImageList={setImageList} loading={loading} />
    </>
  );
}

export default App;
