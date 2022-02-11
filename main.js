javascript:(function() {
    console.log('@EliF-Lee - Youtube PiP Script');
    const error = (err, detail) => {
        console.log(`[Youtube PiP Script]\n${detail}`);
        alert(`[!] ${err}`);
    }
    const video = document.querySelector('video');
    if (!window.location.href.includes('youtube.com/watch')) {
        return error(`'Youtube' 웹페이지에서 영상을 시청하며 실행해주세요.`, `Request Host - ${window.location.hostname}`);
    }
    if (video.src === '') {
        return error('재생이 가능한 영상인지 확인해주세요.', `Can't get Video src`);
    }
    if (!video.webkitSupportsPresentationMode || typeof video.webkitSetPresentationMode !== "function") {
        return error('PiP 모드를 지원하지 않습니다.', `Webkit doesn't Supports PiP`);
    }
    video.webkitSetPresentationMode(video.webkitPresentationMode === 'picture-in-picture' ? 'inline' : 'picture-in-picture');
})();
