// script.js
document.getElementById('generateButton').addEventListener('click', generateRizz);

const rizzQuotes = [
    "Is your dad an artist? Because you're a masterpiece.",
    "Are you a camera? Because every time I look at you, I smile.",
    "Are you an electrician? Because you’re lighting up my life.",
    "If you were a vegetable, you'd be a cute-cumber.",
    "Do you have a name, or can I call you mine?",
    "Are you French? Because Eiffel for you.",
    "If you were a triangle, you’d be acute one.",
    "Is your name Google? Because you have everything I’ve been searching for.",
    "Do you have a map? Because I keep getting lost in your eyes.",
    "Are you a magician? Because whenever I look at you, everyone else disappears.",
    "If you were a fruit, you'd be a fineapple.",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "Is there a sparkle in your eye, or are you just happy to see me?",
    "Are you an alien? Because you just abducted my heart.",
    "Can I follow you home? Because my parents always told me to follow my dreams.",
    "Is it hot in here or is it just you?",
    "Do you have a sunburn, or are you always this hot?",
    "Are you a time traveler? Because I can see you in my future.",
    "Do you have a pencil? Because I want to erase your past and write our future.",
    "Is your name Wi-Fi? Because I'm feeling a connection.",
    "Do you have a sunburn, or are you always this hot?",
    "Are you Australian? Because when I look at you, I feel like I'm down under.",
    "Are you a loan from a bank? Because you have my interest.",
    "Do you have a map? Because I keep getting lost in your eyes.",
    "Is your dad an artist? Because you're a masterpiece.",
    "Are you a camera? Because every time I look at you, I smile.",
    "Are you an electrician? Because you’re lighting up my life.",
    "If you were a vegetable, you'd be a cute-cumber.",
    "Do you have a name, or can I call you mine?",
    "Are you French? Because Eiffel for you.",
    "If you were a triangle, you’d be acute one.",
    "Is your name Google? Because you have everything I’ve been searching for.",
    "Do you have a map? Because I keep getting lost in your eyes.",
    "Are you a magician? Because whenever I look at you, everyone else disappears.",
    "If you were a fruit, you'd be a fineapple.",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "Is there a sparkle in your eye, or are you just happy to see me?",
    "Are you an alien? Because you just abducted my heart.",
    "Can I follow you home? Because my parents always told me to follow my dreams.",
    "Is it hot in here or is it just you?",
    "Do you have a sunburn, or are you always this hot?",
    "Are you a time traveler? Because I can see you in my future.",
    "Do you have a pencil? Because I want to erase your past and write our future.",
    "Is your name Wi-Fi? Because I'm feeling a connection.",
    "Do you have a sunburn, or are you always this hot?",
    "Are you Australian? Because when I look at you, I feel like I'm down under.",
    "Are you a loan from a bank? Because you have my interest.",
    "Do you have a map? Because I keep getting lost in your eyes.",
    "Is your dad an artist? Because you're a masterpiece.",
    "Are you a camera? Because every time I look at you, I smile.",
    "Are you an electrician? Because you’re lighting up my life.",
    "If you were a vegetable, you'd be a cute-cumber.",
    "Do you have a name, or can I call you mine?",
    "Are you French? Because Eiffel for you.",
    "If you were a triangle, you’d be acute one.",
    "Is your name Google? Because you have everything I’ve been searching for.",
    "Do you have a map? Because I keep getting lost in your eyes.",
    "Are you a magician? Because whenever I look at you, everyone else disappears.",
    "If you were a fruit, you'd be a fineapple.",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "Is there a sparkle in your eye, or are you just happy to see me?",
    "Are you an alien? Because you just abducted my heart.",
    "Can I follow you home? Because my parents always told me to follow my dreams.",
    "Is it hot in here or is it just you?",
    "Do you have a sunburn, or are you always this hot?",
    "Are you a time traveler? Because I can see you in my future.",
    "Do you have a pencil? Because I want to erase your past and write our future.",
    "Is your name Wi-Fi? Because I'm feeling a connection.",
    "Do you have a sunburn, or are you always this hot?",
    "Are you Australian? Because when I look at you, I feel like I'm down under.",
    "Are you a loan from a bank? Because you have my interest.",
    "Do you have a map? Because I keep getting lost in your eyes.",
    "Is your dad an artist? Because you're a masterpiece.",
    "Are you a camera? Because every time I look at you, I smile.",
    "Are you an electrician? Because you’re lighting up my life.",
    "If you were a vegetable, you'd be a cute-cumber.",
    "Do you have a name, or can I call you mine?",
    "Are you French? Because Eiffel for you.",
    "If you were a triangle, you’d be acute one.",
    "Is your name Google? Because you have everything I’ve been searching for.",
    "Do you have a map? Because I keep getting lost in your eyes.",
    "Are you a magician? Because whenever I look at you, everyone else disappears.",
    "If you were a fruit, you'd be a fineapple.",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "Is there a sparkle in your eye, or are you just happy to see me?",
    "Are you an alien? Because you just abducted my heart.",
    "Can I follow you home? Because my parents always told me to follow my dreams.",
    "Is it hot in here or is it just you?",
    "Do you have a sunburn, or are you always this hot?",
    "Are you a time traveler? Because I can see you in my future.",
    "Do you have a pencil? Because I want to erase your past and write our future.",
    "Is your name Wi-Fi? Because I'm feeling a connection.",
    "Do you have a sunburn, or are you always this hot?",
    "Are you Australian? Because when I look at you, I feel like I'm down under.",
    "Are you a loan from a bank? Because you have my interest.",
    "Do you have a map? Because I keep getting lost in your eyes.",
    "Is your dad an artist? Because you're a masterpiece.",
    "Are you a camera? Because every time I look at you, I smile.",
    "Are you an electrician? Because you’re lighting up my life.",
    "If you were a vegetable, you'd be a cute-cumber.",
    "Do you have a name, or can I call you mine?",
    "Are you French? Because Eiffel for you.",
    "If you were a triangle, you’d be acute one.",
    "Is your name Google? Because you have everything I’ve been searching for.",
    "Do you have a map? Because I keep getting lost in your eyes.",
    "Are you a magician? Because whenever I look at you, everyone else disappears.",
    "If you were a fruit, you'd be a fineapple.",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "Is there a sparkle in your eye, or are you just happy to see me?",
    "Are you an alien? Because you just abducted my heart.",
    "Can I follow you home? Because my parents always told me to follow my dreams.",
    "Is it hot in here or is it just you?",
    "Do you have a sunburn, or are you always this hot?",
    "Are you a time traveler? Because I can see you in my future.",
    "Do you have a pencil? Because I want to erase your past and write our future.",
    "Is your name Wi-Fi? Because I'm feeling a connection.",
    "Do you have a sunburn, or are you always this hot?",
    "Are you Australian? Because when I look at you, I feel like I'm down under.",
    "Are you a loan from a bank? Because you have my interest.",
    "Do you have a map? Because I keep getting lost in your eyes.",
    "Is your dad an artist? Because you're a masterpiece.",
    "Are you a camera? Because every time I look at you, I smile.",
    "Are you an electrician? Because you’re lighting up my life.",
    "If you were a vegetable, you'd be a cute-cumber.",
    "Do you have a name, or can I call you mine?",
    "Are you French? Because Eiffel for you.",
    "If you were a triangle, you’d be acute one.",
    "Is your name Google? Because you have everything I’ve been searching for.",
    "Do you have a map? Because I keep getting lost in your eyes.",
    "Are you a magician? Because whenever I look at you, everyone else disappears.",
    "If you were a fruit, you'd be a fineapple.",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you.",
    "Is there a sparkle in your eye, or are you just happy to see me?",
    "Are you an alien? Because you just abducted my heart.",
    "Can I follow you home? Because my parents always told me to follow my dreams.",
    "Is it hot in here or is it just you?",
    "Do you have a sunburn, or are you always this hot?",
    "Are you a time traveler? Because I can see you in my future.",
    "Do you have a pencil? Because I want to erase your past and write our future.",
    "Is your name Wi-Fi? Because I'm feeling a connection.",
    "Do you have a sunburn, or are you always this hot?",
    "Are you Australian? Because when I look at you, I feel like I'm down under.",
    "Are you a loan from a bank? Because you have my interest.",
    "Do you have a map? Because I keep getting lost in your eyes."
];

function generateRizz() {
    const rizzOutput = document.getElementById('rizzOutput');
    
    // Randomly select a Rizz quote
    const randomRizz = rizzQuotes[Math.floor(Math.random() * rizzQuotes.length)];
    
    // Display the Rizz quote
    rizzOutput.textContent = randomRizz;
}
