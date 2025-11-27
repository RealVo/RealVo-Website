import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustedBy from './components/TrustedBy';
import WhatYouCanAchieve from './components/WhatYouCanAchieve';
import HowItWorks from './components/HowItWorks';
import CaptureOptions from './components/CaptureOptions';
import VBPlatform from './components/VBPlatform';
import Industries from './components/Industries';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Button from './components/Button';
import Section from './components/Section';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white transition-colors duration-300">
      <Header />

      <main className="flex-grow">
        <Hero />
        <TrustedBy />
        <WhatYouCanAchieve />
        <HowItWorks />
        <CaptureOptions />
        <VBPlatform />
        <Industries />
        <Pricing />

        {/* Contact / Final CTA */}
        <Section
          id="contact"
          background="white"
          padding="lg"
          className="border-t border-gray-100"
        >
          <div className="grid gap-10 lg:gap-16 md:grid-cols-2 items-start">
            {/* Left: Heading & copy + Schedule Demo button */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-realvo-charcoal tracking-tight">
                Ready to hear real voices?
              </h2>
              <p className="text-lg text-gray-600">
                Tell us a bit about your organization and what you’re hoping to
                achieve. We’ll follow up with ideas, pricing, and next steps.
              </p>

              <div className="space-y-3">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (!el) return;
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                >
                  Schedule a Demo
                </Button>
                <p className="text-sm text-gray-500">
                  We typically respond within 1–2 business days.
                </p>
              </div>
            </div>

            {/* Right: Contact form */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                className="space-y-4"
              >
                {/* Netlify hidden form-name field (harmless even if you don’t use Netlify Forms) */}
                <input type="hidden" name="form-name" value="contact" />

                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    className="w-full rounded-lg border-gray-300 focus:border-realvo-blue focus:ring-realvo-blue text-sm sm:text-base"
                    placeholder="Jane Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg border-gray-300 focus:border-realvo-blue focus:ring-realvo-blue text-sm sm:text-base"
                    placeholder="you@company.com"
                  />
                </div>

                {/* Country and Phone on one row (on larger screens) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Country */}
                  <div>
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Country<span className="text-red-500">*</span>
                    </label>
                    <select
                      id="country"
                      name="country"
                      required
                      className="w-full rounded-lg border-gray-300 focus:border-realvo-blue focus:ring-realvo-blue text-sm sm:text-base bg-white"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select your country
                      </option>
                      <option value="Afghanistan">Afghanistan</option>
                      <option value="Albania">Albania</option>
                      <option value="Algeria">Algeria</option>
                      <option value="Andorra">Andorra</option>
                      <option value="Angola">Angola</option>
                      <option value="Argentina">Argentina</option>
                      <option value="Armenia">Armenia</option>
                      <option value="Australia">Australia</option>
                      <option value="Austria">Austria</option>
                      <option value="Azerbaijan">Azerbaijan</option>
                      <option value="Bahamas">Bahamas</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Barbados">Barbados</option>
                      <option value="Belarus">Belarus</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Belize">Belize</option>
                      <option value="Benin">Benin</option>
                      <option value="Bermuda">Bermuda</option>
                      <option value="Bhutan">Bhutan</option>
                      <option value="Bolivia">Bolivia</option>
                      <option value="Bosnia and Herzegovina">
                        Bosnia and Herzegovina
                      </option>
                      <option value="Botswana">Botswana</option>
                      <option value="Brazil">Brazil</option>
                      <option value="Brunei">Brunei</option>
                      <option value="Bulgaria">Bulgaria</option>
                      <option value="Burkina Faso">Burkina Faso</option>
                      <option value="Burundi">Burundi</option>
                      <option value="Cambodia">Cambodia</option>
                      <option value="Cameroon">Cameroon</option>
                      <option value="Canada">Canada</option>
                      <option value="Cape Verde">Cape Verde</option>
                      <option value="Cayman Islands">Cayman Islands</option>
                      <option value="Central African Republic">
                        Central African Republic
                      </option>
                      <option value="Chad">Chad</option>
                      <option value="Chile">Chile</option>
                      <option value="China">China</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Comoros">Comoros</option>
                      <option value="Costa Rica">Costa Rica</option>
                      <option value="Croatia">Croatia</option>
                      <option value="Cuba">Cuba</option>
                      <option value="Cyprus">Cyprus</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Democratic Republic of the Congo">
                        Democratic Republic of the Congo
                      </option>
                      <option value="Denmark">Denmark</option>
                      <option value="Djibouti">Djibouti</option>
                      <option value="Dominican Republic">
                        Dominican Republic
                      </option>
                      <option value="Ecuador">Ecuador</option>
                      <option value="Egypt">Egypt</option>
                      <option value="El Salvador">El Salvador</option>
                      <option value="Estonia">Estonia</option>
                      <option value="Ethiopia">Ethiopia</option>
                      <option value="Fiji">Fiji</option>
                      <option value="Finland">Finland</option>
                      <option value="France">France</option>
                      <option value="Gabon">Gabon</option>
                      <option value="Gambia">Gambia</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Germany">Germany</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Greece">Greece</option>
                      <option value="Grenada">Grenada</option>
                      <option value="Guatemala">Guatemala</option>
                      <option value="Guinea">Guinea</option>
                      <option value="Guyana">Guyana</option>
                      <option value="Haiti">Haiti</option>
                      <option value="Honduras">Honduras</option>
                      <option value="Hong Kong">Hong Kong</option>
                      <option value="Hungary">Hungary</option>
                      <option value="Iceland">Iceland</option>
                      <option value="India">India</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Iran">Iran</option>
                      <option value="Iraq">Iraq</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Israel">Israel</option>
                      <option value="Italy">Italy</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Japan">Japan</option>
                      <option value="Jordan">Jordan</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Kyrgyzstan">Kyrgyzstan</option>
                      <option value="Laos">Laos</option>
                      <option value="Latvia">Latvia</option>
                      <option value="Lebanon">Lebanon</option>
                      <option value="Lesotho">Lesotho</option>
                      <option value="Liberia">Liberia</option>
                      <option value="Libya">Libya</option>
                      <option value="Liechtenstein">Liechtenstein</option>
                      <option value="Lithuania">Lithuania</option>
                      <option value="Luxembourg">Luxembourg</option>
                      <option value="Madagascar">Madagascar</option>
                      <option value="Malawi">Malawi</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Maldives">Maldives</option>
                      <option value="Mali">Mali</option>
                      <option value="Malta">Malta</option>
                      <option value="Mauritius">Mauritius</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Moldova">Moldova</option>
                      <option value="Monaco">Monaco</option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Montenegro">Montenegro</option>
                      <option value="Morocco">Morocco</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Myanmar (Burma)">Myanmar (Burma)</option>
                      <option value="Namibia">Namibia</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Nicaragua">Nicaragua</option>
                      <option value="Niger">Niger</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="North Macedonia">North Macedonia</option>
                      <option value="Norway">Norway</option>
                      <option value="Oman">Oman</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Panama">Panama</option>
                      <option value="Papua New Guinea">
                        Papua New Guinea
                      </option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Peru">Peru</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Poland">Poland</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Romania">Romania</option>
                      <option value="Russia">Russia</option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Senegal">Senegal</option>
                      <option value="Serbia">Serbia</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Slovakia">Slovakia</option>
                      <option value="Slovenia">Slovenia</option>
                      <option value="South Africa">South Africa</option>
                      <option value="South Korea">South Korea</option>
                      <option value="Spain">Spain</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Taiwan">Taiwan</option>
                      <option value="Tajikistan">Tajikistan</option>
                      <option value="Tanzania">Tanzania</option>
                      <option value="Thailand">Thailand</option>
                      <option value="Togo">Togo</option>
                      <option value="Trinidad and Tobago">
                        Trinidad and Tobago
                      </option>
                      <option value="Tunisia">Tunisia</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Uganda">Uganda</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="Uruguay">Uruguay</option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Venezuela">Venezuela</option>
                      <option value="Vietnam">Vietnam</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Zimbabwe">Zimbabwe</option>
                    </select>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full rounded-lg border-gray-300 focus:border-realvo-blue focus:ring-realvo-blue text-sm sm:text-base"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                {/* Organization */}
                <div>
                  <label
                    htmlFor="organization"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Organization<span className="text-red-500">*</span>
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    type="text"
                    required
                    className="w-full rounded-lg border-gray-300 focus:border-realvo-blue focus:ring-realvo-blue text-sm sm:text-base"
                    placeholder="Your company, university, or hospital"
                  />
                </div>

                {/* Role / Title */}
                <div>
                  <label
                    htmlFor="role"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Role / Title
                  </label>
                  <input
                    id="role"
                    name="role"
                    type="text"
                    className="w-full rounded-lg border-gray-300 focus:border-realvo-blue focus:ring-realvo-blue text-sm sm:text-base"
                    placeholder="e.g. Director of Employee Experience"
                  />
                </div>

                {/* Nature of Inquiry and Budget Range */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nature of Inquiry */}
                  <div>
                    <label
                      htmlFor="nature"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nature of Inquiry<span className="text-red-500">*</span>
                    </label>
                    <select
                      id="nature"
                      name="nature"
                      required
                      className="w-full rounded-lg border-gray-300 focus:border-realvo-blue focus:ring-realvo-blue text-sm sm:text-base bg-white"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select one
                      </option>
                      <option value="Purchase">Purchase</option>
                      <option value="Rental - 1 week or less">
                        Rental (1-week or less)
                      </option>
                      <option value="Rental - 1 month or less">
                        Rental (1-month or less)
                      </option>
                      <option value="Rental - more than 1 month">
                        Rental (More than 1-month)
                      </option>
                    </select>
                  </div>

                  {/* Budget Range */}
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Budget Range<span className="text-red-500">*</span>
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      required
                      className="w-full rounded-lg border-gray-300 focus:border-realvo-blue focus:ring-realvo-blue text-sm sm:text-base bg-white"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select range
                      </option>
                      <option value="< 5000">Less than $5k</option>
                      <option value="5000-10000">$5k – $10k</option>
                      <option value="10000-15000">$10k – $15k</option>
                      <option value="15000-25000">$15k – $25k</option>
                      <option value="25000+">$25k+</option>
                    </select>
                  </div>
                </div>

                {/* Optional message for extra context */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Anything else we should know?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full rounded-lg border-gray-300 focus:border-realvo-blue focus:ring-realvo-blue text-sm sm:text-base"
                    placeholder="Share any timing, key goals, or location details..."
                  />
                </div>

                {/* Schedule demo checkbox */}
                <div className="flex items-start gap-2">
                  <input
                    id="demo"
                    name="demo"
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-realvo-blue focus:ring-realvo-blue"
                  />
                  <label
                    htmlFor="demo"
                    className="text-sm text-gray-700"
                  >
                    I&apos;d like to schedule a live demo of RealVo.
                  </label>
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    variant="primary"
                    className="w-full sm:w-auto"
                  >
                    Submit
                  </Button>
                  <p className="mt-2 text-xs text-gray-400">
                    Fields marked with <span className="text-red-500">*</span>{' '}
                    are required.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
