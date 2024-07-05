import React from 'react'

import img1 from "./assets/Flag_of_Peoples_Republic_of_China (1).svg"
import img2 from "./assets/Flag_of_Brazil.svg"

const Footer = () => {
  return (
    <>
        <footer className='footer'>
          <p>PM4NGOs is a nonprofit organization, exempt from tax under IRC 501(c)(3), and organized under the laws of the Commonwealth of Virginia as a mutual benefit corporation.</p> 
      </footer>
      <div className='flag-flex'>
        <div className='flex'>
            <img src={img1} alt="" />
            <h6>简体中文 (Chinese (Simplified))</h6>
        </div>
        <div className='flex'>
            <img src={img2} alt="" />
            <h6>English</h6>
        </div>
        <div className='flex'>
            <img src={img1} alt="" />
            <h6>Portugese</h6>
        </div>
      </div>
    </>
  )
}

export default Footer