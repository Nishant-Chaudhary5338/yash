import React, { useState } from "react";

const Card = ({ title, subtitle, src, isActive, setIsActive }) => { 
    
    return (
        <div className={`w-72 h-72 max-w-sm rounded-lg text-center overflow-hidden h-full shadow-lg ${isActive ? "border-2 border-[#279AEA]" : ""}` }
  
  onClick={() => setIsActive(!isActive)}
 >              
   <div className="flex justify-center">
     <img
            src={src}
            alt="Card Image"
            className={`w-32 ${isActive ? "transform -translate-y-0" : ""}`}
                        
    />
  </div>
   <div className="px-6 ру-4">
     <h2 className="text-lg font-medium text-[#279AEA]">{title}</h2>
                                          
        {isActive && (
            <div className="flex flex-col justify-center items-center mt-4">
                <p className="text-gray-600 text-xs mr-2">{subtitle}</p>
                         
                <img className="mt-3" src ="" alt="Tick" />
            </div> )}
            </div>
            
 </div>
    )
}

export default Card;

