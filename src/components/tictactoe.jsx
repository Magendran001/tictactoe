import { useEffect } from "react";
import { useState } from "react"
import "./tictactoe.css"
function Tictactoe()
{
  let [player,setplayer] = useState({player:true,symbol:"O"});
  let [array,setarray] = useState([[],[],[]]);



  useEffect(()=>{
         
    checkwinner(array,"X")
    checkwinner(array,"O")

  },[array])
  
  const checkwinner =(array,value)=>{
          
            
            for(let j=0;j<array.length;j++)
            {
                let count = 0;
           for(let i=0;i<array.length;i++)
           {
              if(array[j][i]==value)
              {
                  count++;  
              }
               
           }
           if(count==3)
           {
               console.log(value,"value")
               alert(`winner is ${value} player`);
               setarray([[],[],[]])
               return 
           }
          
        }


        for(let i=0;i<array.length;i++)
        {
            let count = 0;
            for(let j=0;j<array.length;j++)
            {
                if(array[j][i]==value)
                {
                    count++;  
                }
                if(count==3)
                {
                    console.log(value,"value")
                    alert(`winner is ${value} player`);
                    setarray([[],[],[]])
                    return 
                }

            }
        }

         let matrix = 0;
        for(let i=0;i<array.length;i++)
           {
                  if(array[i][i]==value)
                  {
                      matrix++;
                  }
           }
           if(matrix==3)
           {
            console.log(value,"value")
            alert(`winner is ${value} player`);
            setarray([[],[],[]])
            return 

           }


           let N= 2;
           let symmetric=0;
            for(let i=0;i<array.length;i++)
              {
                if(array[i][N]==value)
                {
                  symmetric++;
                }
                    
                N--;
              }
           if(symmetric==3)
           {
            console.log(value,"value")
            alert(`winner is ${value} player`);
            setarray([[],[],[]])
            return 
             
           }
  


 
  }
  

    const playerhandle=(x,y)=>{
          
         if(!array[x][y])
         {
              
           
            if(player.player)
            {
                // console.log(player.player)
                
                setplayer({...player,player:(!player.player),symbol:"X"})  ;
                // console.log(player)

                
            }
            else
            {
               
                // console.log(player.player)
               
                setplayer({...player,player:(!player.player),symbol:"O"})  ;
                // console.log(player)
                
            }
            array[x][y]=player.symbol
            setarray([...array])
         }
         else
         {
             alert("already added")
         }
       
    }

    return (<div className="tictactoe_whole">
    <div> <button onClick={()=>{playerhandle(0,0)}}>{array[0][0]}</button></div>
    <div><button onClick={()=>{playerhandle(0,1)}}>{array[0][1]}</button></div>
    <div><button onClick={()=>{playerhandle(0,2)}}>{array[0][2]}</button></div>
    <div><button onClick={()=>{playerhandle(1,0)}}>{array[1][0]}</button></div>
    <div><button onClick={()=>{playerhandle(1,1)}}>{array[1][1]}</button></div>
    <div><button onClick={()=>{playerhandle(1,2)}}>{array[1][2]}</button></div>
    <div><button onClick={()=>{playerhandle(2,0)}}>{array[2][0]}</button></div>
    <div><button onClick={()=>{playerhandle(2,1)}}>{array[2][1]}</button></div>
    <div><button onClick={()=>{playerhandle(2,2)}}>{array[2][2]}</button></div>

    </div>)
}

export default Tictactoe