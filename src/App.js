import { useEffect, useState } from 'react';
import Mash from './Components/Mash'
import RatingList from './Components/RatingList'
import './style/style.css';

function App() {
  const [view,setView] = useState(false);
//the order but soon is shuffled based on fisher yates algo immeidatedly after the component has loaded
  const [order,setOrder] = useState(
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 
      28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 
      53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 
      78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,100, 101, 102, 
      103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 
      123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135]
  )
//rating
  const [rating,setRating] = useState(
    [    
      {
        id:0,
          rating:1500
       },
       {
        id:1,
          rating:1500
       },
       {
        id:2,
          rating:1500
       },
       {
        id:3,
          rating:1500
       },
       {
        id:4,
          rating:1500
       },
       {
        id:5,
          rating:1500
       },
       {
        id:6,
          rating:1500
       },
       {
        id:7,
          rating:1500
       },
       {
        id:8,
          rating:1500
       },
       {
        id:9,
          rating:1500
       },
       {
        id:10,
          rating:1500
       },
       {
        id:11,
          rating:1500
       },
       {
        id:12,
          rating:1500
       },
       {
        id:13,
          rating:1500
       },
       {
        id:14,
          rating:1500
       },
       {
        id:15,
          rating:1500
       },
       {
        id:16,
          rating:1500
       },
       {
        id:17,
          rating:1500
       },
       {
        id:18,
          rating:1500
       },
       {
        id:19,
          rating:1500
       },
       {
        id:20,
          rating:1500
       },
       {
        id:21,
          rating:1500
       },
       {
        id:22,
          rating:1500
       },
       {
        id:23,
          rating:1500
       },
       {
        id:24,
          rating:1500
       },
       {
        id:25,
          rating:1500
       },
       {
        id:26,
          rating:1500
       },
       {
        id:27,
          rating:1500
       },
       {
        id:28,
          rating:1500
       },
       {
        id:29,
          rating:1500
       },
       {
        id:30,
          rating:1500
       },
       {
        id:31,
          rating:1500
       },
       {
        id:32,
          rating:1500
       },
       {
        id:33,
          rating:1500
       },
       {
        id:34,
          rating:1500
       },
       {
        id:35,
          rating:1500
       },
       {
        id:36,
          rating:1500
       },
       {
        id:37,
          rating:1500
       },
       {
        id:38,
          rating:1500
       },
       {
        id:39,
          rating:1500
       },
       {
        id:40,
          rating:1500
       },
       {
        id:41,
          rating:1500
       },
       {
        id:42,
          rating:1500
       },
       {
        id:43,
          rating:1500
       },
       {
        id:44,
          rating:1500
       },
       {
        id:45,
          rating:1500
       },
       {
        id:46,
          rating:1500
       },
       {
        id:47,
          rating:1500
       },
       {
        id:48,
          rating:1500
       },
       {
        id:49,
          rating:1500
       },
       {
        id:50,
          rating:1500
       },
       {
        id:51,
          rating:1500
       },
       {
        id:52,
          rating:1500
       },
       {
        id:53,
          rating:1500
       },
       {
        id:54,
          rating:1500
       },
       {
        id:55,
          rating:1500
       },
       {
        id:56,
          rating:1500
       },
       {
        id:57,
          rating:1500
       },
       {
        id:58,
          rating:1500
       },
       {
        id:59,
          rating:1500
       },
       {
        id:60,
          rating:1500
       },
       {
        id:61,
          rating:1500
       },
       {
        id:62,
          rating:1500
       },
       {
        id:63,
          rating:1500
       },
       {
        id:64,
          rating:1500
       },
       {
        id:65,
          rating:1500
       },
       {
        id:66,
          rating:1500
       },
       {
        id:67,
          rating:1500
       },
       {
        id:68,
          rating:1500
       },
       {
        id:69,
          rating:1500
       },
       {
        id:70,
          rating:1500
       },
       {
        id:71,
          rating:1500
       },
       {
        id:72,
          rating:1500
       },
       {
        id:73,
          rating:1500
       },
       {
        id:74,
          rating:1500
       },
       {
        id:75,
          rating:1500
       },
       {
        id:76,
          rating:1500
       },
       {
        id:77,
          rating:1500
       },
       {
        id:78,
          rating:1500
       },
       {
        id:79,
          rating:1500
       },
       {
        id:80,
          rating:1500
       },
       {
        id:81,
          rating:1500
       },
       {
        id:82,
          rating:1500
       },
       {
        id:83,
          rating:1500
       },
       {
        id:84,
          rating:1500
       },
       {
        id:85,
          rating:1500
       },
       {
        id:86,
          rating:1500
       },
       {
        id:87,
          rating:1500
       },
       {
        id:88,
          rating:1500
       },
       {
        id:89,
          rating:1500
       },
       {
        id:90,
          rating:1500
       },
       {
        id:91,
          rating:1500
       },
       {
        id:92,
          rating:1500
       },
       {
        id:93,
          rating:1500
       },
       {
        id:94,
          rating:1500
       },
       {
        id:95,
          rating:1500
       },
       {
        id:96,
          rating:1500
       },
       {
        id:97,
          rating:1500
       },
       {
        id:98,
          rating:1500
       },
       {
        id:99,
          rating:1500
       },
       {
        id:100,
          rating:1500
       },
       {
        id:101,
          rating:1500
       },
       {
        id:102,
          rating:1500
       },
       {
        id:103,
          rating:1500
       },
       {
        id:104,
          rating:1500
       },
       {
        id:105,
          rating:1500
       },
       {
        id:106,
          rating:1500
       },
       {
        id:107,
          rating:1500
       },
       {
        id:108,
          rating:1500
       },
       {
        id:109,
          rating:1500
       },
       {
        id:110,
          rating:1500
       },
       {
        id:111,
          rating:1500
       },
       {
        id:112,
          rating:1500
       },
       {
        id:113,
          rating:1500
       },
       {
        id:114,
          rating:1500
       },
       {
        id:115,
          rating:1500
       },
       {
        id:116,
          rating:1500
       },
       {
        id:117,
          rating:1500
       },
       {
        id:118,
          rating:1500
       },
       {
        id:119,
          rating:1500
       },
       {
        id:120,
          rating:1500
       },
       {
        id:121,
          rating:1500
       },
       {
        id:122,
          rating:1500
       },
       {
        id:123,
          rating:1500
       },
       {
        id:124,
          rating:1500
       },
       {
        id:125,
          rating:1500
       },
       {
        id:126,
          rating:1500
       },
       {
        id:127,
          rating:1500
       },
       {
        id:128,
          rating:1500
       },
       {
        id:129,
          rating:1500
       },
       {
        id:130,
          rating:1500
       },
       {
        id:131,
          rating:1500
       },
       {
        id:132,
          rating:1500
       },
       {
        id:133,
          rating:1500
       },
       {
        id:134,
          rating:1500
       },
       {
        id:135,
          rating:1500
       },       
    ]
  );
  //constant k factor in elo rating
  const k = 32;
  //left side state
  const [state1,setState1] = useState(0);
  //right side state
  const [state2,setState2] = useState(1);

  //shuffle the order in fisher yates algorithm
  const shuffleNumbers = () =>{
      const tempOrder = [...order]; 
      let n = tempOrder.length;
      //fisher yates algorithm
      for(let i=n-1;i>0;i--){
        const j = Math.round(Math.random()*(i+1));
        const temp = tempOrder[i];
        tempOrder[i] = tempOrder[j];
        tempOrder[j] = temp;
      }
      setOrder([...tempOrder]);
  }
  const probability = (r1,r2) =>{
    return 1/(1+Math.pow(10,(r1-r2)/400));
  }
  const calculateRating = (winner)=>{
    let tempRating = [...rating];
    let max = Math.max(state1,state2);
    let p1Rating = rating[order[state1]].rating;
    let p2Rating = rating[order[state2]].rating;
    var pa = probability(p2Rating,p1Rating);
    var pb = probability(p1Rating,p2Rating);

    //check if the comparision has been finished
    if(max===135){
      setView(true);
    }
    
    if(winner===1){
        let r1 = Math.floor(p1Rating+k*(1-pa));
        let r2 = Math.floor(p2Rating+k*(0-pb));
        tempRating[order[state1]].rating = r1;
        tempRating[order[state2]].rating = r2;
        setState2(max+1);

    }else if(winner===2){
      let r1 = Math.floor(p1Rating+k*(0-pa));
      let r2 = Math.floor(p2Rating+k*(1-pb));
      tempRating[order[state1]].rating = r1;
      tempRating[order[state2]].rating = r2;
      setState1(max+1);
    }
    setRating([...tempRating]);
  }

  useEffect(()=>{
    shuffleNumbers();
  },[])


  
  return (
      <div className="Main"> 
        
        <div className="view">
          <button type="button" onClick={()=>setView(prev=>!prev)} className="glow-on-hover">{!view?"See Rating >":"Go Mash >"}</button>
        </div>
        
        {
          view?
          <RatingList 
            rating={rating} 
            order={order}
          />:
          <Mash 
            order={order}
            state1={state1}
            state2={state2}
            calculateRating={calculateRating}
            rating={rating}
          />
        }
         
      </div>
  );
}

export default App;
