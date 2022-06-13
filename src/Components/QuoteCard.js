import React from 'react';

function QuoteCard(props) {

    const{quote, character, image, characterDirection} = props;

    return (
        <div className={characterDirection}>
            <div className="image">
                <img src={image} alt={character}/>
            </div>

            <div className="description">
                <h2>{character}</h2>
                <p>{quote}</p>
            </div>
        </div>
    );
};

export default QuoteCard;