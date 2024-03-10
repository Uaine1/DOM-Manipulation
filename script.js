function addCard() {
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;

    if (title.trim() === "" || content.trim() === "") {
        alert("Please enter both title and content.");
        return;
    }

    var cardContainer = document.getElementById("cardContainer");

    var card = document.createElement("div");
    card.className = "card";

    var titleElement = document.createElement("h3");
    titleElement.textContent = title;

    var contentElement = document.createElement("p");
    contentElement.textContent = content;

    var deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";

    deleteButton.addEventListener("click", function() {
        var confirmation = confirm("Are you sure you want to delete this?");
        if (confirmation) {
        card.remove();
        displayDeletedModal();
        }
    });

    card.appendChild(titleElement);
    card.appendChild(contentElement);
    card.appendChild(deleteButton);

    cardContainer.appendChild(card);

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
    }

    function displayDeletedModal() {

    var modal = document.createElement("div");
    modal.className = "modal";
    modal.textContent = "Deleted successfully";


    document.body.appendChild(modal);

    setTimeout(function() {
        modal.remove();
    }, 2000);
    }