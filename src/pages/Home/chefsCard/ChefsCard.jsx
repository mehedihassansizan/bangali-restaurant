/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefDetail from '../chefDetail/ChefDetail';

const ChefsCard = () => {
    const chefsDetails = useLoaderData()
    console.log(chefsDetails);
    return (
        <div className='grid md:grid-cols-3 mt-8 md:ml-10 mr-8 gap-6'>
            {
                chefsDetails.map(chefDetail => <ChefDetail key={chefDetail} chefDetail={chefDetail}></ChefDetail>)
            }
        </div>
    );
};

export default ChefsCard;