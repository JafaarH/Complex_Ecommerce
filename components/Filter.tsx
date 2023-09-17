import  Form  from "react-bootstrap/Form";
import Rating from "./Rating";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import {Cart} from "../Context/Context"

const Filter = () => {
const {sort, productDispatch, byRate} = useContext(Cart)

    return (
        <div className="filters">
            <h4 className="title">Filters</h4>
            <span>
             <Form.Check
             inline
            type="radio"
            label="Ascending"
            id={`inline-1`}
            name="group1"
            onChange={() => productDispatch({
                type: "SORT_BY_PRICE",
                payload: "lowToHigh"  
            })}
            checked={sort === "lowToHigh" ? true : false}
          />
          </span>
          <span>
           <Form.Check
           inline
            type="radio"
            name="group1"
            label="Descending" 
            id={`inline-2`}
            onChange={()=> productDispatch({
                type:"SORT_BY_PRICE",
                payload: "highToLow"
            })}
            checked={sort === "highToLow" ?true :false}
          />
          </span>
           <span className="rate">
            <label style={{paddingRight: 10}}>Rating:</label>
            <Rating rate={byRate} style={{cursor: "pointer"}} onClick={(i) =>productDispatch({
                type: "FILTER_BY_RATING",
                payload: i + 1
            }) } />
           </span>
           <Button variant="light" onClick={() => productDispatch({
            type: "BUTTON",
            payload: {}
            })
            }>
                Clear Filters
            </Button>
        </div>
    )
}
export default Filter;