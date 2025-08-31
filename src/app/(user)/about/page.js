export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
            About MyStore
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Your trusted destination for quality products and exceptional service
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
            Our Story
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Founded in 2024, MyStore has been committed to providing customers with the best shopping experience possible. 
            We believe that everyone deserves access to high-quality products at fair prices.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Our journey began with a simple mission: to create an online marketplace that prioritizes customer satisfaction, 
            product quality, and competitive pricing. Today, we're proud to serve thousands of happy customers across the globe.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            We carefully curate our product selection to ensure that every item meets our high standards for quality and value. 
            From electronics to clothing, home goods to sports equipment, we offer a diverse range of products to meet all your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              To provide customers with exceptional products and service while maintaining the highest standards of quality, 
              integrity, and customer satisfaction.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              To become the leading online marketplace known for quality, reliability, and customer-centric approach, 
              making quality products accessible to everyone.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
            Why Choose MyStore?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Quality Assured</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Every product is carefully selected and quality tested
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Best Prices</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Competitive pricing with regular deals and discounts
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">24/7 Support</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Round-the-clock customer support for all your needs
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
            Contact Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Address</h4>
              <p className="text-gray-600 dark:text-gray-400">
                123 Store Street<br />
                City, State 12345<br />
                United States
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Contact</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Email: info@mystore.com<br />
                Phone: +1 (555) 123-4567<br />
                Hours: Monday - Friday, 9 AM - 6 PM EST
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
