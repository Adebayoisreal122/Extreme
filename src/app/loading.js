"use client";

import { useEffect, useState } from "react";
import "./globals.css"; 

export default function Loading() {

    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 3000);
  
      return () => clearTimeout(timer);
    }, []);
  
    if (!showLoader) return null;
  

    return (
        <div>
<div className= "loader">
  <span></span>
  <p>Loading...</p>
</div>
        </div>
    );
}