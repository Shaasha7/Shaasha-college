// ==========================================
// SHAASHA AI CHATBOT
// chatbot.js
// ==========================================

const chatBody = document.getElementById("chatBody");
const userInput = document.getElementById("userInput");

// Send message using Enter key
userInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

// Function to send message
function sendMessage() {

    const message = userInput.value.trim();

    if (message === "") return;

    addUserMessage(message);

    userInput.value = "";

    setTimeout(() => {
        botReply(message);
    }, 700);

}

// Quick button function
function sendQuestion(question) {

    addUserMessage(question);

    setTimeout(() => {
        botReply(question);
    }, 700);

}

// Add user message
function addUserMessage(message) {

    const div = document.createElement("div");

    div.className = "user-message";

    div.innerHTML = message;

    chatBody.appendChild(div);

    scrollBottom();

}

// Add bot message
function addBotMessage(message) {

    const div = document.createElement("div");

    div.className = "bot-message";

    div.innerHTML = message;

    chatBody.appendChild(div);

    scrollBottom();

}

// Scroll automatically
function scrollBottom() {

    chatBody.scrollTop = chatBody.scrollHeight;

}

// Bot Replies
function botReply(message) {

    const text = message.toLowerCase();

    let reply = "";

    // Greetings
    if (
        text.includes("hi") ||
        text.includes("hello") ||
        text.includes("hey")
    ) {

        reply =
            "👋 Hello! Welcome to <b>Shaasha College of Technology</b>.<br><br>How may I assist you today?";

    }

    // Admission
    else if (text.includes("admission")) {

        reply =
            "🎓 Admissions are currently open.<br><br>Please visit the Admission section on our website or contact our Admission Office.";

    }

    // Courses
    else if (text.includes("course")) {

        reply =
            "<b>Courses Offered:</b><br><br>" +
            "✅ CSE<br>" +
            "✅ AI & ML<br>" +
            "✅ Data Science<br>" +
            "✅ ECE<br>" +
            "✅ EEE<br>" +
            "✅ Mechanical<br>" +
            "✅ Civil";

    }

    // Facilities
    else if (text.includes("facility")) {

        reply =
            "🏢 Our Facilities include:<br><br>" +
            "🍽 Food Court<br>" +
            "📚 Digital Library<br>" +
            "🧘 Yoga Centre<br>" +
            "💻 Smart Classrooms<br>" +
            "🏥 Medical Services<br>" +
            "🎤 Seminar Hall<br>" +
            "⚽ Sports Complex";

    }

    // Placement
    else if (
        text.includes("placement") ||
        text.includes("job")
    ) {

        reply =
            "💼 Our Placement Cell provides:<br><br>" +
            "✔ Campus Recruitment<br>" +
            "✔ Internship Support<br>" +
            "✔ Soft Skills Training<br>" +
            "✔ Mock Interviews";

    }

    // Fees
    else if (
        text.includes("fee") ||
        text.includes("fees")
    ) {

        reply =
            "💰 Fee details vary depending on the course.<br><br>Please contact the Admission Office for the latest fee structure.";

    }

    // Hostel
    else if (text.includes("hostel")) {

        reply =
            "🏠 Separate hostel facilities are available for Boys and Girls with Wi-Fi, Security and Dining.";

    }

    // Contact
    else if (
        text.includes("contact") ||
        text.includes("phone")
    ) {

        reply =
            "📞 Contact Us:<br><br>" +
            "Phone : +91 XXXXX XXXXX<br>" +
            "Email : info@shaasha.edu.in";

    }

    // Location
    else if (
        text.includes("location") ||
        text.includes("address")
    ) {

        reply =
            "📍 Shaasha College of Technology<br><br>Please visit our Contact page for the complete address.";

    }

    // Thanks
    else if (
        text.includes("thank") ||
        text.includes("thanks")
    ) {

        reply =
            "😊 You're most welcome! Feel free to ask anything about Shaasha College.";

    }

    // Bye
    else if (
        text.includes("bye") ||
        text.includes("goodbye")
    ) {

        reply =
            "👋 Thank you for visiting Shaasha College. Have a wonderful day!";

    }

    // Default
    else {

        reply =
            "🤖 Sorry, I couldn't understand your question.<br><br>Please ask about:<br>" +
            "• Admissions<br>" +
            "• Courses<br>" +
            "• Facilities<br>" +
            "• Placements<br>" +
            "• Hostel<br>" +
            "• Fees<br>" +
            "• Contact";

    }

    addBotMessage(reply);

}