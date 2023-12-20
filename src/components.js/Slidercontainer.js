import React from 'react'
import styled from 'styled-components'
import Movieslider from './Movieslider'

const Slidercontainer = ({store}) => {

    const getmovieslicer = (start,end) =>{
return store.slice(start,end);
    }
  return (
    <div>
<SLiderWrapperdesing>
<Movieslider data={getmovieslicer(0,10)} title="Only On Netflix" />
<Movieslider data={getmovieslicer(10,20)} title="Trending Now" />
<Movieslider data={getmovieslicer(20,30)} title="Popular Movie" />
<Movieslider data={getmovieslicer(30,40)} title="Romantic Movie" />
<Movieslider data={getmovieslicer(40,50)} title="Epic" />
<Movieslider data={getmovieslicer(50,60)} title="New release" />
<Movieslider data={getmovieslicer(60,70)} title="Actions Movies" />
<Movieslider data={getmovieslicer(70,80)} title="Adventure Movies" />
</SLiderWrapperdesing>
    </div>
  )
}

const SLiderWrapperdesing = styled.div`

`;

export default Slidercontainer