import React, { useEffect } from 'react'

const Privacy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div class="min-h-screen mt-10 lg:mt-20 py-12 px-6 sm:px-10 lg:px-20">
            <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 sm:p-12">

                <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                    Privacy Policy
                </h1>


                <section class="mb-10">
                    <h2 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                        1. Who We Are
                    </h2>
                    <p class="text-gray-600 mb-4">
                        <strong>Dr. & Dr. Samosa</strong> is a boardgame café and retail store located in Maastricht, The Netherlands.
                    </p>
                    <p class="text-gray-600 mb-4">
                        We provide boardgame retail, table play, events, hobby gatherings, and light refreshments.
                    </p>
                    <p class="text-gray-600">
                        If you have questions about this Privacy Policy, you can contact us at:
                    </p>
                    <ul class="mt-3 text-gray-600 space-y-1">
                        <li><strong>Email:</strong> ndn.foods.maastricht@gmail.com</li>
                        <li><strong>KVK:</strong> 97930504</li>
                        <li><strong>VAT (BTW):</strong> 97930504</li>
                    </ul>
                </section>


                <section class="mb-10">
                    <h2 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                        2. What Data We Collect
                    </h2>

                    <div class="space-y-6 text-gray-600">

                        <div>
                            <h3 class="font-semibold text-gray-700 mb-2">a) When you contact us</h3>
                            <ul class="list-disc list-inside space-y-1">
                                <li>Name</li>
                                <li>Email address</li>
                                <li>Phone number (if provided)</li>
                                <li>Message content</li>
                            </ul>
                        </div>

                        <div>
                            <h3 class="font-semibold text-gray-700 mb-2">b) When you book tables or events</h3>
                            <ul class="list-disc list-inside space-y-1">
                                <li>Name</li>
                                <li>Email</li>
                                <li>Number of guests</li>
                            </ul>
                        </div>

                        <div>
                            <h3 class="font-semibold text-gray-700 mb-2">c) During events or organized play</h3>
                            <ul class="list-disc list-inside space-y-1">
                                <li>Name</li>
                                <li>Contact details</li>
                                <li>Game-related identifiers (e.g., tournament ID if applicable)</li>
                            </ul>
                        </div>

                        <div>
                            <h3 class="font-semibold text-gray-700 mb-2">d) Website usage data</h3>
                            <ul class="list-disc list-inside space-y-1">
                                <li>IP address</li>
                                <li>Browser type</li>
                                <li>Cookies</li>
                                <li>Analytics data</li>
                            </ul>
                        </div>

                    </div>
                </section>


                <section class="mb-10">
                    <h2 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                        3. Why We Collect Your Data
                    </h2>
                    <ul class="list-disc list-inside text-gray-600 space-y-2">
                        <li>Processing bookings and reservations</li>
                        <li>Managing purchases and payments</li>
                        <li>Organizing events and tournaments</li>
                        <li>Providing customer support</li>
                        <li>Improving our website and services</li>
                        <li>Complying with legal obligations</li>
                    </ul>
                </section>


                <section class="mb-10">
                    <h2 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                        4. Payment Processing
                    </h2>
                    <p class="text-gray-600 mb-4">
                        Payments may be processed through third-party providers (e.g., card terminals or online payment processors).
                    </p>
                    <p class="text-gray-600">
                        We do not store full credit card details.
                    </p>
                </section>


                <section class="mb-10">
                    <h2 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                        5. Cookies
                    </h2>
                    <ul class="list-disc list-inside text-gray-600 space-y-2 mb-4">
                        <li>Improve functionality</li>
                        <li>Analyze traffic</li>
                        <li>Remember preferences</li>
                    </ul>
                    <p class="text-gray-600 mb-2">
                        You can disable cookies in your browser settings.
                    </p>
                    <p class="text-gray-600">
                        If required by law, we use a cookie consent banner.
                    </p>
                </section>


                <section class="mb-10">
                    <h2 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                        6. Data Retention
                    </h2>
                    <p class="text-gray-600">
                        We keep personal data only as long as necessary for fulfilling services and complying with legal accounting requirements.
                    </p>
                </section>


                <section class="mb-10">
                    <h2 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                        7. Sharing Data
                    </h2>
                    <p class="text-gray-600">
                        We do not sell your data.
                    </p>
                </section>


                <section class="mb-10">
                    <h2 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                        8. Security
                    </h2>
                    <p class="text-gray-600">
                        We take appropriate technical and organizational measures to protect your data.
                    </p>
                </section>


                <section>
                    <h2 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
                        9. Changes to This Policy
                    </h2>
                    <p class="text-gray-600">
                        We may update this Privacy Policy. The latest version will always be available on our website.
                    </p>
                    <p>
                        saMOSA <br />
                        Board games, drinks and Indian snacks
                        Grote Gracht 40, 6211 SX, Maastricht, <br />
                        The Netherlands <br />
                        +31627319421 <br />
                        KVK 97930504
                    </p>
                </section>

            </div>
        </div>
    )
}

export default Privacy