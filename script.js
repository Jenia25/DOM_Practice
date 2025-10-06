// 1. hide or show Text
function toggleText() {
  const p = document.getElementById("toggleText");
  p.style.display = (p.style.display === "none") ? "block" : "none";
}

// 2. Show Text from Input
function showText() {
  const input = document.getElementById("textInput").value;
  document.getElementById("textOutput").innerText = input;
}

// 3. Add & Delete Items
function addItem() {
  const input = document.getElementById("itemInput");
  const value = input.value.trim();
  if (value === "") return;

  const li = document.createElement("li");
  li.textContent = value + " ";

  const btn = document.createElement("button");
  btn.textContent = "Delete";
  btn.onclick = () => li.remove();

  li.appendChild(btn);
  document.getElementById("itemList").appendChild(li);
  input.value = "";
}

// 4. next and previous
const pages = [
  "This is Page 1 content.",
  "This is Page 2 content.",
  "This is Page 3 content.",
];
let currentIndex = 0;

function showPage() {
  document.getElementById("pageContent").innerText = pages[currentIndex];
}
function nextPage() {
  if (currentIndex < pages.length - 1) currentIndex++;
  showPage();
}
function prevPage() {
  if (currentIndex > 0) currentIndex--;
  showPage();
}
showPage(); // Initial load

// 5. Hide/Show Image
function toggleImage() {
  const img = document.getElementById("toggleImage");
  img.style.display = (img.style.display === "none") ? "block" : "none";
}

// 6. Live Typing Preview
function livePreview() {
  const value = document.getElementById("liveInput").value;
  document.getElementById("liveOutput").innerText = value;
}
