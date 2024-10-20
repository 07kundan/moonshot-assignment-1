import React from 'react'

const Header = ({ setFilter, filter } : { setFilter: (filter: string) => void; filter: string }) => {
  return (
    <nav className='flex md:gap-10 gap-4 bg-background items-center'>
        <span className='text-text'>Filter By: </span>
        <ul className='flex md:gap-10 justify-between gap-4 items-center'>
            <li className={`cursor-pointer ${filter === "unread" && "bg-filterButton border-2 border-border py-1 px-5 rounded-3xl "} text-text`} onClick={() => setFilter("unread")}>Unread</li>
            <li className={`cursor-pointer ${filter === "read" && "bg-filterButton border-2 border-border py-1 px-5 rounded-3xl"} text-text`} onClick={() => setFilter("read")}>Read</li>
            <li className={`cursor-pointer ${filter === "favorites" && "bg-filterButton border-2 border-border py-1 px-5 rounded-3xl"} text-text`} onClick={() => setFilter("favorites")}>Favorites</li>
            <li className={`cursor-pointer ${filter === "all" && "bg-filterButton border-2 border-border py-1 px-5 rounded-3xl"} text-text`} onClick={() => setFilter("all")}>All</li>
        </ul>
    </nav>
  )
}

export default Header
