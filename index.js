const imageUrl = 'https://img.freepik.com/free-photo/white-box_74190-267.jpg';
const serverUrl = 'https://w5nrbn0p8f.execute-api.us-east-1.amazonaws.com/ask';

// Product data
const products = [
    {
        "id": 1,
        "title": "Gaming Mouse",
        "description": "Ergonomic gaming mouse with customizable RGB lighting",
        "image": imageUrl,
        "price": 49.99,
    },
    {
        "id": 2,
        "title": "Mechanical Keyboard",
        "description": "Mechanical keyboard with tactile switches and RGB backlighting",
        "image": imageUrl,
        "price": 79.99,
    },
    {
        "id": 3,
        "title": "27-inch Monitor",
        "description": "27-inch 4K Ultra HD monitor with slim bezels and adjustable stand",
        "image": imageUrl,
        "price": 299.99,
    },
    {
        "id": 4,
        "title": "USB-C Hub",
        "description": "7-in-1 USB-C hub with HDMI, USB-A, and SD card reader",
        "image": imageUrl,
        "price": 39.99,
    },
    {
        "id": 5,
        "title": "Wireless Earbuds",
        "description": "Bluetooth wireless earbuds with noise cancellation and charging case",
        "image": imageUrl,
        "price": 99.99,
    },
    {
        "id": 6,
        "title": "Portable SSD",
        "description": "1TB portable SSD with USB 3.1 connectivity for fast file transfers",
        "image": imageUrl,
        "price": 129.99,
    },
    {
        "id": 7,
        "title": "Smartwatch",
        "description": "Smartwatch with fitness tracking, heart rate monitor, and GPS",
        "image": imageUrl,
        "price": 199.99,
    },
    {
        "id": 8,
        "title": "Laptop Stand",
        "description": "Adjustable aluminum laptop stand for ergonomic viewing",
        "image": imageUrl,
        "price": 29.99,
    },
    {
        "id": 9,
        "title": "Webcam",
        "description": "1080p Full HD webcam with built-in microphone for video calls",
        "image": imageUrl,
        "price": 59.99,
    },
    {
        "id": 10,
        "title": "Mechanical Pencil Stylus",
        "description": "Stylus with pressure sensitivity for digital drawing and note-taking",
        "image": imageUrl,
        "price": 24.99,
    },
    {
        "id": 11,
        "title": "Wireless Charger",
        "description": "10W wireless charging pad for smartphones and earbuds",
        "image": imageUrl,
        "price": 19.99,
    },
    {
        "id": 12,
        "title": "Bluetooth Speaker",
        "description": "Portable Bluetooth speaker with deep bass and 12-hour battery life",
        "image": imageUrl,
        "price": 49.99,
    },
    {
        "id": 13,
        "title": "VR Headset",
        "description": "Virtual reality headset with motion controllers and immersive 3D display",
        "image": imageUrl,
        "price": 399.99,
    },
    {
        "id": 14,
        "title": "USB Flash Drive",
        "description": "128GB USB 3.0 flash drive with high-speed data transfer",
        "image": imageUrl,
        "price": 14.99,
    },
    {
        "id": 15,
        "title": "Gaming Chair",
        "description": "Ergonomic gaming chair with lumbar support and reclining function",
        "image": imageUrl,
        "price": 199.99,
    },
    {
        "id": 16,
        "title": "Wireless Gaming Headset",
        "description": "Over-ear wireless gaming headset with surround sound and microphone",
        "image": imageUrl,
        "price": 149.99,
    },
    {
        "id": 17,
        "title": "Smart Light Bulb",
        "description": "Wi-Fi-enabled smart light bulb with voice control and color changing",
        "image": imageUrl,
        "price": 12.99,
    },
    {
        "id": 18,
        "title": "Fitness Tracker",
        "description": "Fitness tracker with heart rate monitor and step tracking",
        "image": imageUrl,
        "price": 49.99,
    },
    {
        "id": 19,
        "title": "External Hard Drive",
        "description": "4TB external hard drive with USB 3.0 for backup and storage",
        "image": imageUrl,
        "price": 99.99,
    },
    {
        "id": 20,
        "title": "Noise-Canceling Headphones",
        "description": "Over-ear noise-canceling headphones with Bluetooth and long battery life",
        "image": imageUrl,
        "price": 199.99,
    },
    {
        "id": 21,
        "title": "Smart Plug",
        "description": "Wi-Fi smart plug with app control and voice assistant compatibility",
        "image": imageUrl,
        "price": 19.99,
    },
    {
        "id": 22,
        "title": "Portable Projector",
        "description": "Compact portable projector with 1080p resolution and built-in speakers",
        "image": imageUrl,
        "price": 249.99,
    },
    {
        "id": 23,
        "title": "Smart Thermostat",
        "description": "Smart thermostat with Wi-Fi control and energy-saving features",
        "image": imageUrl,
        "price": 179.99,
    },
    {
        "id": 24,
        "title": "3D Printer",
        "description": "Desktop 3D printer with large build volume and easy setup",
        "image": imageUrl,
        "price": 349.99,
    },
    {
        "id": 25,
        "title": "Robot Vacuum Cleaner",
        "description": "Smart robot vacuum cleaner with app control and automatic docking",
        "image": imageUrl,
        "price": 299.99,
    },
    {
        "id": 26,
        "title": "Portable Power Bank",
        "description": "10000mAh portable power bank with fast charging and dual USB ports",
        "image": imageUrl,
        "price": 29.99,
    },
    {
        "id": 27,
        "title": "Smart Doorbell",
        "description": "Smart video doorbell with motion detection and two-way audio",
        "image": imageUrl,
        "price": 129.99,
    },
    {
        "id": 28,
        "title": "Gaming Console",
        "description": "Next-gen gaming console with ultra-fast SSD and 4K gaming support",
        "image": imageUrl,
        "price": 499.99,
    },
    {
        "id": 29,
        "title": "Wireless Keyboard",
        "description": "Compact wireless keyboard with Bluetooth and long battery life",
        "image": imageUrl,
        "price": 49.99,
    },
    {
        "id": 30,
        "title": "Smartphone Gimbal",
        "description": "3-axis smartphone gimbal stabilizer for smooth video recording",
        "image": imageUrl,
        "price": 99.99,
    },
    {
        "id": 31,
        "title": "Smart Lock",
        "description": "Smart lock with keyless entry and app control",
        "image": imageUrl,
        "price": 199.99,
    },
    {
        "id": 32,
        "title": "Graphic Tablet",
        "description": "Professional graphic tablet with pressure sensitivity and large drawing area",
        "image": imageUrl,
        "price": 299.99,
    },
    {
        "id": 33,
        "title": "Smart Glasses",
        "description": "Augmented reality smart glasses with heads-up display and navigation",
        "image": imageUrl,
        "price": 499.99,
    },
    {
        "id": 34,
        "title": "Portable Bluetooth Keyboard",
        "description": "Foldable portable Bluetooth keyboard with touchpad",
        "image": imageUrl,
        "price": 39.99,
    },
    {
        "id": 35,
        "title": "LED Light Strip",
        "description": "Smart LED light strip with app control and customizable colors",
        "image": imageUrl,
        "price": 24.99,
    },
    {
        "id": 36,
        "title": "Digital Drawing Pad",
        "description": "Digital drawing pad with pressure-sensitive pen and Bluetooth connectivity",
        "image": imageUrl,
        "price": 59.99,
    },
    {
        "id": 37,
        "title": "Streaming Microphone",
        "description": "USB condenser microphone for streaming, podcasting, and recording",
        "image": imageUrl,
        "price": 79.99,
    },
    {
        "id": 38,
        "title": "Capture Card",
        "description": "HDMI capture card for streaming and recording video games",
        "image": imageUrl,
        "price": 149.99,
    },
    {
        "id": 39,
        "title": "Laser Printer",
        "description": "Wireless laser printer with fast printing and high-quality output",
        "image": imageUrl,
        "price": 199.99,
    },
    {
        "id": 40,
        "title": "Smart Speaker",
        "description": "Smart speaker with voice assistant and high-quality sound",
        "image": imageUrl,
        "price": 89.99,
    },
    {
        "id": 41,
        "title": "Action Camera",
        "description": "4K action camera with waterproof case and image stabilization",
        "image": imageUrl,
        "price": 149.99,
    },
    {
        "id": 42,
        "title": "Wi-Fi Range Extender",
        "description": "Wi-Fi range extender with dual-band support and easy setup",
        "image": imageUrl,
        "price": 49.99,
    },
    {
        "id": 43,
        "title": "Bluetooth Tracker",
        "description": "Bluetooth tracker for finding keys, bags, or other items",
        "image": imageUrl,
        "price": 29.99,
    },
    {
        "id": 44,
        "title": "Smart Alarm Clock",
        "description": "Smart alarm clock with sunrise simulation and voice assistant",
        "image": imageUrl,
        "price": 69.99,
    },
    {
        "id": 45,
        "title": "Digital Pen",
        "description": "Digital pen with smart note-taking and drawing features",
        "image": imageUrl,
        "price": 79.99,
    },
    {
        "id": 46,
        "title": "Noise-Isolating Earphones",
        "description": "In-ear noise-isolating earphones with superior sound quality",
        "image": imageUrl,
        "price": 59.99,
    },
    {
        "id": 47,
        "title": "Laptop Cooling Pad",
        "description": "Laptop cooling pad with adjustable fan speed and RGB lighting",
        "image": imageUrl,
        "price": 29.99,
    },
    {
        "id": 48,
        "title": "Smart Bicycle Lock",
        "description": "Smart bicycle lock with GPS tracking and app control",
        "image": imageUrl,
        "price": 99.99,
    }
];

// Function to format price
const formatPrice = (price) => `$${price.toFixed(2)}`;

// Function to create product card
function createProductCard(product) {
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.title}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <p class="product-price">${formatPrice(product.price)}</p>
                <button class="buy-button">Add to Cart</button>
            </div>
        </div>
    `;
}

// Function to render all products
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = products.map(product => createProductCard(product)).join('');
}

// Render products when page loads
renderProducts();

// Add search functionality
const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );

    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
});

// Chat Widget Functionality
document.addEventListener('DOMContentLoaded', () => {
    const chatWidget = document.getElementById('chatWidget');
    const chatMessages = document.getElementById('chatMessages');
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendMessage');
    const minimizeButton = document.getElementById('minimizeChat');

    let isMinimized = false;
    let conversationHistory = [];

    async function getBotResponse() {
        try {
            const response = await fetch(serverUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    conversation: conversationHistory
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            return {
                role: "bot",
                text: data.text,
                products: data.products
            };
        } catch (error) {
            console.error('Error:', error);
            return {
                role: "bot",
                text: "Sorry, I'm having trouble connecting to the server.",
            };
        }
    }

    function addMessage(message, isUser = false) {
        const messageElement = document.createElement('div');
        messageElement.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function addProductRecommendations(products) {
        const recommendationsHtml = products.map(product => `
            <div class="product-card recommendation">
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <div class="product-info">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-description">${product.description}</p>
                    <p class="product-price">${formatPrice(product.price)}</p>
                    <button class="buy-button">Add to Cart</button>
                </div>
            </div>
        `).join('');

        const messageElement = document.createElement('div');
        messageElement.className = 'message bot-message';
        messageElement.innerHTML = recommendationsHtml;
        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    async function handleSendMessage() {
        const message = messageInput.value.trim();
        if (message) {
            // Add user message to UI and history
            addMessage(message, true);
            conversationHistory.push({
                role: "user",
                text: message
            });
            messageInput.value = '';

            // Get bot response
            const botResponse = await getBotResponse();
            // Add bot response to history
            conversationHistory.push(botResponse);

            // Add bot message to UI
            addMessage(botResponse.text);

            // If there are product recommendations, show them
            if (botResponse.products && botResponse.products.length > 0) {
                addProductRecommendations(botResponse.products);
            }
        }
    }

    // Send message on button click
    sendButton.addEventListener('click', handleSendMessage);

    // Send message on Enter key
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSendMessage();
        }
    });

    // Minimize/Maximize chat
    minimizeButton.addEventListener('click', () => {
        const chatContent = chatMessages.parentElement;
        isMinimized = !isMinimized;

        if (isMinimized) {
            chatMessages.style.display = 'none';
            chatContent.querySelector('.chat-input').style.display = 'none';
            minimizeButton.textContent = '+';
            chatWidget.style.height = 'auto';
        } else {
            chatMessages.style.display = 'flex';
            chatContent.querySelector('.chat-input').style.display = 'flex';
            minimizeButton.textContent = '−';
            chatWidget.style.height = '';
        }
    });
});