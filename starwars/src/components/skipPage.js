import React from 'react';
import '../App.css';

export default function skipPage(props){
    return (
        <div>
            {
                this.props.page === 1 ? 
                null :
                <button className="previous" onClick={(event) => skipPage(event)}>Previous</button>
            }
            <button className="next" onClick={(event) => props.skipPage(event)}>Next</button>
        </div>
    )
}