import {imageData} from './data';

const Mash = (props) =>{
    return(
        <div className="screen">
          <div className="imageSquare">
            <img 
              onClick={()=>props.calculateRating(1)} 
              src={process.env.PUBLIC_URL+"/images/"+imageData[props.order[props.state1]].url} 
              alt={imageData[props.order[props.state1]]} />
            <div className="ratingImageSquare">{props.rating[props.order[props.state1]].rating}</div>
          </div>
          <div className="imageSquare">
            <img onClick={()=>props.calculateRating(2)} 
            src={process.env.PUBLIC_URL+"/images/"+imageData[props.order[props.state2]].url} 
            alt={imageData[props.order[props.state2]]}/>
            <div className="ratingImageSquare">{props.rating[props.order[props.state2]].rating}</div>
          </div>
        </div>
    );
  }

  export default Mash;