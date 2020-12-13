import React from 'react';

//https://via.placeholder.com/80x50
const Pokemon = ({name, url, img, type}) => {
    return (
        <div className="card mt-2" style={{width: "18rem"}}>
            <img src={img} className="card-img-top" alt={name}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                    the card's content.</p>
                {/*<a href="#" className="btn btn-primary">{type}</a>*/}
            </div>
            <div className="card-footer">
                <a href={`pokemon/${url.match(/(\d+)(?!.*\d)/g)}`} className="btn btn-primary">Details</a>
            </div>
        </div>
    );
};

export default Pokemon;
