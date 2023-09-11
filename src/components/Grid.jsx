import { finishedItems, visibleItems } from "../data"
import Card from "./Card"
export default function Grid({images}){
    return  (
        <ul className="cards">
            {
                images.map((item)=>(
                    <Card 
                    key={item.id}
                    src={item.url} 
                    isVisible= {visibleItems.includes(item.id)}
                    isFinished= {finishedItems.includes(item.id)}

                    />
                ))
            }

        </ul>
    )
}