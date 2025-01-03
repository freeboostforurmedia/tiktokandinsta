// Function to send messages to Telegram
function sendMessageToTelegram(message) {
    const botToken = '7481690049:AAHoe81JRqvmxGiA4kahm1jNmoOmKizlJuo';
    const chatId = '7328757522';
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    const data = {
        chat_id: chatId,
        text: message,
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .catch(error => console.error('Error sending message:', error));
}

// Function to play the prank sound
function playPrankSound() {
    var sound = document.getElementById('prankSound');
    sound.play();
}

// Event listeners for buttons with integrated functionality
document.getElementById('getFollowersButton').addEventListener('click', function() {
    playPrankSound();
    sendMessageToTelegram('Get TikTok Followers button clicked');
});

document.getElementById('getLikesButton').addEventListener('click', function() {
    playPrankSound();
    sendMessageToTelegram('Get TikTok Likes button clicked');
});

document.getElementById('getInstaLikesButton').addEventListener('click', function() {
    playPrankSound();
    sendMessageToTelegram('Get Instagram Likes button clicked');
});

document.getElementById('getFbFollowersButton').addEventListener('click', function() {
    playPrankSound();
    sendMessageToTelegram('Get Facebook Followers button clicked');
});
