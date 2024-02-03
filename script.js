// ==UserScript==
// @name         Youtube真正100%音量
// @namespace    https://github.com/xlch88/Youtube-Bomb
// @author       Dark495 (https://dark495.me/)
// @version      2024-02-03
// @license      WTFPL
// @description  Youtube播放器的音量条拖到最大的实际音量值为优化后的结果，并不是100%。用这个脚本可以在你将音量条拖拽到最右侧时给你开到真正百分百的音量。（注：请谨慎使用本脚本，注意用耳健康。Youtube这样做是为了保证每个视频的音量均衡，部分视频可能并不适合使用此脚本的方法暴力提升至100%）
// @author       Dark495
// @match        https://www.youtube.com/watch*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setInterval(()=>{
        let player = document.getElementsByClassName('video-stream');
        let volumePanel = document.getElementsByClassName('ytp-volume-panel');
        if(player.length > 0 && volumePanel.length > 0){
            if(parseInt(volumePanel[0].getAttribute('aria-valuenow')) === 100 && player[0].volume !== 1){
                player[0].volume = 1;
                console.log("设置成功！", player);
            }
        }
    }, 100);
})();
