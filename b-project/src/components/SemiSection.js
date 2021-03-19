import React from 'react';
import {Link} from 'react-router-dom';

function SemiSection({data}) {
    return (
        <div>
            <h1>
                <Link to={`/section/${data}`}>
                    {data}
                </Link>
            </h1>
        </div>
    )
}

export default SemiSection
