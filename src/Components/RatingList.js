import {useState,useRef,useEffect} from 'react';
import {imageData} from './data';

const RatingList = (props) =>{
    const [sortedRating,setSortedRating] = useState([]);
    const top = useRef();
  
    let counter = 1;
    useEffect(()=>{
      customSorting();
    },[]);
    const customSorting = () =>{
      setSortedRating([...props.rating.sort(compare)]);
    }
    //sort the array of objects  using custom sorting
    function compare(a, b) {
      // Use toUpperCase() to ignore character casing
      const bandA = a.rating;
      const bandB = b.rating;
    
      let comparison = 0;
      if (bandA > bandB) {
        comparison = 1;
      } else if (bandA < bandB) {
        comparison = -1;
      }
      return comparison* -1;
    }
    return (
      <div className="ratingList">
        <div ref={top}></div>
        <div className="top" onClick={()=>top.current.scrollIntoView({behavior: "smooth"})}>Top</div>
        <ul>
        {
          sortedRating.map(rate=>(
            <List key={rate.id} top={top} count={counter++} id={rate.id} rate={rate.rating}/>
          ))
        }
        </ul>
      </div>
    );
  }

  const List = ({rate,id,count}) =>{
    return (
      <li>
        <div className="counter">{count}</div>
        <img src={process.env.PUBLIC_URL+"/images/"+imageData[id].url} alt={rate}/>
        <div className="rating" >
          Rating {rate}
        </div>
      </li>
    );
  }

  export default RatingList;