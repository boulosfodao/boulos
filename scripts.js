document.addEventListener('DOMContentLoaded', function() {
    const videoItems = document.querySelectorAll('.video-item');

    videoItems.forEach(item => {
        item.addEventListener('click', function() {
            const videoId = this.getAttribute('data-video-id');
            window.open(`player.html?video=${videoId}`, '_blank');
        });
    });

    const urlParams = new URLSearchParams(window.location.search);
    const videoId = urlParams.get('video');
    if (videoId) {
        const videoPlayer = document.getElementById('videoPlayer');
        videoPlayer.src = `https://www.youtube.com/embed/${videoId}`;
    }
});

function searchVideos() {
    const input = document.getElementById('search');
    const filter = input.value.toLowerCase();
    const videoItems = document.querySelectorAll('.video-item');

    videoItems.forEach(item => {
        const text = item.querySelector('p').textContent.toLowerCase();
        item.style.display = text.includes(filter) ? '' : 'none';
    });
}
