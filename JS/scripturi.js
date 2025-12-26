document.addEventListener("DOMContentLoaded", function () {


    const main = document.getElementById("content");
    const bgBtn = document.getElementById("bgBtn"); // doar pagina1
    const openSurveyBtn = document.getElementById("openSurvey"); // doar pagina2
    const surveyModal = document.getElementById("surveyModal"); // doar pagina2
    const closeSurvey = surveyModal ? surveyModal.getElementsByClassName("close")[0] : null;


    if (bgBtn && main) {
        bgBtn.addEventListener("click", function () {
            main.style.backgroundColor = "#EBF7E3"; 
        });
    }

    const img1 = document.querySelector(".poza1");
    if (img1) {
        img1.addEventListener("mouseenter", () => img1.style.filter = "grayscale(100%)");
        img1.addEventListener("mouseleave", () => img1.style.filter = "grayscale(0%)");
    }

    const table = document.querySelector("table");
    if (table) {
        // Cream un container pentru buton
        const buttonContainer = document.createElement("div");
        buttonContainer.style.textAlign = "center";
        buttonContainer.style.margin = "20px 0";

        // Cream butonul
        const addParagraphsBtn = document.createElement("button");
        addParagraphsBtn.textContent = "Add paragraphs before and after the table";
        addParagraphsBtn.className = "survey-btn"; // folosim stil existent
        buttonContainer.appendChild(addParagraphsBtn);

        // Adaugam butonul inainte de tabel
        table.parentNode.insertBefore(buttonContainer, table);

        // Functia care adauga paragrafele
        addParagraphsBtn.addEventListener("click", function() {
            const pBefore = document.createElement("p");
            pBefore.textContent = "Paragraph added with JS before the table";
            table.parentNode.insertBefore(pBefore, table);

            const pAfter = document.createElement("p");
            pAfter.textContent = "Paragraph added with JS after the table";
            table.parentNode.insertBefore(pAfter, table.nextSibling);
        });
    }

/* =========================
   4. Formular nume + parola (doar pagina1)
   ========================= */
if (main && bgBtn) { // doar dacă suntem pe pagina1
    const authContainer = document.createElement("div");
    authContainer.id = "coffeeForm";
    authContainer.style.marginBottom = "30px";

    const authTitle = document.createElement("h3");
    authTitle.textContent = "User Authentication";

    const form = document.createElement("form");

    const user = document.createElement("input");
    user.placeholder = "Name";
    user.style.marginRight = "10px";

    const pass = document.createElement("input");
    pass.type = "password";
    pass.placeholder = "Password";
    pass.style.marginRight = "10px";

    const reg = document.createElement("button");
    reg.type = "button";
    reg.textContent = "Register";
    reg.className = "survey-btn";

    const login = document.createElement("button");
    login.type = "button";
    login.textContent = "Authentication";
    login.className = "survey-btn";

    // Creăm container modal pentru mesaj
    const msgModal = document.createElement("div");
    msgModal.style.position = "fixed";
    msgModal.style.top = "50%";
    msgModal.style.left = "50%";
    msgModal.style.transform = "translate(-50%, -50%)";
    msgModal.style.backgroundColor = "#EBF7E3"
    msgModal.style.color = "#375F1B";
    msgModal.style.padding = "20px 30px";
    msgModal.style.borderRadius = "10px";
    msgModal.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
    msgModal.style.display = "none";
    msgModal.style.zIndex = "1000";
    msgModal.style.textAlign = "center";
    document.body.appendChild(msgModal);

    function showMsg(text) {
        msgModal.textContent = text;
        msgModal.style.display = "block";
        setTimeout(() => {
            msgModal.style.display = "none";
        }, 2000);
    }

    reg.onclick = () => {
        localStorage.setItem("user", user.value);
        localStorage.setItem("pass", pass.value);
        showMsg("Succesful registration!");
    };

    login.onclick = () => {
        if (
            user.value === localStorage.getItem("user") &&
            pass.value === localStorage.getItem("pass")
        ) {
            showMsg("Welcome!");
        } else {
            showMsg("Invalid data!");
        }
    };

    form.append(user, pass, reg, login);
    authContainer.append(authTitle, form);

    main.prepend(authContainer);
}


    if(openSurveyBtn && surveyModal && closeSurvey) {
        openSurveyBtn.addEventListener("click", function() {
            surveyModal.style.display = "block";
        });

        closeSurvey.addEventListener("click", function() {
            surveyModal.style.display = "none";
        });

        window.addEventListener("click", function(event) {
            if(event.target == surveyModal) {
                surveyModal.style.display = "none";
            }
        });
    }

});
