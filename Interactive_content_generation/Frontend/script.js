document.getElementById("generate-btn").addEventListener("click", async () => {
  const keyword = document.getElementById("keyword").value;
  const response = await fetch("/generate-shayari", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ keyword }),
  });
  const data = await response.json();
  document.getElementById("shayari-display").textContent = data.shayari;
});
