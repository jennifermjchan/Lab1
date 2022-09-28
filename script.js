window.onload = () => {

    document.getElementById("submitButton").addEventListener("click", (event) => {

        const btn = document.getElementById("submitButton");
        btn.classList.add("button--loading");

        setTimeout(() => {
          btn.classList.remove("button--loading");
        }, 3000);

        setTimeout(() => {
          const contactName = document.getElementById('name').value;
          const contactEmail = document.getElementById('email').value;
          window.alert(`Hi, ${contactName}! Is this the right email to reach you: ${contactEmail}?`);
        }, 3000);
      });

}