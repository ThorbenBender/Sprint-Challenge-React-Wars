import React from 'react';


export default function Characters(props) {
    return (
                    props.starwarsChars.map((char, idx) => (
                        <div key={idx}>
                            <h2 classNamen="name">Name: {char.name}</h2>
                            <p>Gender: {char.birth_year}</p>
                            <p>Mass: {char.mass}</p>
                            <p>Eye Color: {char.eye_color}</p>
                        </div>
                ))
            );
}