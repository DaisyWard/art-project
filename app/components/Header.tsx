
'use client'

import Link from 'next/link'
import Image from 'next/image'
import searchIcon from '@public/search.svg'
import logo from '@public/logo.svg'

const Navigation = () => {
  return (
    <nav className='flex items-center justify-between space-between w-full'>
      <Link href='/' passHref className='w-32 ml-0'>
        <Image src={logo} className='block' alt='Galerie logo' width='128' height='128' />
      </Link>

      <form
        className='relative'
        onSubmit={(event) => search(event)}
        role='search'
        aria-label='Sitewide'
        id='search'
      >
        <label className='sr-only' htmlFor='search-input'>
          Search
        </label>
        <input
          //ref={inputRef}
          id='search'
          type='text'
          className='h-[50px] w-[300px] p-4 border-2 border-white rounded-sm bg-zinc-200 text-black text-md'
          placeholder='Search here...'
          aria-label='Search all artworks'
          autoComplete='off'
        />
        <button className='absolute right-4 top-2.5 w-6 h-[26px] p-0 border-0 cursor-pointer bg-transparent' type='submit' form='search'>
          <Image src={searchIcon} alt='Search for artworks' />
        </button>
      </form>
    </nav>
  )
}

export default Navigation
