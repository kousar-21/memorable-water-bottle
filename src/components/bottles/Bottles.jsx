import React, { use } from 'react';

const bottles = ({bottlePromise}) => {
    const bottles = use(bottlePromise);
    console.log(bottles)
    return (
        <div>
            
        </div>
    );
};

export default bottles;