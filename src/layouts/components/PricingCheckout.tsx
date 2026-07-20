import React, { useState } from 'react';

interface PricingCheckoutProps {
    planTitle: string;
    monthlyPrice: string;
    yearlyPrice: string;
    buttonLabel?: string;
    isFeatured?: boolean;
}

export default function PricingCheckout({
    planTitle,
    monthlyPrice,
    yearlyPrice,
    buttonLabel = 'Get Access',
}: PricingCheckoutProps) {
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleCheckout = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!name || !email) {
            setError('Please enter your name and email.');
            return;
        }

        setLoading(true);
        setError('');

        // Determine interval dynamically directly from the DOM checkbox
        const toggleEl = document.getElementById('pricing-toggle') as HTMLInputElement;
        const isYearly = toggleEl?.checked ?? false;

        const priceToCharge = isYearly ? yearlyPrice : monthlyPrice;
        const intervalToCharge = isYearly ? 'year' : 'month';

        // TODO: send { name, email, planTitle, price: priceToCharge, interval: intervalToCharge }
        // to a checkout backend here (Stripe integration removed)
        void priceToCharge;
        void intervalToCharge;
        setLoading(false);
        setShowModal(false);
    };

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                className="btn btn-primary my-10 block w-full cursor-pointer text-center"
            >
                {buttonLabel}
            </button>

            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
                    <div className="relative w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl dark:bg-dark">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white"
                            aria-label="Close"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                        <h3 className="mb-4 text-h5 font-bold text-text-dark dark:text-text-dark">Unlock {planTitle}</h3>
                        <p className="mb-6 text-sm text-text">
                            Please enter your details below so we can set up your account before payment.
                        </p>

                        <form onSubmit={handleCheckout} className="space-y-4">
                            <div>
                                <label className="mb-1 block text-sm font-medium text-text-dark dark:text-text-dark">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-input w-full rounded-lg border-border bg-transparent text-dark placeholder:text-text-light focus:border-primary focus:ring focus:ring-primary/50 dark:text-text-dark dark:placeholder:text-gray-400"
                                    placeholder="John Doe"
                                    disabled={loading}
                                />
                            </div>
                            <div>
                                <label className="mb-1 block text-sm font-medium text-text-dark dark:text-text-dark">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-input w-full rounded-lg border-border bg-transparent text-dark placeholder:text-text-light focus:border-primary focus:ring focus:ring-primary/50 dark:text-text-dark dark:placeholder:text-gray-400"
                                    placeholder="john@example.com"
                                    disabled={loading}
                                />
                            </div>

                            {error && <p className="mt-2 text-sm text-red-500">{error}</p>}

                            <button
                                type="submit"
                                disabled={loading}
                                className="btn btn-primary mt-6 flex w-full items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                {loading ? (
                                    <svg className="h-5 w-5 animate-spin text-text-dark" fill="none" viewBox="0 0 24 24">
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                ) : (
                                    'Proceed to Payment'
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
