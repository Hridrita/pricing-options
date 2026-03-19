import React, { use } from 'react';

const PricingOptions = ({pricingPromise}) => {
    const pricingdata  = use(pricingPromise);
    console.log(pricingdata);
    return (
        <div>
            
        </div>
    );
};

export default PricingOptions;