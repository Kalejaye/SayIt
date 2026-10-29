import Link from 'next/link'
import React from 'react'

const Navbar = () => {
 const navLinks = [
    { name: "Home", href : "/" },
    {name : "Blog" , href:"/blog" },
    { name :"about",  href:"/about"},
    { name: "Contact", href: "/contact" }
 ]

    return (
      <header className=" py-4 bg-sky-800 text-white sticky">
        <div className="mx-auto max-w-7xl flex  items-center justify-between  gap-48">
          <h4 className='text-2xl font-bold'>
            <Link href="/">SayIt</Link>
          </h4>

      
            <nav className="flex justify-between items-center gap-20 text-lg">
              {navLinks.map((nav) => (
                <Link key={nav.name} href={nav.href}>
                  {nav.name}
                </Link>
              ))}
            </nav>
         
        </div>
      </header>
    );
}

export default Navbar