import React from 'react';
function Header({ModeSwitch, country, shortcode}) {
    return (
        <>
        <div style={{display:'flex',
      flexDirection:'column'}}>
        <div className='main-heading'>
         <h1>COVID 19</h1> 
        </div>
        <button className='mode-toggle-btn' onClick={()=>ModeSwitch()}> Change Theme</button>
        </div>
        <div className="img-container">
       {shortcode!==''?<img src={`https://www.countryflags.io/${shortcode}/flat/64.png`} alt='flag'/>:null} 
        </div>
        <div className='State-Heading'>
{country === ''? 'Global':country}
         </div>

        </>
    )
}
export default Header;

