document.addEventListener("DOMContentLoaded", () => {
    fetch("sermons/sermons.json")
      .then(response => response.json())
      .then(data => displaySermons(data))
      .catch(error => {
        document.getElementById("sermon-list").innerHTML = "<p>Error loading sermons.</p>";
        console.error("Error loading sermons:", error);
      });
  });
  
  function displaySermons(sermons) {
    const container = document.getElementById("sermon-list");
    sermons.forEach(sermon => {
      const sermonCard = document.createElement("div");
      sermonCard.classList.add("sermon-card");
  
      sermonCard.innerHTML = `
        <h2>${sermon.title}</h2>
        <p><strong>Date:</strong> ${sermon.date}</p>
        <p><strong>Preacher:</strong> ${sermon.preacher}</p>
        <div class="video-wrapper">
          <iframe src="${sermon.video}" frameborder="0" allowfullscreen></iframe>
        </div>
      `;
  
      container.appendChild(sermonCard);
    });
  }
  