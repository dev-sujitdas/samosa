import React, { useEffect } from 'react'

const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div class="min-h-screen mt-10 lg:mt-20 py-12 px-6 sm:px-10 lg:px-20">
  <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 sm:p-12">

    <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
      Terms & Conditions
    </h1>

    
    <section class="mb-10">
      <h2 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
        1. General
      </h2>
      <p class="text-gray-600 mb-4">
        These Terms & Conditions apply to all visitors, customers, event participants, and purchasers at <strong>Dr. & Dr. Samosa</strong>.
      </p>
      <p class="text-gray-600">
        By visiting our premises or using our website, you agree to these terms.
      </p>
    </section>

    
    <section class="mb-10">
      <h2 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
        2. Table Play Fees
      </h2>
      <ul class="list-disc list-inside text-gray-600 space-y-2">
        <li>Standard table pricing applies as displayed in-store or online.</li>
        <li>Fees are charged per person unless otherwise stated.</li>
        <li>Time limits may apply during busy periods.</li>
        <li>We reserve the right to refuse service in cases of inappropriate behavior.</li>
      </ul>
    </section>

    
    <section class="mb-10">
      <h2 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
        3. Retail Purchases
      </h2>
      <ul class="list-disc list-inside text-gray-600 space-y-2 mb-4">
        <li>All prices are in EUR and include VAT unless stated otherwise.</li>
        <li>Returns comply with Dutch consumer law.</li>
        <li>Opened card games, trading card products, and sealed collectibles may not be returnable unless defective.</li>
      </ul>

      <h3 class="font-semibold text-gray-700 mb-2">Online Sales (if applicable)</h3>
      <p class="text-gray-600">
        Customers have a 14-day withdrawal right under EU distance selling law (unless exempted product type).
      </p>
    </section>

    
    <section class="mb-10">
      <h2 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
        4. Events & Organized Play
      </h2>
      <ul class="list-disc list-inside text-gray-600 space-y-2">
        <li>Event registration may require prepayment.</li>
        <li>Cancellation policies will be communicated per event.</li>
        <li>We reserve the right to modify event structure if necessary.</li>
        <li>Participants must follow fair play and respectful conduct rules.</li>
        <li>Disruptive or unsafe behavior may result in removal without refund.</li>
      </ul>
    </section>

    
    <section class="mb-10">
      <h2 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
        5. Code of Conduct
      </h2>
      <p class="text-gray-600 mb-4">
        Dr. & Dr. Samosa is a community space. We expect:
      </p>
      <ul class="list-disc list-inside text-gray-600 space-y-2">
        <li>Respect toward staff and guests</li>
        <li>Inclusive behavior</li>
        <li>No harassment or discrimination</li>
        <li>Careful handling of games and materials</li>
      </ul>
      <p class="text-gray-600 mt-4">
        Failure to comply may result in removal from the premises.
      </p>
    </section>

    
    <section class="mb-10">
      <h2 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
        6. Liability
      </h2>
      <ul class="list-disc list-inside text-gray-600 space-y-2">
        <li>Visitors enter at their own risk.</li>
        <li>We are not liable for lost, stolen, or damaged personal belongings.</li>
        <li>We are not responsible for injuries caused by misuse of equipment or failure to follow instructions.</li>
      </ul>
      <p class="text-gray-600 mt-4">
        Our liability is limited to the maximum extent permitted under Dutch law.
      </p>
    </section>

    
    <section class="mb-10">
      <h2 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
        7. Intellectual Property
      </h2>
      <p class="text-gray-600">
        All website content, branding, logos, and materials are the property of Dr. & Dr. Samosa and may not be used without permission.
      </p>
    </section>

    
    <section class="mb-10">
      <h2 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
        8. Food & Beverages
      </h2>
      <ul class="list-disc list-inside text-gray-600 space-y-2">
        <li>Outside food and drinks may not be permitted unless agreed.</li>
        <li>Customers must inform staff of allergies where relevant.</li>
      </ul>
    </section>

    
    <section class="mb-10">
      <h2 class="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
        9. Governing Law
      </h2>
      <p class="text-gray-600 mb-4">
        These Terms are governed by Dutch law. Disputes will be handled by the competent court in The Netherlands.
      </p>
    </section>

    
    <section class="border-t pt-6 mt-8">
      <h3 class="text-lg font-semibold text-gray-800 mb-3">
        Contact Information
      </h3>
      <p class="text-gray-600">
        <strong>Dr. & Dr. Samosa</strong><br />
        Board games, drinks and Indian snacks<br />
        Grote Gracht 40, 6211 SX, Maastricht, The Netherlands<br />
        Phone: +31 6 27319421<br />
        KVK: 97930504
      </p>
    </section>

  </div>
</div>
  )
}

export default Terms