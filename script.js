    const defaultConfig = {
background_color: "#f0f9ff",
  surface_color: "#ffffff",
  text_color: "#1e293b",
primary_action_color: "#0f766e",   // cool blue
secondary_action_color: "#0f766e", // teal green


  company_name: "KGN Refrigeration",
  tagline: "Genuine Spare Parts & Trusted Cooling Solutions",

  hero_title: "KGN Refrigeration – Genuine AC & Refrigerator Spare Parts in Lucknow",

hero_subtitle:
  "Authorized spare parts dealer for LG, Voltas, Samsung, Whirlpool & Godrej in Lucknow",

cta_button_text: "Call for Genuine Spare Parts",


  contact_phone: "8858579282 / 9026860686",
  contact_email: "shyakeelkhan786@gmail.com",
  contact_address:
    "Sarain Shaikh, Satrikh Road, Opposite Madarsa Garib Nawaz, Chinhat, Lucknow – 226028",

  font_family: "system-ui",
  font_size: 16
};


    let currentPage = 'home';
    let submittedRecords = 0;

    const services = [
  {
    icon: "❄️",
    name: "AC Spare Parts",
    description: "Genuine AC spare parts available for all major brands",
    features: ["Compressor", "Fan Motor", "PCB", "Capacitor"]
  },
  {
    icon: "🧊",
    name: "Refrigerator Spare Parts",
    description: "Original refrigerator parts with warranty assurance",
    features: ["Compressor", "Thermostat", "Relay", "Gas Charging"]
  },
  {
    icon: "🔥",
    name: "Cooling Components",
    description: "High-quality cooling and refrigeration components",
    features: ["Cooling Coil", "Condenser", "Evaporator", "Sensors"]
  },
  {
    icon: "🔧",
    name: "Wholesale & Retail Supply",
    description: "Bulk and retail supply for technicians & shops",
    features: ["Wholesale Rates", "Retail Sale", "Fast Availability", "Trusted Brands"]
  }
];


    const products = [
      { icon: "❄️", name: "AC Spare Parts", description: "Compressors, fans, filters, and more" },
      { icon: "🧊", name: "Refrigerator Parts", description: "Compressors, thermostats, door seals" },
      { icon: "🔥", name: "Geyser Components", description: "Heating elements, thermostats, valves" },
      { icon: "🌀", name: "Washing Machine Parts", description: "Motors, pumps, drums, belts" },
      { icon: "🔧", name: "Universal Tools", description: "Professional repair tools and equipment" },
      { icon: "📱", name: "Smart Controllers", description: "Digital thermostats and controllers" }
    ];

    function renderHomePage() {
      const config = defaultConfig;
      return `
        <div class="w-full">
          <!-- Hero Section -->
          <section class="w-full py-20 px-4" style="background: linear-gradient(135deg, #0284c720 0%, #ecfeff 100%);">
            <div class="max-w-7xl mx-auto">
              <div class="grid md:grid-cols-2 gap-12 items-center">
                <div class="fade-in-up">
                  <h1 id="hero-title" class="text-5xl font-bold mb-6" style="font-size: ${config.font_size * 3}px; font-family: ${config.font_family}, system-ui, sans-serif; color: ${config.text_color}"></h1>
                  <p id="hero-subtitle" class="text-xl mb-8" style="font-size: ${config.font_size * 1.25}px; font-family: ${config.font_family}, system-ui, sans-serif; color: ${config.text_color}"></p>
<button
  id="hero-cta"
  data-page="contact"
  class="px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
  style="background-color: ${config.primary_action_color}; color: ${config.surface_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size * 1.125}px">
</button>
                </div>
                <div class="slide-in">
                  <div class="rounded-2xl p-8 shadow-2xl" style="background-color: ${config.surface_color}">
                    <div class="text-8xl text-center mb-6">❄️</div>
                    <div class="grid grid-cols-2 gap-4 text-center">
                      <div class="p-4 rounded-lg" style="background-color: ${config.primary_action_color}15">
                        <div class="text-3xl font-bold" style="color: ${config.primary_action_color}; font-family: ${config.font_family}, system-ui, sans-serif">5000+</div>
                        <div class="text-sm" style="color: ${config.text_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size * 0.875}px">Happy Customers</div>
                      </div>
                      <div class="p-4 rounded-lg" style="background-color: ${config.primary_action_color}15">
                        <div class="text-3xl font-bold" style="color: ${config.primary_action_color}; font-family: ${config.font_family}, system-ui, sans-serif">15+</div>
                        <div class="text-sm" style="color: ${config.text_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size * 0.875}px">Years Experience</div>
                      </div>
                      <div class="p-4 rounded-lg" style="background-color: ${config.primary_action_color}15">
                        <div class="text-3xl font-bold" style="color: ${config.primary_action_color}; font-family: ${config.font_family}, system-ui, sans-serif">24/7</div>
                        <div class="text-sm" style="color: ${config.text_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size * 0.875}px">Support Available</div>
                      </div>
                      <div class="p-4 rounded-lg" style="background-color: ${config.primary_action_color}15">
                        <div class="text-3xl font-bold" style="color: ${config.primary_action_color}; font-family: ${config.font_family}, system-ui, sans-serif">100%</div>
                        <div class="text-sm" style="color: ${config.text_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size * 0.875}px">Genuine Parts</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Services Preview -->
          <section class="w-full py-16 px-4" style="background-color: ${config.background_color}">
            <div class="max-w-7xl mx-auto">
              <h2 class="text-4xl font-bold text-center mb-4" style="font-size: ${config.font_size * 2.5}px; font-family: ${config.font_family}, system-ui, sans-serif; color: ${config.text_color}">Our Services</h2>
              <p class="text-center mb-12" style="color: ${config.text_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size}px">Trusted supplier of genuine cooling and refrigeration spare parts</p>
              
              <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                ${services.map((service, index) => `
                  <div class="service-card p-6 rounded-xl shadow-lg" style="background-color: ${config.surface_color}; animation-delay: ${index * 0.1}s">
                    <div class="text-5xl mb-4">${service.icon}</div>
                    <h3 class="text-xl font-bold mb-2" style="font-size: ${config.font_size * 1.25}px; font-family: ${config.font_family}, system-ui, sans-serif; color: ${config.text_color}">${service.name}</h3>
                    <p class="text-sm" style="color: ${config.text_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size * 0.875}px">${service.description}</p>
                  </div>
                `).join('')}
              </div>
              
              <div class="text-center mt-12">
                <button class="px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity" style="background-color: ${config.secondary_action_color}; color: ${config.surface_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size}px" data-page="services">View All Services</button>
              </div>
            </div>
          </section>

          <!-- Why Choose Us -->
          <section class="w-full py-16 px-4" style="background-color: ${config.surface_color}">
            <div class="max-w-7xl mx-auto">
              <h2 class="text-4xl font-bold text-center mb-12" style="font-size: ${config.font_size * 2.5}px; font-family: ${config.font_family}, system-ui, sans-serif; color: ${config.text_color}">Why Choose ElectroFix Pro?</h2>
              
              <div class="grid md:grid-cols-3 gap-8">
                <div class="text-center">
                  <div class="text-6xl mb-4">⚡</div>
                  <h3 class="text-xl font-bold mb-2" style="font-size: ${config.font_size * 1.25}px; font-family: ${config.font_family}, system-ui, sans-serif; color: ${config.text_color}">Fast Service</h3>
                  <p style="color: ${config.text_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size * 0.875}px">Same-day service available. We reach your doorstep within 2 hours of booking.</p>
                </div>
                <div class="text-center">
                  <div class="text-6xl mb-4">✅</div>
                  <h3 class="text-xl font-bold mb-2" style="font-size: ${config.font_size * 1.25}px; font-family: ${config.font_family}, system-ui, sans-serif; color: ${config.text_color}">Certified Technicians</h3>
                  <p style="color: ${config.text_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size * 0.875}px">All our technicians are certified and highly experienced professionals.</p>
                </div>
                <div class="text-center">
                  <div class="text-6xl mb-4">💯</div>
                  <h3 class="text-xl font-bold mb-2" style="font-size: ${config.font_size * 1.25}px; font-family: ${config.font_family}, system-ui, sans-serif; color: ${config.text_color}">Genuine Parts</h3>
                  <p style="color: ${config.text_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size * 0.875}px">We use only authentic spare parts with warranty for all repairs.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      `;
    }

    function renderServicesPage() {
      const config = defaultConfig;
      return `
        <div class="w-full">
          <section class="w-full py-16 px-4" style="background: linear-gradient(135deg, ${config.primary_action_color}15 0%, ${config.background_color} 100%);">
            <div class="max-w-7xl mx-auto">
              <h1 class="text-5xl font-bold text-center mb-4" style="font-size: ${config.font_size * 3}px; font-family: ${config.font_family}, system-ui, sans-serif; color: ${config.text_color}">Our Services</h1>
              <p class="text-center text-xl mb-12" style="color: ${config.text_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size * 1.25}px">Comprehensive repair and maintenance solutions for all home appliances</p>
              
              <div class="grid md:grid-cols-2 gap-8">
                ${services.map((service, index) => `
                  <div class="service-card p-8 rounded-2xl shadow-lg" style="background-color: ${config.surface_color}; animation-delay: ${index * 0.15}s">
                    <div class="flex items-start mb-6">
                      <div class="text-6xl mr-6">${service.icon}</div>
                      <div>
                        <h2 class="text-2xl font-bold mb-2" style="font-size: ${config.font_size * 1.5}px; font-family: ${config.font_family}, system-ui, sans-serif; color: ${config.text_color}">${service.name}</h2>
                        <p style="color: ${config.text_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size}px">${service.description}</p>
                      </div>
                    </div>
                    
                    <div class="grid grid-cols-2 gap-3 mb-6">
                      ${service.features.map(feature => `
                        <div class="flex items-center p-3 rounded-lg" style="background-color: ${config.background_color}">
                          <span style="color: ${config.primary_action_color}; margin-right: 8px">✓</span>
                          <span style="color: ${config.text_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size * 0.875}px">${feature}</span>
                        </div>
                      `).join('')}
                    </div>
                    
                    <button class="w-full py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity" style="background-color: ${config.primary_action_color}; color: ${config.surface_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size}px" data-page="contact">Book This Service</button>
                  </div>
                `).join('')}
              </div>
            </div>
          </section>
        </div>
      `;
    }

    function renderProductsPage() {
      const config = defaultConfig;
      return `
        <div class="w-full">
          <section class="w-full py-16 px-4" style="background: linear-gradient(135deg, ${config.primary_action_color}15 0%, ${config.background_color} 100%);">
            <div class="max-w-7xl mx-auto">
              <h1 class="text-5xl font-bold text-center mb-4" style="font-size: ${config.font_size * 3}px; font-family: ${config.font_family}, system-ui, sans-serif; color: ${config.text_color}">Genuine Spare Parts</h1>
              <p class="text-center text-xl mb-12" style="color: ${config.text_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size * 1.25}px">High-quality authentic parts for all major appliance brands</p>
              
              <div class="grid md:grid-cols-3 gap-6">
                ${products.map((product, index) => `
                  <div class="product-card p-6 rounded-xl shadow-lg text-center" style="background-color: ${config.surface_color}; animation-delay: ${index * 0.1}s">
                    <div class="text-6xl mb-4">${product.icon}</div>
                    <h3 class="text-xl font-bold mb-2" style="font-size: ${config.font_size * 1.25}px; font-family: ${config.font_family}, system-ui, sans-serif; color: ${config.text_color}">${product.name}</h3>
                    <p class="mb-4" style="color: ${config.text_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size * 0.875}px">${product.description}</p>
                    <button class="w-full py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity" style="background-color: ${config.secondary_action_color}; color: ${config.surface_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size * 0.875}px" data-page="contact">Inquire Now</button>
                  </div>
                `).join('')}
              </div>
              
              <div class="mt-16 p-8 rounded-2xl text-center" style="background-color: ${config.surface_color}">
                <h2 class="text-3xl font-bold mb-4" style="font-size: ${config.font_size * 2}px; font-family: ${config.font_family}, system-ui, sans-serif; color: ${config.text_color}">Why Our Parts?</h2>
                <div class="grid md:grid-cols-3 gap-8 mt-8">
                  <div>
                    <div class="text-5xl mb-3">🏆</div>
                    <h3 class="font-bold mb-2" style="font-size: ${config.font_size * 1.125}px; font-family: ${config.font_family}, system-ui, sans-serif; color: ${config.text_color}">100% Authentic</h3>
                    <p style="color: ${config.text_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size * 0.875}px">Original parts from authorized dealers</p>
                  </div>
                  <div>
                    <div class="text-5xl mb-3">🛡️</div>
                    <h3 class="font-bold mb-2" style="font-size: ${config.font_size * 1.125}px; font-family: ${config.font_family}, system-ui, sans-serif; color: ${config.text_color}">Warranty Included</h3>
                    <p style="color: ${config.text_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size * 0.875}px">6-12 months warranty on all parts</p>
                  </div>
                  <div>
                    <div class="text-5xl mb-3">🚚</div>
                    <h3 class="font-bold mb-2" style="font-size: ${config.font_size * 1.125}px; font-family: ${config.font_family}, system-ui, sans-serif; color: ${config.text_color}">Fast Delivery</h3>
                    <p style="color: ${config.text_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size * 0.875}px">Same-day delivery available</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      `;
    }

    function renderContactPage() {
      const config = defaultConfig;
      return `
        <div class="w-full">
          <section class="w-full py-16 px-4" style="background: linear-gradient(135deg, ${config.primary_action_color}15 0%, ${config.background_color} 100%);">
            <div class="max-w-5xl mx-auto">
              <h1 class="text-5xl font-bold text-center mb-4" style="font-size: ${config.font_size * 3}px; font-family: ${config.font_family}, system-ui, sans-serif; color: ${config.text_color}">Contact Us</h1>
              <p class="text-center text-xl mb-12" style="color: ${config.text_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size * 1.25}px">Contact us for genuine spare parts availability & bulk inquiries</p>
              
              <div class="grid md:grid-cols-2 gap-8">
                <!-- Contact Form -->
                <div class="p-8 rounded-2xl shadow-lg" style="background-color: ${config.surface_color}">
                  <h2 class="text-2xl font-bold mb-6" style="font-size: ${config.font_size * 1.5}px; font-family: ${config.font_family}, system-ui, sans-serif; color: ${config.text_color}">Send Us a Message</h2>
                  
                  <form id="contact-form" class="space-y-4">
                    <div>
                      <label for="name" class="block mb-2 font-medium" style="color: ${config.text_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size * 0.875}px">Full Name *</label>
                      <input type="text" id="name" name="name" required class="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors" style="border-color: ${config.secondary_action_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size}px" placeholder="Enter your name">
                    </div>
                    
                    <div>
                      <label for="email" class="block mb-2 font-medium" style="color: ${config.text_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size * 0.875}px">Email Address *</label>
                      <input type="email" id="email" name="email" required class="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors" style="border-color: ${config.secondary_action_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size}px" placeholder="your@email.com">
                    </div>
                    
                    <div>
                      <label for="phone" class="block mb-2 font-medium" style="color: ${config.text_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size * 0.875}px">Phone Number *</label>
                      <input type="tel" id="phone" name="phone" required class="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors" style="border-color: ${config.secondary_action_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size}px" placeholder="+91 98765 43210">
                    </div>
                    
                    <div>
                      <label for="service_type" class="block mb-2 font-medium" style="color: ${config.text_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size * 0.875}px">Service Type *</label>
                      <select id="service_type" name="service_type" required class="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors" style="border-color: ${config.secondary_action_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size}px">
                        <option value="">Select a service</option>
                        <option value="AC Repair">AC Repair</option>
                        <option value="Refrigerator Repair">Refrigerator Repair</option>
                        <option value="Geyser Repair">Geyser Repair</option>
                        <option value="Washing Machine Repair">Washing Machine Repair</option>
                        <option value="Spare Parts Inquiry">Spare Parts Inquiry</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>
                    </div>
                    
                    <div>
                      <label for="message" class="block mb-2 font-medium" style="color: ${config.text_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size * 0.875}px">Message *</label>
                      <textarea id="message" name="message" required rows="4" class="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-colors resize-none" style="border-color: ${config.secondary_action_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size}px" placeholder="Describe your issue or inquiry..."></textarea>
                    </div>
                    
                    <button type="submit" id="submit-btn" class="w-full py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50" style="background-color: ${config.primary_action_color}; color: ${config.surface_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size * 1.125}px">
                      <span id="submit-text">Submit Inquiry</span>
                      <span id="submit-loading" class="hidden">Sending...</span>
                    </button>
                    
                    <div id="form-message" class="hidden p-4 rounded-lg text-center font-medium" style="font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size * 0.875}px"></div>
                  </form>
                </div>
                
                <!-- Contact Information -->
                <div>
                  <div class="p-8 rounded-2xl shadow-lg mb-6" style="background-color: ${config.surface_color}">
                    <h2 class="text-2xl font-bold mb-6" style="font-size: ${config.font_size * 1.5}px; font-family: ${config.font_family}, system-ui, sans-serif; color: ${config.text_color}">Contact Information</h2>
                    
                    <div class="space-y-6">
                      <div class="flex items-start">
                        <div class="text-3xl mr-4" style="color: ${config.primary_action_color}">📞</div>
                        <div>
                          <h3 class="font-bold mb-1" style="color: ${config.text_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size * 1.125}px">Phone</h3>
                          <p id="contact-info-phone" style="color: ${config.text_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size}px"></p>
                        </div>
                      </div>
                      
                      <div class="flex items-start">
                        <div class="text-3xl mr-4" style="color: ${config.primary_action_color}">✉️</div>
                        <div>
                          <h3 class="font-bold mb-1" style="color: ${config.text_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size * 1.125}px">Email</h3>
                          <p id="contact-info-email" style="color: ${config.text_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size}px"></p>
                        </div>
                      </div>
                      
                      <div class="flex items-start">
                        <div class="text-3xl mr-4" style="color: ${config.primary_action_color}">📍</div>
                        <div>
                          <h3 class="font-bold mb-1" style="color: ${config.text_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size * 1.125}px">Address</h3>
                          <p id="contact-info-address" style="color: ${config.text_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size}px"></p>
                        </div>
                      </div>
                      
                      <div class="flex items-start">
                        <div class="text-3xl mr-4" style="color: ${config.primary_action_color}">⏰</div>
                        <div>
                          <h3 class="font-bold mb-1" style="color: ${config.text_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size * 1.125}px">Working Hours</h3>
                          <p style="color: ${config.text_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size}px">24/7 Emergency Service Available</p>
                          <p style="color: ${config.text_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size * 0.875}px">Mon-Sat: 8:00 AM - 8:00 PM</p>
                          <p style="color: ${config.text_color}; font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size * 0.875}px">Sunday: 9:00 AM - 6:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="p-8 rounded-2xl shadow-lg" style="background-color: ${config.primary_action_color}; color: ${config.surface_color}">
                    <h3 class="text-2xl font-bold mb-4" style="font-size: ${config.font_size * 1.5}px; font-family: ${config.font_family}, system-ui, sans-serif">Quick Response Guarantee</h3>
                    <p style="font-family: ${config.font_family}, system-ui, sans-serif; font-size: ${config.font_size}px">We typically respond to all inquiries within 2 hours during business hours. For urgent repairs, call us directly for immediate assistance!</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      `;
    }

    function navigateToPage(page) {
      currentPage = page;
      const mainContent = document.getElementById('main-content');

      switch (page) {
        case 'home':
          mainContent.innerHTML = renderHomePage();
          break;
        case 'services':
          mainContent.innerHTML = renderServicesPage();
          break;
        case 'products':
          mainContent.innerHTML = renderProductsPage();
          break;
        case 'contact':
          mainContent.innerHTML = renderContactPage();
          setupContactForm();
          break;
      }

      updateNavigation();
      updateTextContent();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function updateNavigation() {
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === currentPage) {
          link.classList.add('active');
        }
      });
    }

    /* function setupContactForm() {
      const form = document.getElementById('contact-form');
      if (!form) return;
      
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = document.getElementById('submit-btn');
        const submitText = document.getElementById('submit-text');
        const submitLoading = document.getElementById('submit-loading');
        const formMessage = document.getElementById('form-message');
        
        submitBtn.disabled = true;
        submitText.classList.add('hidden');
        submitLoading.classList.remove('hidden');
        formMessage.classList.add('hidden');
        
        const formData = {
          id: Date.now().toString(),
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          phone: document.getElementById('phone').value,
          service_type: document.getElementById('service_type').value,
          message: document.getElementById('message').value,
          submitted_at: new Date().toISOString()
        };
        
        /* if (window.dataSdk) {
          const result = await window.dataSdk.create(formData);
          
          if (result.isOk) {
            submittedRecords++;
            const config = defaultConfig;
            formMessage.textContent = '✅ Thank you! Your inquiry has been submitted successfully. We will contact you shortly.';
            formMessage.style.backgroundColor = `${config.primary_action_color}15`;
            formMessage.style.color = config.text_color;
            formMessage.classList.remove('hidden');
            form.reset();
          } else {
            const config = defaultConfig;
            formMessage.textContent = '❌ Sorry, there was an error submitting your inquiry. Please try again or call us directly.';
            formMessage.style.backgroundColor = '#fee';
            formMessage.style.color = '#c00';
            formMessage.classList.remove('hidden');
          }
        }
        
        submitBtn.disabled = false;
        submitText.classList.remove('hidden');
        submitLoading.classList.add('hidden');
      });
    } */

    // function setupContactForm() {
    //   const form = document.getElementById("contact-form");
    //   if (!form) return;

    //   form.addEventListener("submit", function (e) {
    //     e.preventDefault();

    //     const submitBtn = document.getElementById("submit-btn");
    //     const submitText = document.getElementById("submit-text");
    //     const submitLoading = document.getElementById("submit-loading");
    //     const formMessage = document.getElementById("form-message");

    //     submitBtn.disabled = true;
    //     submitText.classList.add("hidden");
    //     submitLoading.classList.remove("hidden");
    //     formMessage.classList.add("hidden");

    //     const templateParams = {
    //       name: document.getElementById("name").value,
    //       email: document.getElementById("email").value,
    //       phone: document.getElementById("phone").value,
    //       service: document.getElementById("service_type").value,
    //       message: document.getElementById("message").value
    //     };

    //     emailjs.send(
    //       "service_jmocyl9",
    //       // "template_kjvwb3",
    //       templateParams
    //     ).then(
    //       function () {
    //         formMessage.textContent = "✅ Message sent successfully! Admin will contact you soon.";
    //         formMessage.classList.remove("hidden");
    //         form.reset();
    //       },
    //       function (error) {
    //         formMessage.textContent = "❌ Failed to send message. Please try again.";
    //         formMessage.classList.remove("hidden");
    //         console.error("EmailJS Error:", error);
    //       }
    //     ).finally(() => {
    //       submitBtn.disabled = false;
    //       submitText.classList.remove("hidden");
    //       submitLoading.classList.add("hidden");
    //     });
    //   });
    // }

function setupContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service_type").value;
    const message = document.getElementById("message").value.trim();

    const ownerWhatsApp = "919026860686";
 // Owner WhatsApp number

const whatsappMessage =
  "NEW SPARE PARTS INQUIRY\n" +
  "KGN REFRIGERATION\n" +
  "-------------------------\n\n" +
  "Customer Name : " + name + "\n" +
  "Phone Number  : " + phone + "\n" +
  "Email Address : " + email + "\n" +
  "Service Type  : " + service + "\n\n" +
  "Problem Details:\n" +
  message + "\n\n" +
  "Location : Lucknow\n" +
  "Source   : Website";



    const whatsappURL =
      "https://wa.me/" +
      ownerWhatsApp +
      "?text=" +
      encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");

    form.reset();
  });
}



    function updateTextContent() {
      const config = defaultConfig;

      const navCompanyName = document.getElementById('nav-company-name');
      if (navCompanyName) navCompanyName.textContent = config.company_name;

      const footerCompanyName = document.getElementById('footer-company-name');
      if (footerCompanyName) footerCompanyName.textContent = config.company_name;

      const footerTagline = document.getElementById('footer-tagline');
      if (footerTagline) footerTagline.textContent = config.tagline;

      const footerPhone = document.getElementById('footer-phone');
      if (footerPhone) footerPhone.textContent = config.contact_phone;

      const footerEmail = document.getElementById('footer-email');
      if (footerEmail) footerEmail.textContent = config.contact_email;

      const footerAddress = document.getElementById('footer-address');
      if (footerAddress) footerAddress.textContent = config.contact_address;

      const footerCopyright = document.getElementById('footer-copyright');
      if (footerCopyright) footerCopyright.textContent = config.company_name;

      typeTextLoop("hero-title", config.hero_title, 60, 1500);


      const heroSubtitle = document.getElementById('hero-subtitle');
      if (heroSubtitle) heroSubtitle.textContent = config.hero_subtitle;

      const heroCta = document.getElementById('hero-cta');
      if (heroCta) heroCta.textContent = config.cta_button_text;

      const contactInfoPhone = document.getElementById('contact-info-phone');
      if (contactInfoPhone) contactInfoPhone.textContent = config.contact_phone;

      const contactInfoEmail = document.getElementById('contact-info-email');
      if (contactInfoEmail) contactInfoEmail.textContent = config.contact_email;

      const contactInfoAddress = document.getElementById('contact-info-address');
      if (contactInfoAddress) contactInfoAddress.textContent = config.contact_address;
    }

    /* async function onConfigChange(config) {
      document.body.style.fontFamily = `${config.font_family}, system-ui, sans-serif`;
      document.body.style.backgroundColor = config.background_color;
      
      const navbar = document.getElementById('navbar');
      if (navbar) {
        navbar.style.backgroundColor = config.surface_color;
      }
      
      const footer = document.getElementById('footer');
      if (footer) {
        footer.style.backgroundColor = config.surface_color;
        footer.style.borderTop = `1px solid ${config.secondary_action_color}30`;
      }
      
      document.querySelectorAll('.nav-link').forEach(link => {
        link.style.color = config.text_color;
        link.style.fontFamily = `${config.font_family}, system-ui, sans-serif`;
      });
      
      document.querySelectorAll('.nav-link::after').forEach(pseudo => {
        pseudo.style.backgroundColor = config.primary_action_color;
      });
      
      const styleSheet = document.createElement('style');
      styleSheet.textContent = `
        .nav-link::after { background-color: ${config.primary_action_color} !important; }
        .nav-link:hover { color: ${config.primary_action_color} !important; }
        .nav-link.active { color: ${config.primary_action_color} !important; }
        #mobile-menu-btn { color: ${config.text_color}; }
        #mobile-menu a { color: ${config.text_color}; }
        #mobile-menu a:hover { color: ${config.primary_action_color}; }
        input:focus, textarea:focus, select:focus { 
          border-color: ${config.primary_action_color} !important; 
        }
      `;
      const oldStyle = document.querySelector('style[data-dynamic]');
      if (oldStyle) oldStyle.remove();
      styleSheet.setAttribute('data-dynamic', 'true');
      document.head.appendChild(styleSheet);
      
      navigateToPage(currentPage);
    } */

    /* if (window.elementSdk) {
      window.elementSdk.init({
        defaultConfig,
        onConfigChange,
        mapToCapabilities: (config) => ({
          recolorables: [
            {
              get: () => config.background_color,
              set: (value) => {
                config.background_color = value;
                window.elementSdk.setConfig({ background_color: value });
              }
            },
            {
              get: () => config.surface_color,
              set: (value) => {
                config.surface_color = value;
                window.elementSdk.setConfig({ surface_color: value });
              }
            },
            {
              get: () => config.text_color,
              set: (value) => {
                config.text_color = value;
                window.elementSdk.setConfig({ text_color: value });
              }
            },
            {
              get: () => config.primary_action_color,
              set: (value) => {
                config.primary_action_color = value;
                window.elementSdk.setConfig({ primary_action_color: value });
              }
            },
            {
              get: () => config.secondary_action_color,
              set: (value) => {
                config.secondary_action_color = value;
                window.elementSdk.setConfig({ secondary_action_color: value });
              }
            }
          ],
          borderables: [],
          fontEditable: {
            get: () => config.font_family,
            set: (value) => {
              config.font_family = value;
              window.elementSdk.setConfig({ font_family: value });
            }
          },
          fontSizeable: {
            get: () => config.font_size,
            set: (value) => {
              config.font_size = value;
              window.elementSdk.setConfig({ font_size: value });
            }
          }
        }),
        mapToEditPanelValues: (config) => new Map([
          ["company_name", config.company_name],
          ["tagline", config.tagline],
          ["hero_title", config.hero_title],
          ["hero_subtitle", config.hero_subtitle],
          ["cta_button_text", config.cta_button_text],
          ["contact_phone", config.contact_phone],
          ["contact_email", config.contact_email],
          ["contact_address", config.contact_address]
        ])
      });
    } */

    const dataHandler = {
      onDataChanged(data) {
        submittedRecords = data.length;
      }
    };

    /* if (window.dataSdk) {
      window.dataSdk.init(dataHandler);
    } */

    /* document.addEventListener('click', (e) => {
      if (e.target.dataset.page) {
        e.preventDefault();
        navigateToPage(e.target.dataset.page);
      }

      const menuBtn = e.target.closest('#mobile-menu-btn');
if (menuBtn) {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('hidden');
}

    }); */

    document.addEventListener('click', (e) => {
  const pageElement = e.target.closest('[data-page]');
  const mobileMenu = document.getElementById('mobile-menu');

  // Page navigation
  if (pageElement) {
    e.preventDefault();
    navigateToPage(pageElement.dataset.page);

    // ✅ CLOSE mobile menu after selection
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
    }
  }

  // Hamburger toggle
  const menuBtn = e.target.closest('#mobile-menu-btn');
  if (menuBtn) {
    mobileMenu.classList.toggle('hidden');
  }
});


    function typeTextLoop(elementId, text, speed = 60, delayAfterComplete = 1500) {
      const el = document.getElementById(elementId);
      if (!el) return;

      let index = 0;
      let isDeleting = false;

      function type() {
        if (!isDeleting) {
          el.textContent = text.substring(0, index + 1);
          index++;

          if (index === text.length) {
            setTimeout(() => (isDeleting = true), delayAfterComplete);
          }
        } else {
          el.textContent = text.substring(0, index - 1);
          index--;

          if (index === 0) {
            isDeleting = false;
          }
        }

        setTimeout(type, isDeleting ? speed / 2 : speed);
      }

      type();
    }



    navigateToPage('home');
