import { AiFillStar, AiOutlineStar } from "react-icons/ai" 

type props = {
    rate: number,
    style: any,
    onClick: (i: number) => void
}

const Rating = ({rate, style, onClick}: props) => {
   
    return (
        <div>
            {
                [...Array(5)].map((_,i) => (
                    <span key={i} onClick={() => onClick(i)} style={style}>
                        {rate > i ?(
                            <AiFillStar fontSize="15px" />
                        ) : (
                            <AiOutlineStar fontSize="15px" />
                        )}
                    </span>
                ))
            }
        </div>
    )
}
export default Rating;