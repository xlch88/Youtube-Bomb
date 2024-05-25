// ==UserScript==
// @name         Youtube真正100%音量
// @namespace    https://github.com/xlch88/Youtube-Bomb
// @author       Dark495 (https://dark495.me/)
// @version      2024-02-03
// @license      WTFPL
// @description  Youtube播放器的音量条拖到最大的实际音量值为优化后的结果，并不是100%。用这个脚本可以在你将音量条拖拽到最右侧时给你开到真正百分百的音量。（注：请谨慎使用本脚本，注意用耳健康。Youtube这样做是为了保证每个视频的音量均衡，部分视频可能并不适合使用此脚本的方法暴力提升至100%）
// @author       Dark495
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// @downloadURL https://update.greasyfork.org/scripts/486375/Youtube%E7%9C%9F%E6%AD%A3100%25%E9%9F%B3%E9%87%8F.user.js
// @updateURL https://update.greasyfork.org/scripts/486375/Youtube%E7%9C%9F%E6%AD%A3100%25%E9%9F%B3%E9%87%8F.meta.js
// ==/UserScript==

(function() {
    'use strict';

    let needMaxVolume = false;
    let player;
    let volumePanel;
    let volumeSlider;

    function setVolume(){
        if(parseInt(volumePanel.getAttribute('aria-valuenow')) === 100){
            volumeSlider.style.backgroundColor = "red";
            if(player.volume !== 1){
                player.volume = 1;
                console.log("[Youtube真正100%音量] 设置成功！", player, parseInt(volumePanel.getAttribute('aria-valuenow')));
            }
        }else{
            volumeSlider.style.backgroundColor = "white";
        }
    }

    setInterval(()=>{
        player = document.getElementsByClassName('video-stream')[0];
        volumePanel = document.getElementsByClassName('ytp-volume-panel')[0];
        volumeSlider = document.getElementsByClassName('ytp-volume-slider-handle')[0];

        if(player && volumePanel && volumeSlider){
            if(!player.isHookMaxVolume){
                player.addEventListener("volumechange", ()=>{
                    setVolume();
                });
                player.isHookMaxVolume = true;
            }

            setVolume();
        }
    }, 1000);
})();
