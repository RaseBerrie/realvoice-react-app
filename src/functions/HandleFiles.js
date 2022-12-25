import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Bona, Fake } from './ShowResult';

import React, { useEffect } from 'react';
import axios from 'axios';

function HandleFiles(formData) {
  const [isBona, bonafide] = React.useState(false);
  const URL = "http://127.0.0.1:8000/uploads/labs"

  /*
  useEffect(() => {
    async function fileJob() {
      const result = await axiosPost();
      if(result === "1") {
        bonafide(true);
      }
    }

    const axiosPost = async () => {
      axios.post('http://127.0.0.1:8000', formData, {
        headers: {
          'Content-Type': 'multipart/form-data' },
        }).then(response => {
          return response
        }).catch(error => {
          console.log('failed', error)
        })
    }
    
    fileJob();
    return 
  }, [formData]);
*/

  return (
    <Router>
      render = {() => isBona ?
        <Navigate to = "/bona" /> : <Navigate to = "/fake" />}
        <Routes>
          <Route exact path="/bona" element={<Bona/>} />
          <Route exact path="/fake" element={<Fake/>} />
        </Routes>
    </Router>
  )
}

export default HandleFiles;