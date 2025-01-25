import { useState, useEffect } from 'react'
import './Loader.css'

export default function Loader({status}) {
    const [isLoaded, setIsLoaded] = useState(status)
    useEffect(() => {
        setIsLoaded(status);
      }, [status]);

    return (
        isLoaded && <div className="loader-container">
            <div className="loader"></div>
        </div>
    )
}
