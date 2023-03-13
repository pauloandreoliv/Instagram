function verReels() {
  document.getElementById("publicacoes").style.display = "none";
  document.getElementById("item_publicacoes").style.cssText="border: none; font-weight: 0;";
  document.getElementById("item_reels").style.cssText="border-top: 1px solid black; font-weight: bold;";
  document.getElementById("reels").style.display = "block";
}

function verPublicacoes() {
  document.getElementById("publicacoes").style.display = "block";
  document.getElementById("item_reels").style.cssText="border-top: none; font-weight: 0;";
  document.getElementById("item_publicacoes").style.cssText="border-top: 1px solid black; font-weight: bold;";
  document.getElementById("reels").style.display = "none";
}