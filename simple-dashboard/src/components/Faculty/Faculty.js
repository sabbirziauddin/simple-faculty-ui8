import React, { useEffect, useState } from 'react';
import FacultyMember from '../FacultyMember/FacultyMember';
import './Faculty.css'
import Cart from '../Card/Cart';

const Faculty = () => {
    const [members, setMember] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./fake.jSON')
            .then(res => res.json())
            .then(data => setMember(data))

    }, [])
    const handleAddtofaculty = fMember => {
        console.log(fMember);
        const newCart = [...cart, fMember];
        setCart(newCart);


    }

    return (
        <div className='faculty'>

            <div>
                <h3>faculty member:{members.length}</h3>

                {
                    members.map(member => <FacultyMember key={member.name} faculty={member}
                        handleFaculty={handleAddtofaculty}></FacultyMember>)
                }


            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>

            </div>

        </div>


    );
};

export default Faculty;