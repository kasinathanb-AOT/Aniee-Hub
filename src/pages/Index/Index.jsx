import React from 'react'
import "./index.css"
import IndexBanner from '../../components/indexBanner/IndexBanner'
import Header from '../../components/header/header'
function Index() {

  const top = ["Attack on Titan", "My Hero Academia", "Demon Slayer", "Naruto", "One Piece"];

  return (
    <div className='indexPage'>
      <Header/>
      <IndexBanner topSearch={top}/>
    </div>
  )
}

export default Index