
        // Fonction pour gérer l'onglet actif
        function showSection(id) {
            document.querySelectorAll('section').forEach((section) => {
                section.classList.remove('active');
            });
            document.getElementById(id).classList.add('active');
        }

        // Fonction pour afficher la liste déroulante
        function toggleDropdown() {
            const dropdown = document.getElementById("dropdown");
            dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
        }
		    // Fonction pour afficher les sections lorsque les boutons sont cliqués
    function showSection(sectionId) {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.classList.remove('active');
        });
        const activeSection = document.getElementById(sectionId);
        activeSection.classList.add('active');
    }

    // Fonction pour mettre à jour les statistiques des jeux en fonction des soumissions
    // (implémentation d'un formulaire et ajout d'une proposition d'idée à la base de données)
    function updateGameStatistics() {
        // Pour le moment, les valeurs sont statiques. Vous pourriez les incrémenter à partir d'un formulaire.
        const gamesInProgress = document.getElementById('games-in-progress');
        const gamesFinished = document.getElementById('games-finished');
        const communityIdeas = document.getElementById('community-ideas');
; 
        // Exemple d'incrémentation
        gamesInProgress.textContent = parseInt(gamesInProgress.textContent) + 1;
        communityIdeas.textContent = parseInt(communityIdeas.textContent) + 1;
    }

    // Exemple de mise à jour en temps réel du nombre de membres Discord
    function updateDiscordMembers() {
        const discordMemberCount = document.getElementById('discord-member-count');

        // Logique pour mettre à jour le nombre de membres du Discord (API Discord à intégrer)
        // Exemple statique :
        discordMemberCount.textContent = 24; // Exemple de nombre
    }

    // Initialisation des mises à jour
    updateDiscordMembers();
    setInterv(updateDiscordMembers, 60000); // Met à jour toutes les minutes
  // Fonction JS pour une animation d'entrée de texte
    window.onload = function() {
        const comingSoon = document.querySelector('.coming-soon span');
        comingSoon.classList.add('active');
    };

    // Fonction pour gérer la navigation entre sections (si vous avez plusieurs sections)
    function showSection(sectionId) {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => section.style.display = 'none');
        document.getElementById(sectionId).style.display = 'block';
    }
	
// Fonction pour ouvrir la fenêtre latérale avec des détails et une galerie
function openSidePanel(project) {
    const sidePanel = document.getElementById("sidePanel");
    const title = document.getElementById("projectTitle");
    const description = document.getElementById("projectDescription");
    const gallery = document.getElementById("projectGallery");

    // Contenu personnalisé pour chaque projet
    let galleryContent = ""; // Initialisation de la galerie pour chaque projet

    switch (project) {
        case "The Dark Stone":
            title.innerText = "The Dark Stone";
            description.innerHTML = "<p>Un artefact mystérieux découvert dans une caverne.</p>";
            galleryContent = `
                <img src="Ressources/Images/the_dark_stone.webp" alt="Dark Stone Image 1">
            `;
            break;
        case "Personnage Principal":
            title.innerText = "Personnage Principal";
            description.innerHTML = "<p>Le héros courageux qui guide l'histoire.</p>";
            galleryContent = `
                <img src="Ressources/Images/PP.webp" alt="Hero Image 1">
            `;
            break;
        case "Mob":
            title.innerText = "Mob";
            description.innerHTML = "<p>Un monstre qui bloque votre chemin.</p>";
            galleryContent = `
                <img src="Ressources/yepyep/dragon V1.png" alt="Mob Image 1">
                <img src="Ressources/yepyep/Monstre anim CroqueV2.png" alt="Mob Image 2">
				<img src="Ressources/Images/Monstre crabe de base.png" alt="Mob Image 2">
				<img src="Ressources/yepyep/monstre nuage.png" alt="Mob Image 2">
            `;
            break;
        case "Armes":
            title.innerText = "Armes";
            description.innerHTML = "<p>Armes puissantes pour défendre le royaume.</p>";
            galleryContent = `
                <img src="Ressources/yepyep/hache .png" alt="Weapon Image 1">
                <img src="Ressources/Images/epee.png" alt="Weapon Image 2">
            `;
            break;
        case "Accessoires":
            title.innerText = "Accessoires";
            description.innerHTML = "<p>Des accessoires pour améliorer vos compétences.</p>";
            galleryContent = `
                <img src="Ressources/yepyep/piece bleue .png" alt="Accessory Image 1">
                <img src="Ressources/yepyep/Pierre .png" alt="Accessory Image 2">
            `;
            break;
        default:
            title.innerText = "Informations Complémentaires";
            description.innerHTML = "<p>Sélectionnez un projet dans la liste pour voir plus de détails.</p>";
            galleryContent = ""; // Pas de galerie pour le cas par défaut
            break;
    }

    // Insère le contenu de la galerie
    gallery.innerHTML = galleryContent;

    // Ouvre la fenêtre latérale
    sidePanel.classList.add("show");

    // Ajoute un écouteur pour fermer en cliquant ailleurs
    setTimeout(() => {
        document.addEventListener("click", closeOnClickOutside);
    }, 100); // Délai pour éviter de déclencher la fermeture immédiatement
}

// Fonction pour fermer la fenêtre latérale
function closeSidePanel() {
    const sidePanel = document.getElementById("sidePanel");
    sidePanel.classList.remove("show");

    // Supprime l'écouteur une fois fermé
    document.removeEventListener("click", closeOnClickOutside);
}

// Fonction pour fermer la fenêtre en cliquant à l'extérieur
function closeOnClickOutside(event) {
    const sidePanel = document.getElementById("sidePanel");
    if (!sidePanel.contains(event.target) && !event.target.closest(".image-containerv2")) {
        closeSidePanel();
    }
}

