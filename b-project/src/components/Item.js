import React from 'react';
import {Link} from 'react-router-dom';

function Item({data, type}) {
    return (
        <div>
            <Link to={`/section/${type}/${data}`}>
            {data}
            </Link>
        </div>
    )
}

export default Item