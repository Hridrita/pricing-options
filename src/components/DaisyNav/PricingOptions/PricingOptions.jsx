const PricingOptions = ({pricingPromise}) => {
    const pricingdata = use(pricingPromise);

    return (
        <div className="p-10">
            <h2 className='text-5xl text-center mb-10'>Get Our Membership</h2>
            
            {/* items-stretch নিশ্চিত করে যে সব কার্ডের উচ্চতা সমান হবে */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-items-center'>
                {
                    pricingdata.map(pricing => (
                        <DaisyPricing key={pricing.id} pricing={pricing}></DaisyPricing>
                    ))
                }
            </div>
        </div>
    );
};