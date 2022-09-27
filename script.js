window.onload = () => {

    document.getElementById("contactForm").addEventListener("submit", (event) => {
        const contactName = document.contactForm.name.value;
        const contactEmail = document.contactForm.email.value;
        window.alert(`Hi, ${contactName}! Is this the right email to reach you: ${contactEmail}?`);
        event.preventDefault();
        console.log('testing');

      });

      console.log('hello')

}