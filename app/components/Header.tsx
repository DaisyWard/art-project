import Link from 'next/link'
import Image from 'next/image'

import logo from '@public/logo.svg'

const Navigation = () => {
  return (
    <nav className='flex items-center justify-between mb-9'>
      <Link href='/' passHref className='w-32 ml-0'>
        <Image src={logo} className='block' alt='Galerie logo' />
      </Link>
    </nav>
  )
}

export default Navigation
