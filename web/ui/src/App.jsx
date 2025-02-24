import { useState, useEffect } from 'react';
import axios from 'axios';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import Hero from './components/hero';
import Table from './components/table';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [inputKey, setInputKey] = useState(Date.now());

  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchFiles = async () => {
    try {
      const response = await axios.get('/files');
      setFiles(response.data.fileList);
    } catch (error) {
      console.error('error fetching the files : ', error);
    } finally {
      setIsLoading(false);
    }
  };

  // initial files load
  useEffect(() => {
    fetchFiles();
  }, []);

  // debugging files
  useEffect(() => {
    console.log('Files state updated:', files);
  }, [files]); // This will run whenever files state changes

  const onChangeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      alert('please select file !');
      return;
    }

    const formData = new FormData();
    formData.append('file-upload', selectedFile);

    try {
      const response = await axios.postForm('/files', formData, {
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          console.log(`Upload progress: ${percentCompleted}%`);
          console.log(progressEvent.total);
        },
      });

      //reset the form
      setSelectedFile(null);
      setInputKey(Date.now());

      // reload files
      fetchFiles();
    } catch (error) {
      console.error('error uploadinfg file: ', error);
    }
  };
  return (
    <div className="max-w-screen-md max-h-screen">
      <Hero onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} selectedFile={selectedFile} inputKey={inputKey} />
      <Table files={files} isLoading={isLoading} />
    </div>
  );
}

export default App;
