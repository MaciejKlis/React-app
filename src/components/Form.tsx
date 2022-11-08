import React from "react";

interface IProps {
    count: number;
}

const List = ({count}: IProps) => {
    return (
        <div>
            siema 
            <br/>
            {count}
        </div>
    )
}

export default List