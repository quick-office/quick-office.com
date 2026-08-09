import { buttonVariants } from '@/components/ui/button';
import React, { useState } from 'react';

interface PricingCheckoutProps {
    link: string;
    buttonLabel?: string;
    isFeatured?: boolean;
}

export default function PricingCheckout({ link, buttonLabel = 'Get Access' }: PricingCheckoutProps) {
    const handleClick = () => {
        const toggleEl = document.getElementById('pricing-toggle') as HTMLInputElement;
        const billing = toggleEl?.checked ? 'yearly' : 'monthly';
        window.location.href = `${link}&billing=${billing}`;
    };

    return (
        <button onClick={handleClick} className={buttonVariants({ className: 'my-10 block w-full text-center' })}>
            {buttonLabel}
        </button>
    );
}
