import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons'

import './Cart.css'

const Cart = (props) => {
    console.log(props)
    const { cart } = props;
    let total = 0;
    let name = '';
    for (const member of cart) {
        console.log(member);
        total = total + member.salary;
    }
    const element = <FontAwesomeIcon icon={faUser} />;
    return (
        <div className='cart'>
            <div className='cart-info'>
                <h3>Total member :{props.cart.length}</h3>
                <h3>Total :{total}$</h3>
                <ul>

                    {
                        cart.map(mem => <li className='li-style'>{element} {mem.name}</li>)
                    }
                </ul>
            </div>



        </div>
    );
};

export default Cart;