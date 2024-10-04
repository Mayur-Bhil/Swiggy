
import ItemsList from "./ItemsList";

const ResturantCategory = ({data,showItems,setshowidx,dummy}) => {
    // console.log(data);
    const handalClick = () => {
        setshowidx();
    }
  return (
    <div className="acc">
        <div className="flex" >
            <div className="data" >
                <div onClick={handalClick} className="span">{data.title} ({data.itemCards.length})
                <span>⬇️</span>
            </div>
        {showItems && <ItemsList items={data.itemCards} dummy = {dummy}/>}
        </div>

        </div>
    </div>
  )
}

export default ResturantCategory;
