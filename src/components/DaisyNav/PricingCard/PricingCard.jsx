import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    console.log(pricing);

    const {name, price, description, features} = pricing;
    return (
        <div className='border bg-amber-600 rounded-2xl p-4'>
            <div>
                <h1 className='text-7xl'>{name}</h1>
                <h4 className='text-3xl'>{price}</h4>
            </div>
                
            <div className='bg-amber-400 rounded-2xl p-4 mt-10'>
                <p>{description}</p>
                {
                    features.map((feature, index) => <PricingFeature key={index} feature={feature}></PricingFeature>)
                }
            </div>
        </div>
    );
};

export default PricingCard;