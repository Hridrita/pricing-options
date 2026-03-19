import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({pricingPromise}) => {

    const pricingdata  = use(pricingPromise);
    console.log(pricingdata);

    return (
        <div>
            <h2 className='text-5xl'>get Our membership</h2>
            <div className='grid md:grid-cols-3 gap-8'>
                {
                    pricingdata.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;