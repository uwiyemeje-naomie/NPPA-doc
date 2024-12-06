// Array of logo data
const logoData = {
    nppaLogo: "file:///C:/Users/HP-/AppData/Local/Temp/Rar$DIa13072.37490/nppa_logo_small.svg",
    coatOfArms: "file:///C:/Users/HP-/AppData/Local/Temp/Rar$DIa13072.24508/Coat_of_arms_of_Rwanda.svg",
    languageIcon: "file:///C:/Users/HP-/AppData/Local/Temp/Rar$DIa13072.529/gb.svg"
};

// Function to dynamically insert logos
const insertLogos = () => {
    // Insert NPPA Logo in header
    const logoSection = document.getElementById("logo-section");
    const nppaLogo = document.createElement("img");
    nppaLogo.src = logoData.nppaLogo;
    nppaLogo.alt = "NPPA Logo";
    logoSection.appendChild(nppaLogo);

    const logoTitle = document.createElement("h1");
    logoTitle.textContent = "NPPA Sex Offenders Registry";
    logoSection.appendChild(logoTitle);

    // Insert language icon in header
    const languageIcon = document.getElementById("language-icon");
    languageIcon.src = logoData.languageIcon;

    // Insert Coat of Arms in footer
    const footerLogo = document.getElementById("footer-logo");
    const coatOfArms = document.createElement("img");
    coatOfArms.src = logoData.coatOfArms;
    coatOfArms.alt = "Rwanda Coat of Arms";
    footerLogo.appendChild(coatOfArms);
};

// Call the function to insert logos
insertLogos();