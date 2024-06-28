import React, { useState } from 'react';
import './App.css';
import Event from './Event';
function Event1(){
    
    const [isChecked, setIsChecked] = useState(false);
    const a=[
        {
              Artist:"Anuv Jain",
              price:"650",
              date:"20/12/2023",
              Venue:"Jaipur",
              backgroundImage:"images/artist/anu.jpeg",
              state:false
        
        },

       {   
              Artist:"King",
              price:"1300",
              date:"9/12/2023",
              Venue:"Delhi",
              backgroundImage:"images/artist/king.jpeg",
              state:false
        },

       {
              Artist:"Justin biber",
              price:"1450",
              date:"9/11/23",
              Venue:"Goa",
              backgroundImage:"images/artist/justin.jpeg",
              state:false},

        {
             Artist:"Weekend",
             price:"5000",
             date:"31/12/23",
             Venue:"Mumbai",
             backgroundImage:"images/artist/weeek.jpeg",
             state:false},

        {
             Artist:"Coldplay",
             price:"10000",
             date:"06/05/2024",
             Venue:"Goa",
             backgroundImage:"images/artist/cold.jpeg",
             state:false},
        {
             Artist:"Ed Sheeran",
             price:"950",
             date:"21/03/2023",
             Venue:"Delhi",
             backgroundImage:"images/artist/Ed.jpeg",
             state:false},

    ];

    const [endresult, setEndresult] = useState(a);
   
    function Filter(index){
        setIsChecked(!isChecked);

        if(!isChecked){
            const dupcategory=a
            i=0;
            const x=[]; //[{}]
            for (var i=0; i < dupcategory.length; i++) {
                    if(dupcategory[i].price=="<=7000")
                    {
                        x.push(dupcategory[i])
                    }
                    else if(dupcategory[i].price==">=800 && <=1200")
                    {
                        x.push(dupcategory[i])
                    }
                    else if(dupcategory[i].price==">=1200 && <=1500")
                    {
                        x.push(dupcategory[i])
                    }
                    else if(dupcategory[i].price==">=1500")
                    {
                        x.push(dupcategory[i])
                    }
            }

            setEndresult(x);
        }
        else{

            setEndresult(a);
        }

   }

    return( 
        <div>
                
            {
            endresult.map((x,index)=>(
                <Event name={x.Artist} price={x.price} date={x.date} Location={x.Venue} image={x.backgroundImage}/>
              
            ))
            }  
        </div>
    );
}














export default Event1;