import React, { useEffect, useState } from 'react';
import { getTotal } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';
// import Shoes from '../Shoes/Shoes';
// import { add } from '../../utilities/calculate';
// import Shoes from '../Shoes/Shoes';
// import add from '../../utilities/calculate';


const Cosmetics = () => {
    // const first = 20;
    // const second = 45;
    // const total = add(first, second);

    // const cosmetics = [
    //     {
    //       "id": "63303db25ec9fc2187630483",
    //       "price": 149,
    //       "name": "Pearson Neal"
    //     },
    //     {
    //       "id": "63303db2f9667fdcd9e22430",
    //       "price": 496,
    //       "name": "Tate Harmon"
    //     },
    //     {
    //       "id": "63303db2064a61fe3cf61f96",
    //       "price": 179,
    //       "name": "Alexandra Whitney"
    //     },
    //     {
    //       "id": "63303db27792a1dd592ec4fd",
    //       "price": 455,
    //       "name": "Johanna Nash"
    //     },
    //     {
    //       "id": "63303db2bc3a815b033dd551",
    //       "price": 229,
    //       "name": "Fowler Ayers"
    //     },
    //     {
    //       "id": "63303db293caff1270ccb618",
    //       "price": 123,
    //       "name": "Georgia Gutierrez"
    //     }
    //   ]

    const [cosmetics, setConmetics] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setConmetics(data))
    },[]);

    const total = getTotal(cosmetics);
    
    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            <p>Money needed: {total}</p>
            {
                cosmetics.map(cosmetic => <Cosmetic
                    key={cosmetic.id}
                    cosmetic={cosmetic}
                    ></Cosmetic>)
            }

            
            {/* <Shoes></Shoes> */}
        </div>
    );
};

export default Cosmetics;