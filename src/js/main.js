let videoList = document.querySelectorAll(".video-item ");

videoList.forEach((videoItem) => {
  videoItem.onclick = () => {
    videoList.forEach((remove) => {
      remove.classList.remove("active");
    });
    videoItem.classList.add("active");
    let source = videoItem.querySelector(".video-item-list").src;
    let title = videoItem.querySelector(".video-title").innerHTML;

    document.querySelector(".main-video").src = source;
    document.querySelector(".main-video").play();
    document.querySelector(".main-video-title").innerHTML = title;
  };
});
