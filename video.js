// การเปิดป๊อปอัพวิดีโอ
document.querySelector('.open-video-btn').addEventListener('click', function() {
    document.getElementById('video-popup').style.display = 'flex';
    var video = document.getElementById('myVideo');
    video.play(); // เล่นวิดีโอเมื่อป๊อปอัพเปิด
});

  // การปิดป๊อปอัพวิดีโอเมื่อคลิกปุ่มปิด
document.querySelector('.close-btn').addEventListener('click', function() {
    var popup = document.getElementById('video-popup');
    var video = document.getElementById('myVideo');
    popup.style.display = 'none';
    video.pause(); // หยุดวิดีโอเมื่อปิดป๊อปอัพ
    video.currentTime = 0; // ตั้งเวลาเริ่มต้นของวิดีโอเป็น 0
});

  // การปิดป๊อปอัพเมื่อคลิกภายนอกเนื้อหาวิดีโอ
window.addEventListener('click', function(event) {
    var popup = document.getElementById('video-popup');
    var videoContent = document.querySelector('.video-content');
    var video = document.getElementById('myVideo');
    
    if (event.target === popup && !videoContent.contains(event.target)) {
        popup.style.display = 'none';
        video.pause(); // หยุดวิดีโอเมื่อคลิกภายนอก
        video.currentTime = 0; // ตั้งเวลาเริ่มต้นของวิดีโอเป็น 0
    }
});
