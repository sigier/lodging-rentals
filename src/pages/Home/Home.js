import React from 'react';
import './Home.css';
import SearchBox from '../SearchBox/SearchBox';

const Home = () => (
   
    <div className='container-fluid'>
    <div className='row'>
        <div className='home col s12'>
            <div className='upper-fold'>
               <SearchBox/>
            </div>

        </div>
    </div>

    </div>
    
)  



export default Home;