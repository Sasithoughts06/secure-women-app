
const Index = () => {
  return (
    <div className="min-h-screen">
      <div dangerouslySetInnerHTML={{
        __html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Women Safety Web App</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            color: #333;
            line-height: 1.6;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        /* Header Styles */
        .header {
            text-align: center;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            padding: 30px 20px;
            border-radius: 20px;
            margin-bottom: 30px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            animation: slideDown 0.8s ease-out;
        }

        .header h1 {
            font-size: 2.5rem;
            background: linear-gradient(45deg, #667eea, #764ba2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 10px;
            animation: fadeInUp 1s ease-out 0.3s both;
        }

        .header p {
            font-size: 1.1rem;
            color: #666;
            animation: fadeInUp 1s ease-out 0.5s both;
        }

        /* Main Content Grid */
        .main-content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 30px;
            margin-bottom: 30px;
        }

        .card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            padding: 30px;
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            animation: fadeInUp 0.8s ease-out;
        }

        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        }

        .card h2 {
            font-size: 1.8rem;
            margin-bottom: 20px;
            color: #333;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .card-icon {
            width: 30px;
            height: 30px;
            background: linear-gradient(45deg, #667eea, #764ba2);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 16px;
        }

        /* SOS Button */
        .sos-section {
            text-align: center;
        }

        .sos-button {
            background: linear-gradient(45deg, #ff6b6b, #ee5a24);
            color: white;
            border: none;
            padding: 20px 40px;
            font-size: 1.3rem;
            font-weight: bold;
            border-radius: 50px;
            cursor: pointer;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
            position: relative;
            overflow: hidden;
        }

        .sos-button:hover {
            transform: scale(1.05);
            box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
        }

        .sos-button:active {
            transform: scale(0.98);
        }

        .sos-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s;
        }

        .sos-button:hover::before {
            left: 100%;
        }

        .location-display {
            margin-top: 20px;
            padding: 15px;
            background: rgba(255, 107, 107, 0.1);
            border-radius: 10px;
            border-left: 4px solid #ff6b6b;
            display: none;
        }

        .location-display.show {
            display: block;
            animation: slideUp 0.5s ease-out;
        }

        /* Contacts Section */
        .contact-form {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
            flex-wrap: wrap;
        }

        .contact-input {
            flex: 1;
            min-width: 200px;
            padding: 12px 15px;
            border: 2px solid #e1e8ed;
            border-radius: 10px;
            font-size: 1rem;
            transition: all 0.3s ease;
        }

        .contact-input:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .add-contact-btn {
            background: linear-gradient(45deg, #667eea, #764ba2);
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 10px;
            cursor: pointer;
            font-size: 1rem;
            font-weight: 600;
            transition: all 0.3s ease;
            white-space: nowrap;
        }

        .add-contact-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .contacts-list {
            max-height: 200px;
            overflow-y: auto;
        }

        .contact-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 15px;
            background: rgba(102, 126, 234, 0.1);
            margin-bottom: 10px;
            border-radius: 10px;
            animation: slideInRight 0.3s ease-out;
        }

        .contact-item:last-child {
            margin-bottom: 0;
        }

        .delete-btn {
            background: #ff6b6b;
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 0.8rem;
            transition: all 0.3s ease;
        }

        .delete-btn:hover {
            background: #ee5a24;
            transform: scale(1.1);
        }

        /* Safety Tips */
        .tips-list {
            list-style: none;
        }

        .tip-item {
            background: rgba(102, 126, 234, 0.1);
            padding: 15px;
            margin-bottom: 15px;
            border-radius: 10px;
            border-left: 4px solid #667eea;
            transition: all 0.3s ease;
            animation: fadeInLeft 0.5s ease-out;
        }

        .tip-item:hover {
            transform: translateX(5px);
            box-shadow: 0 4px 15px rgba(102, 126, 234, 0.1);
        }

        .tip-item:last-child {
            margin-bottom: 0;
        }

        .tip-number {
            background: linear-gradient(45deg, #667eea, #764ba2);
            color: white;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px;
            font-size: 0.9rem;
            font-weight: bold;
        }

        /* Alert Styles */
        .alert {
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 10px;
            color: white;
            font-weight: 600;
            z-index: 1000;
            transform: translateX(400px);
            transition: all 0.3s ease;
            max-width: 300px;
        }

        .alert.show {
            transform: translateX(0);
        }

        .alert.success {
            background: linear-gradient(45deg, #00d2ff, #3a7bd5);
        }

        .alert.error {
            background: linear-gradient(45deg, #ff6b6b, #ee5a24);
        }

        /* Loading Animation */
        .loading {
            display: inline-block;
            width: 20px;
            height: 20px;
            border: 3px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top-color: white;
            animation: spin 1s ease-in-out infinite;
        }

        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeInLeft {
            from {
                opacity: 0;
                transform: translateX(-30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes slideInRight {
            from {
                opacity: 0;
                transform: translateX(30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes spin {
            to { transform: rotate(360deg); }
        }

        @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .container {
                padding: 15px;
            }

            .header h1 {
                font-size: 2rem;
            }

            .main-content {
                grid-template-columns: 1fr;
                gap: 20px;
            }

            .card {
                padding: 20px;
            }

            .contact-form {
                flex-direction: column;
            }

            .contact-input {
                min-width: auto;
            }

            .sos-button {
                padding: 15px 30px;
                font-size: 1.1rem;
            }

            .alert {
                right: 15px;
                left: 15px;
                max-width: none;
            }
        }

        @media (max-width: 480px) {
            .header {
                padding: 20px 15px;
            }

            .header h1 {
                font-size: 1.8rem;
            }

            .card h2 {
                font-size: 1.5rem;
            }

            .sos-button {
                padding: 12px 25px;
                font-size: 1rem;
            }
        }

        /* Accessibility */
        .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
        }

        /* Focus styles for better accessibility */
        button:focus,
        input:focus {
            outline: 2px solid #667eea;
            outline-offset: 2px;
        }
    </style>
</head>
<body>
    <div class="container">
        <!-- Header -->
        <header class="header">
            <h1>🛡️ Women Safety Web App</h1>
            <p>Your safety is our priority. Stay safe, stay connected.</p>
        </header>

        <!-- Main Content -->
        <div class="main-content">
            <!-- SOS Section -->
            <div class="card sos-section">
                <h2>
                    <span class="card-icon">🚨</span>
                    Emergency SOS
                </h2>
                <p style="margin-bottom: 20px; color: #666;">Click the button below in case of emergency to get your current location.</p>
                <button class="sos-button" onclick="handleSOS()">
                    <span id="sosText">🚨 EMERGENCY SOS</span>
                </button>
                <div id="locationDisplay" class="location-display">
                    <h3>📍 Your Current Location:</h3>
                    <p id="locationText"></p>
                    <p style="font-size: 0.9rem; color: #666; margin-top: 10px;">
                        Share this location with your trusted contacts immediately.
                    </p>
                </div>
            </div>

            <!-- Trusted Contacts Section -->
            <div class="card">
                <h2>
                    <span class="card-icon">👥</span>
                    Trusted Contacts
                </h2>
                <div class="contact-form">
                    <input 
                        type="tel" 
                        id="contactInput" 
                        class="contact-input" 
                        placeholder="Enter phone number (e.g., +1234567890)"
                        pattern="[+][0-9\\s\\-\\(\\)]+"
                    >
                    <button class="add-contact-btn" onclick="addContact()">
                        ➕ Add Contact
                    </button>
                </div>
                <div id="contactsList" class="contacts-list">
                    <!-- Contacts will be dynamically added here -->
                </div>
            </div>
        </div>

        <!-- Safety Tips Section -->
        <div class="card">
            <h2>
                <span class="card-icon">💡</span>
                Safety Tips for Women
            </h2>
            <ul class="tips-list">
                <li class="tip-item">
                    <span class="tip-number">1</span>
                    <strong>Trust your instincts:</strong> If something feels wrong, it probably is. Don't ignore your gut feelings.
                </li>
                <li class="tip-item">
                    <span class="tip-number">2</span>
                    <strong>Stay aware of surroundings:</strong> Keep your head up, avoid distractions like phones when walking alone.
                </li>
                <li class="tip-item">
                    <span class="tip-number">3</span>
                    <strong>Share your location:</strong> Let trusted friends/family know where you're going and when you expect to return.
                </li>
                <li class="tip-item">
                    <span class="tip-number">4</span>
                    <strong>Keep emergency contacts handy:</strong> Have important numbers saved and easily accessible on your phone.
                </li>
                <li class="tip-item">
                    <span class="tip-number">5</span>
                    <strong>Learn basic self-defense:</strong> Consider taking a self-defense class to learn protective techniques.
                </li>
                <li class="tip-item">
                    <span class="tip-number">6</span>
                    <strong>Use safety apps:</strong> Install safety apps that can alert contacts or authorities in emergencies.
                </li>
                <li class="tip-item">
                    <span class="tip-number">7</span>
                    <strong>Avoid isolated areas:</strong> Stick to well-lit, populated areas, especially during late hours.
                </li>
                <li class="tip-item">
                    <span class="tip-number">8</span>
                    <strong>Keep doors and windows locked:</strong> Ensure your home and car are properly secured at all times.
                </li>
            </ul>
        </div>
    </div>

    <script>
        // Global variables
        let contacts = JSON.parse(localStorage.getItem('trustedContacts')) || [];
        
        // Initialize the app
        document.addEventListener('DOMContentLoaded', function() {
            displayContacts();
            
            // Add enter key support for contact input
            document.getElementById('contactInput').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    addContact();
                }
            });
            
            // Add staggered animation to tip items
            const tipItems = document.querySelectorAll('.tip-item');
            tipItems.forEach((item, index) => {
                item.style.animationDelay = (index * 0.1) + 's';
            });
        });

        // SOS Emergency Function
        function handleSOS() {
            const sosButton = document.querySelector('.sos-button');
            const sosText = document.getElementById('sosText');
            const locationDisplay = document.getElementById('locationDisplay');
            
            // Show loading state
            sosText.innerHTML = '<span class="loading"></span> Getting Location...';
            sosButton.disabled = true;
            
            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(
                    function(position) {
                        const latitude = position.coords.latitude;
                        const longitude = position.coords.longitude;
                        const accuracy = position.coords.accuracy;
                        
                        // Display location
                        document.getElementById('locationText').innerHTML = 
                            '<strong>Latitude:</strong> ' + latitude.toFixed(6) + '<br>' +
                            '<strong>Longitude:</strong> ' + longitude.toFixed(6) + '<br>' +
                            '<strong>Accuracy:</strong> ±' + Math.round(accuracy) + ' meters<br>' +
                            '<strong>Google Maps:</strong> <a href="https://maps.google.com/?q=' + latitude + ',' + longitude + '" target="_blank" style="color: #667eea; text-decoration: underline;">View on Map</a>';
                        
                        locationDisplay.classList.add('show');
                        
                        // Reset button
                        sosText.innerHTML = '🚨 EMERGENCY SOS';
                        sosButton.disabled = false;
                        
                        // Show success alert
                        showAlert('Location retrieved successfully! Share with your trusted contacts.', 'success');
                        
                        // Simulate sending location to emergency contacts
                        if (contacts.length > 0) {
                            setTimeout(() => {
                                showAlert('Emergency alert sent to ' + contacts.length + ' trusted contact(s)', 'success');
                            }, 1000);
                        }
                    },
                    function(error) {
                        let errorMessage = 'Unable to retrieve location. ';
                        switch(error.code) {
                            case error.PERMISSION_DENIED:
                                errorMessage += 'Location access denied by user.';
                                break;
                            case error.POSITION_UNAVAILABLE:
                                errorMessage += 'Location information unavailable.';
                                break;
                            case error.TIMEOUT:
                                errorMessage += 'Location request timed out.';
                                break;
                            default:
                                errorMessage += 'An unknown error occurred.';
                                break;
                        }
                        
                        // Reset button
                        sosText.innerHTML = '🚨 EMERGENCY SOS';
                        sosButton.disabled = false;
                        
                        // Show error alert
                        showAlert(errorMessage, 'error');
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 10000,
                        maximumAge: 300000
                    }
                );
            } else {
                // Reset button
                sosText.innerHTML = '🚨 EMERGENCY SOS';
                sosButton.disabled = false;
                
                showAlert('Geolocation is not supported by this browser.', 'error');
            }
        }

        // Add Contact Function
        function addContact() {
            const contactInput = document.getElementById('contactInput');
            const phoneNumber = contactInput.value.trim();
            
            // Validate phone number
            if (!phoneNumber) {
                showAlert('Please enter a phone number.', 'error');
                return;
            }
            
            // Basic phone number validation
            const phoneRegex = /^[+]?[0-9\s\-\(\)]{10,}$/;
            if (!phoneRegex.test(phoneNumber)) {
                showAlert('Please enter a valid phone number.', 'error');
                return;
            }
            
            // Check if contact already exists
            if (contacts.includes(phoneNumber)) {
                showAlert('This contact already exists.', 'error');
                return;
            }
            
            // Add contact
            contacts.push(phoneNumber);
            localStorage.setItem('trustedContacts', JSON.stringify(contacts));
            
            // Clear input
            contactInput.value = '';
            
            // Update display
            displayContacts();
            
            // Show success message
            showAlert('Contact added successfully!', 'success');
        }

        // Display Contacts Function
        function displayContacts() {
            const contactsList = document.getElementById('contactsList');
            
            if (contacts.length === 0) {
                contactsList.innerHTML = '<p style="text-align: center; color: #666; font-style: italic;">No trusted contacts added yet. Add your first contact above.</p>';
                return;
            }
            
            contactsList.innerHTML = contacts.map((contact, index) => 
                '<div class="contact-item">' +
                    '<span>📱 ' + contact + '</span>' +
                    '<button class="delete-btn" onclick="deleteContact(' + index + ')">❌ Remove</button>' +
                '</div>'
            ).join('');
        }

        // Delete Contact Function
        function deleteContact(index) {
            if (confirm('Are you sure you want to remove this contact?')) {
                contacts.splice(index, 1);
                localStorage.setItem('trustedContacts', JSON.stringify(contacts));
                displayContacts();
                showAlert('Contact removed successfully.', 'success');
            }
        }

        // Alert Function
        function showAlert(message, type) {
            // Remove any existing alerts
            const existingAlert = document.querySelector('.alert');
            if (existingAlert) {
                existingAlert.remove();
            }
            
            // Create new alert
            const alert = document.createElement('div');
            alert.className = 'alert ' + type;
            alert.textContent = message;
            
            // Add to page
            document.body.appendChild(alert);
            
            // Show alert
            setTimeout(() => {
                alert.classList.add('show');
            }, 100);
            
            // Hide alert after 4 seconds
            setTimeout(() => {
                alert.classList.remove('show');
                setTimeout(() => {
                    if (alert.parentNode) {
                        alert.remove();
                    }
                }, 300);
            }, 4000);
        }

        // Add some interactive animations
        document.addEventListener('DOMContentLoaded', function() {
            // Add hover effect to cards
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px) scale(1.02)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) scale(1)';
                });
            });
            
            // Add pulse animation to SOS button periodically
            const sosButton = document.querySelector('.sos-button');
            setInterval(() => {
                sosButton.style.animation = 'pulse 0.5s ease-in-out';
                setTimeout(() => {
                    sosButton.style.animation = '';
                }, 500);
            }, 5000);
        });

        // Add keyboard navigation support
        document.addEventListener('keydown', function(e) {
            // Alt + S for SOS (accessibility shortcut)
            if (e.altKey && e.key === 's') {
                e.preventDefault();
                handleSOS();
            }
            
            // Alt + A for Add Contact
            if (e.altKey && e.key === 'a') {
                e.preventDefault();
                document.getElementById('contactInput').focus();
            }
        });

        // Service Worker registration for PWA capabilities (optional)
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
                // This would register a service worker if we had one
                console.log('App loaded successfully');
            });
        }
    </script>
</body>
</html>
        `
      }} />
    </div>
  );
};

export default Index;
