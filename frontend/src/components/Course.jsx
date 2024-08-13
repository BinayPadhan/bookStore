import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from 'axios'
function Course() {
    const apiUrl = process.env.REACT_APP_API_URL;

    const [book, setBook] = useState([]);
    useEffect(() => {
        const getBooks = async () => {
            try {
                const res = await axios.get(`${apiUrl}/books`);
                // console.log(res.data);
                setBook(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getBooks();
        
    }, []);
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 bg-darkTheme dark:bg-white'>
            <div className='pt-28 text-center justify-center items-center'>
                <h1 className='text-2xl md:text-4xl text-white dark:text-black'>We're delight to have you <span className='text-green-500'>Here! :)</span></h1>
                <p className='mt-8 text-white dark:text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis voluptates, aspernatur debitis iure vero obcaecati sed ipsa atque repellat harum aut quos neque autem, minima eveniet. Nulla, pariatur! Architecto, eum?</p>
            </div>
            <div className='mt-8 grid grid-cols-1 md:grid-cols-3'>
                {
                    book.map((item)=>(
                        <Cards key={item.id} item={item} />
                    ))
                }
            </div>
        </div>

    </>
  )
}

export default Course