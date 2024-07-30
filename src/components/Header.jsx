import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='mb-10'>
        <Link>
            <img className='max-w-[150px]' src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="netflix" />
            
        </Link>
    </header>
  )
}

export default Header