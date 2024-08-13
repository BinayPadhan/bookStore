import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from '../components/Footer'
import Loading from '../components/Loading';
import axios from 'axios';

function Courses() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/course');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  if (loading) {
    console.log('Loading');
    return <Loading />;
  }
  return (
    <>
        <Navbar/>
        <Course/>
        <Footer/>
    </>
  )
}

export default Courses