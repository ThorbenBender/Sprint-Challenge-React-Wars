import React from 'react';
import '../App.css';

export default function SkipPage(props){
    const { getCharacters } = props;
    return (
        <div>
            {
                props.previous === null ? 
                null:
                <button className="previous" onClick={(event) => props.skipPage(props.previous)}>Previous</button>
            }
            {
                props.next === null ?
                null:
                <button className="next" onClick={() =>  props.skipPage(props.next)}>Next</button>
            }
        </div>
    )
}