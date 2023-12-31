import { useContext } from "react"
import { AppContext } from "../contexts/AppContext"

export default function PlacesAutoComplete({placePredictions}){

  const { goToInputText} = useContext(AppContext)

  return(
    <div>
     <ul>
      {
      placePredictions.map((prediction)=>(
                    <li className="resultprediction" key={prediction.id} onClick={()=>{goToInputText(prediction)}}>{prediction.description}</li>
                ))
      }
                  
    </ul>
    </div>
  )
}


