import React,{useEffect,useState} from 'react'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import './Player.css'
import { useParams } from 'react-router-dom';

function Player() {

  const {id}= useParams();

  const [ apiData, setApiData ] = useState({
    name:'',
    key:'',
    published_at:'',
    typeof:''
  });

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTU4OWE2NTI2M2U5MzMzMTg4ODJiMTI5MDMyMjU5NyIsIm5iZiI6MTc1NTQxOTM0OC4wODcwMDAxLCJzdWIiOiI2OGExOTJkNGFjZTJjN2M0MDYwYmZlNTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.EdgNkkDTLclIF5dVH994BLmi7nzO0VzZlYp4935O_wA'
  }
};

useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
},[]);


  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" />
      <iframe width='90%' height='90%' 
      src={`https://www.youtube.com/embed/${apiData.key}?autoplay=1&mute=0`}
      title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.typeof}</p>
      </div>
    </div>
  )
}

export default Player
