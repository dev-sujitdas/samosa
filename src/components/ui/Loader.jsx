
import React from 'react'
import samosaGif from '/samosa.gif';

const Loader = ({ isLoading }) => {
    return (
        isLoading && <div className="min-h-screen w-screen flex items-center justify-center bg-transparent overflow-hidden">
            <img src={samosaGif} alt="Loading..." className="max-w-[200px] w-full h-auto" />
        </div>
    );
}

export default Loader