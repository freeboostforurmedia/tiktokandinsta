
document.getElementById('getFollowersButton').addEventListener('click', playPrankSound);
document.getElementById('getLikesButton').addEventListener('click', playPrankSound);
document.getElementById('getInstaLikesButton').addEventListener('click', playPrankSound);
document.getElementById('getFbFollowersButton').addEventListener('click', playPrankSound);

function playPrankSound() {
    var sound = document.getElementById('prankSound');
    sound.play();
}


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

function playPrankSound() {
    var sound = document.getElementById('prankSound');
    sound.play();
}
