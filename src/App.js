import logo from './logo.svg';
import './App.css';
// import image from './image/back.webp';
import { useRef, useState, useEffect } from 'react';
import { uploadFile } from './services/api';


function App() {
  const [result ,setResult] = useState('');
  const [file, setFile] = useState('');
  const fileInputRef = useRef();

  const getImage = async () => {
    if (file) {
      const data = new FormData();
      data.append('name', file.name);
      data.append('file', file);
      let response = await uploadFile(data);
      setResult(response.path);
    }
  };

  useEffect(() => {
    getImage();
  }, [file]);

  const onUploadClick = () => {
    fileInputRef.current.click();
    console.log(file);
  };

  return (
    <div className="container">
      {/* <img src={image} alt="shivam" /> */}
      <div className="wrapper">
        <h1>Simple File Sharing</h1>
        <p>Upload and share the download link.</p>
        <button onClick={() => onUploadClick()}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <div className='linking'>
        <a href={result} target ="_blank">{result}</a>
        </div>
      </div>
    </div>
  );
}

export default App;
 