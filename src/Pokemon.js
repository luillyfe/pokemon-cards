import React, {useState, useMemo} from 'react';

// https://via.placeholder.com/80x50
const Pokemon = ({name, url, sprites, type}) => {
    // Get an new Iterator when the sprites Obj changes.
    const iterator = useMemo(() => getIterableFrom(sprites), [sprites])
    const [src, setSrc] = useState(getDefaultSprite(sprites))

    function handleClick() {
        const newSrc = iterator.next().value
        setSrc(newSrc)
    }

    return (
        <div className="card mt-2" style={{width: "18rem"}}>
            <img src={src} className="card-img-top" alt={name} onClick={handleClick}/>
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

function getIterableFrom(sprites) {
    sprites[Symbol.iterator] = function () {
        const context = this
        let index = 0, value = "";
        return {
            next() {
                // Keep looking until it gets a valid Img
                ({value, index} = getValidSpriteAndNextIndex(context, index))

                return {
                    value,
                    done: false
                }
            }
        }
    }

    return sprites[Symbol.iterator]()
}

function getValidSpriteAndNextIndex(context, index) {
    const keys = Object.keys(context)

    let newIndex = index;
    let sprite = context[keys[newIndex++]]

    while (typeof sprite !== "string") {
        sprite = context[keys[newIndex++]]

        if (newIndex >= keys.length) newIndex = 0
    }

    return {value: sprite, index: newIndex}
}

function getDefaultSprite(sprites) {
    return sprites && sprites.front_default ?
        sprites.front_default :
        "https://via.placeholder.com/80x50"
}

export default Pokemon;
