import React from 'react'

const SideBar = ({data}) => {
    // console.log(data)
  return (
    <div className='side-bar'>
        <h1>Side Bar</h1>
        {data.map((movie, index) => (
            <ul>
                <li key={movie.id}>{index + 1}. {movie.title}</li>
            </ul>
        ))}
    </div>
  )
}

export default SideBar
