import React from 'react';

function Point(props){
    
    let descObj = props.pointDesc.find((point)=> point.pointTitle === props.point)
    console.log(descObj)
    return(
        
        <div>
            <div className="point-title">{props.pointTitle}</div>
            {/* <div className="point-desc">{descObj.text}</div>  */}
        </div>
    )
}

export default Point;