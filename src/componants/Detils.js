import React from 'react'
import { useParams } from 'react-router-dom';




const Detils =(props)=> {
    const data = useParams()
const  item = data.state

    console.log();
    debugger



  return (
    <div className='detils'>
<img className='image' src='https://t4.ftcdn.net/jpg/00/97/00/09/360_F_97000908_wwH2goIihwrMoeV9QF3BW6HtpsVFaNVM.jpg'/>
<h1>{item.hero_name}</h1>
<p>Hero Name:</p>
<p>Power:</p>
<p>Description:</p>

    </div>
  )
}

export default Detils