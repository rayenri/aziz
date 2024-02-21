
import React,{useEffect} from "react";
import { InlineWidget } from "react-calendly";
export default function ContactUs() {
 
//  useEffect(()=>{
//   const head = document.querySelector('head');
//   const script = document.createElement('script');
//   script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
//   head.appendChild(script);
//  },[])
  return (
    <>
      <InlineWidget url="https://calendly.com/azizsaighi0/onboarding" />
      {/* <div><div 
            className="calendly-inline-widget"
            data-url="https://calendly.com/azizsaighi0/onboarding"
            style={{ minWidth: '320px', height: '580px' }} />
        </div> */}
    </>
  );
}
