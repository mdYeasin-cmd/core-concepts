import React from 'react';
import { add, multiple } from '../../utilities/calculate';

const Shoes = () => {
    const first = 13;
    const second = 2;
    const total = multiple(first, second);
    const sum = add(first, second);
    return (
        <div>
            <h1>This is shoes compo</h1>
            <p>Total: {total}</p>
            <p>Sum: {sum}</p>
        </div>
    );
};

export default Shoes;