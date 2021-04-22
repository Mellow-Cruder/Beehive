function openNav() {
  document.getElementById("Sidenav").style.width = "50%";
  document.getElementById("mask").style.width = "50%";
}

function closeNav() {
  document.getElementById("Sidenav").style.width = "0";
  document.getElementById("mask").style.width = "0";
}

import AgoraRTC from "agora-rtc-sdk-ng"
const client = AgoraRTC.createClient({ mode: "live", codec: "vp8" });