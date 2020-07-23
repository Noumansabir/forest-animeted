import React, { useEffect } from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import './App.css';
import fly from './images/fly.gif';
import birdsit from './images/birdsit.gif';
import man from './images/man.gif';
import ground1 from './images/ground1.jpg';
import cat from './images/cat.gif'

function App() {
 const {ref} = useWebAnimations({
   keyframes:[
    {transform:'translate(0,0)'},
    {transform:'translate(1300px,-150px)'},
   ],
   timing: {
     duration:20000,
     iterations:Infinity,
     playbackRate:-2

   }
 });
 const birdfly =useWebAnimations({
  keyframes:[
    {transform:'translate(0,0)'},
    {transform:'translate(1300px,-200px)'},
   ],
   timing: {
     duration:6000,
     iterations:Infinity,
     playbackRate:-2

   }

 });
 const catwalk =useWebAnimations({
  keyframes:[
    {transform:'translate(0,0)'},
    {transform:'translate(-1050px, 280px)'},
   ],
   timing: {
     duration:15000,
     iterations:Infinity,
     playbackRate:-2

   }

 });
 
 const flyFaster=()=>{
birdfly.getAnimation().playbackRate *=1.1;
console.log(birdfly.getAnimation())
 };
useEffect(()=>{
  document.addEventListener("click",flyFaster)
  setInterval(()=>{
    if(birdfly.getAnimation().playbackRate> .9){
      birdfly.getAnimation().playbackRate*=.9
      catwalk.getAnimation().pause();
  
    }
    else if(birdfly.getAnimation().playbackRate<=.9){
      catwalk.getAnimation().play();
     
    }
  },1000)
});

  
  return (
    <div className="App"> 
   
      <div id='wrapper'>
     
               <div> 
               <img  id="fmily1" src={ground1} alt="" />
               </div>
          <div className='size' >
         
          
          <img src={fly}alt="" ref={birdfly.ref} id="bird" className="bird"/>
               <img src={man} ref={ref} id='fmily' alt="" className="man"/>
               <button className="play"  >play  <img src={birdsit} alt="" id="sit"/></button>
                    
                     <img src={cat} ref={catwalk.ref } alt="" id="cat"/>
                    
             
               
              
          
        </div>

     


    </div>
    </div>
  );
}

export default App;
