import React from 'react';

function App ()  {
    return(
        <div className='app'>
            <main>
                <div className='search-box'> 
                    <input className='search-bar' type='text' placeholder='Location.....'  />
                </div>
                <div className='location-box'>
                    <div className='location'>
                        New York , us
                    </div>
                    <div>{new Date()}</div>
                </div>
            </main>
        </div>
    )
}

export default App;