const continueBtn = document.getElementById("continueBtn");
const aiThinking = document.getElementById("aiThinking");
const aiText = document.getElementById("aiText");
const aiResults = document.getElementById("aiResults");

function runAIProcess() {
    aiThinking.classList.remove("hidden");
    aiResults.classList.add("hidden");
    continueBtn.disabled = true;

    // Step 1
    aiText.textContent = "CivicSense AI Checking the Text..";

    setTimeout(() => {
        // Step 2
        aiText.textContent = "CivicSense AI Assigning Category..";

        setTimeout(() => {
            // Step 3
            aiText.textContent = "CivicSense AI Giving Priority..";

            setTimeout(() => {
                aiThinking.classList.add("hidden");
                aiResults.classList.remove("hidden");

                document.getElementById("category").value = "Water";
                document.getElementById("priority").value = "Medium";

                // 🔁 Change button to Retry
                continueBtn.textContent = "Retry with AI";
                continueBtn.disabled = false;

            }, 2000);
        }, 2000);
    }, 2000);
}

continueBtn.addEventListener("click", function () {
    const description = document.getElementById("description").value.trim();

    if (!description) {
        alert("Please enter a complaint description first.");
        return;
    }

    runAIProcess();
});