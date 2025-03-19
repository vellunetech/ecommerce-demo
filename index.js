const imageUrl = 'https://img.freepik.com/free-photo/white-box_74190-267.jpg';
const serverUrl = 'http://85.31.63.184:8080/demo/ecommerce/ask';


// Reading the data_base json file
async function fetchProducts() {
    try {
        const response = await fetch('products.json');
        if (!response.ok) {
            throw new Error('Erro ao carregar os produtos.');
        }
        return await response.json();
    } catch (error) {
        console.error('Erro ao carregar os produtos:', error);
        return [];
    }
}

// Function to format price
const formatPrice = (price) => `R$${price.toFixed(2)}`;

// Function to open a minipage
function showProductDetails(event, card) {
    if (event.target.classList.contains("buy-button")) {
        return;
    }

    event.stopPropagation();

    const existingModal = document.querySelector(".product-modal");
    if (existingModal) {
        existingModal.remove();
    }

    let overlay = document.querySelector(".modal-overlay");
    if (!overlay) {
        overlay = document.createElement("div");
        overlay.classList.add("modal-overlay");
        document.body.appendChild(overlay);
    }

    const modal = document.createElement("div");
    modal.classList.add("product-modal");

    modal.innerHTML = `
        <button class="close-modal" onclick="closeProductModal()">✖</button>
        <div class="modal-content">
            <img src="${card.querySelector(".product-image").src}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${card.querySelector(".product-title").innerText}</h3>
                <p class="product-description">${card.querySelector(".product-description").innerText}</p>
                <p class="product-price">${card.querySelector(".product-price").innerText}</p>
                <button class="buy-button" onclick="addToCart(event)">Add to Cart</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    setTimeout(() => {
        modal.classList.add("show");
        overlay.classList.add("show");
    }, 10);
}

// Function to close the mini page
function closeProductModal() {
    const modal = document.querySelector(".product-modal");
    const overlay = document.querySelector(".modal-overlay");

    if (modal) {
        modal.classList.remove("show");
    }

    if (overlay) {
        overlay.classList.remove("show");

        setTimeout(() => {
            if (modal) modal.remove();
            if (overlay) overlay.remove();
        }, 300);
    }
}


// Function to open the cart without open minipage
function addToCart(event) {
    event.stopPropagation();
    // alert("Produto adicionado ao carrinho!");
}

//Function to structure the card
function createProductCard(product) {
    return `
        <div class="product-card" onclick="showProductDetails(event, this)">
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
async function renderProducts() {
    const products = await fetchProducts();
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = products.map(product => createProductCard(product)).join('');
}

// Render products when page loads
renderProducts();

// Add search functionality
const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('input', async (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const products = await fetchProducts();

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
            const body = JSON.parse(data.body);

            return {
                role: body.role,
                text: body.text,
                products: body.products || []
            };
        } catch (error) {
            console.error('Error:', error);
            return {
                role: "bot",
                text: "Desculpe, ocorreu um erro ao processar sua solicitação.",
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
            <div class="product-card recommendation" onclick="showProductDetails(event, this)">
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