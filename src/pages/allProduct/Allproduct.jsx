import React from 'react'
import LeftSide from '../../components/allProducts/left/leftSide'
import RightSide from '../../components/allProducts/right/RightSide'

const Allproduct = () => {
  return (
    <div>
      <div className='flex max-[638px]:grid'>
          <div>
            <LeftSide/>
          </div>
          <div>
            <RightSide/>
          </div>
      </div>
    </div>
  )
}

export default Allproduct