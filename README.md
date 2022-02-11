# Youtube-PiP-Script

```js
javascipt:!function(){const e=e=>{alert(`[!] ${e}`)},t=document.querySelector("video");window.location.href.includes("youtube.com/watch")?""===t.src?e("재생이 가능한 영상인지 확인해주세요."):t.webkitSupportsPresentationMode&&"function"==typeof t.webkitSetPresentationMode?t.webkitSetPresentationMode("picture-in-picture"===t.webkitPresentationMode?"inline":"picture-in-picture"):e("PiP 모드를 지원하지 않습니다."):e("'Youtube' 웹페이지에서 영상을 시청하며 실행해주세요.")}();
```


Copy the Script above and Save it as *BookMark* in `Safari`.


![IMG_0245](https://user-images.githubusercontent.com/66173558/153634198-64badcdf-169d-41f4-ae96-ad50b87a3eba.jpg)
