// Gestion du menu hamburger
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    if (burger && navLinks) {
        // Gérer le clic sur le burger
        burger.addEventListener('click', (e) => {
            e.stopPropagation(); // Empêcher la propagation du clic
            navLinks.classList.toggle('active');
            burger.classList.toggle('active');
            body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });

        // Fermer le menu lorsqu'un lien est cliqué
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                burger.classList.remove('active');
                body.style.overflow = '';
            });
        });

        // Fermer le menu si on clique en dehors
        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !burger.contains(e.target)) {
                navLinks.classList.remove('active');
                burger.classList.remove('active');
                body.style.overflow = '';
            }
        });
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation highlight
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Fonction pour gérer l'envoi du formulaire de contact
function sendEmail(event) {
    event.preventDefault();
    
    // Récupérer les valeurs du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Vérification simple de validation
    if (!name || !email || !message) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return false;
    }
    
    // Simulation d'envoi d'email (à remplacer par un vrai service comme EmailJS ou une API de backend)
    alert(`Merci pour votre message, ${name}! Nous vous contacterons bientôt.`);
    
    // Réinitialiser le formulaire
    document.getElementById('contactForm').reset();
    
    return false;
}

// Lazy loading for images
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => imageObserver.observe(img));
});

// Données du menu intégrées
const menuData = {
    "entrées": [
        {
            "name": "Salade Congolaise",
            "description": "Une salade fraîche avec des légumes locaux et une vinaigrette spéciale.",
            "price": 8.00
        },
        {
            "name": "Sambusa",
            "description": "Pâtisseries frites farcies de viande épicée.",
            "price": 5.00
        },
        {
            "name": "Boulettes de Poulet",
            "description": "Boulettes de poulet frites avec une sauce spéciale.",
            "price": 10.00
        },
        {
            "name": "Brochettes de Bœuf",
            "description": "Brochettes de bœuf marinées et grillées.",
            "price": 12.00
        },
        {
            "name": "Soupe de Poisson",
            "description": "Soupe épicée avec du poisson frais.",
            "price": 9.00
        },
        {
            "name": "Avocat Farci",
            "description": "Avocat garni de crevettes et de sauce cocktail.",
            "price": 11.00
        },
        {
            "name": "Crevettes à l'Ail",
            "description": "Crevettes sautées à l'ail et au persil.",
            "price": 13.00
        },
        {
            "name": "Calamars Frits",
            "description": "Calamars frits servis avec une sauce tartare.",
            "price": 14.00
        },
        {
            "name": "Salade de Chou",
            "description": "Salade de chou croquante avec une vinaigrette crémeuse.",
            "price": 7.00
        },
        {
            "name": "Bruschetta",
            "description": "Pain grillé garni de tomates fraîches et de basilic.",
            "price": 6.00
        }
    ],
    "plats_principaux": [
        {
            "name": "Poulet Moambe",
            "description": "Poulet mijoté dans une sauce à base de noix de palme.",
            "price": 15.00
        },
        {
            "name": "Poulet mayonnaise",
            "description": "Poulet mayonnaise",
            "price": 16.00
        },
        {
            "name": "Taba",
            "description": "Taba",
            "price": 16.00
        },
        {
            "name": "Ngulu",
            "description": "Ngulu",
            "price": 20.00
        },
        {
            "name": "Poisson Grillé",
            "description": "Poisson frais grillé avec des épices africaines.",
            "price": 18.00
        },
        {
            "name": "Mafé de Bœuf",
            "description": "Bœuf mijoté dans une sauce à base de pâte d'arachide.",
            "price": 17.00
        },
        {
            "name": "Riz Jollof",
            "description": "Riz épicé cuit avec des tomates et des légumes.",
            "price": 14.00
        },
        {
            "name": "Yassa de Poulet",
            "description": "Poulet mariné dans une sauce à base de citron et d'oignons.",
            "price": 16.00
        },
        {
            "name": "Saka Saka",
            "description": "Feuilles de manioc cuites avec des épices.",
            "price": 13.00
        },
        {
            "name": "Couscous Royal",
            "description": "Couscous servi avec un assortiment de viandes et de légumes.",
            "price": 20.00
        },
        {
            "name": "Agneau Grillé",
            "description": "Agneau grillé aux herbes de Provence.",
            "price": 22.00
        },
        {
            "name": "Tilapia au Four",
            "description": "Tilapia cuit au four avec des herbes et du citron.",
            "price": 19.00
        },
        {
            "name": "Ragoût de Légumes",
            "description": "Ragoût de légumes de saison mijoté avec des épices.",
            "price": 12.00
        }
    ],
    "desserts": [
        {
            "name": "Beignets",
            "description": "Beignets sucrés servis avec du miel.",
            "price": 6.00
        },
        {
            "name": "Tarte à la Mangue",
            "description": "Tarte faite maison avec des mangues fraîches.",
            "price": 7.00
        },
        {
            "name": "Gâteau au Chocolat",
            "description": "Gâteau moelleux au chocolat noir.",
            "price": 8.00
        },
        {
            "name": "Crème Brûlée",
            "description": "Crème à la vanille avec une croûte de sucre caramélisé.",
            "price": 9.00
        },
        {
            "name": "Salade de Fruits",
            "description": "Mélange de fruits frais de saison.",
            "price": 5.00
        },
        {
            "name": "Glace à la Vanille",
            "description": "Glace crémeuse à la vanille.",
            "price": 4.00
        },
        {
            "name": "Mousse au Chocolat",
            "description": "Mousse légère au chocolat noir.",
            "price": 7.00
        },
        {
            "name": "Tiramisu",
            "description": "Dessert italien classique avec du café et du mascarpone.",
            "price": 8.00
        },
        {
            "name": "Panna Cotta",
            "description": "Crème cuite servie avec un coulis de fruits rouges.",
            "price": 6.00
        },
        {
            "name": "Sorbet Citron",
            "description": "Sorbet rafraîchissant au citron.",
            "price": 5.00
        }
    ],
    "boissons": [
        {
            "name": "Jus de Bissap",
            "description": "Boisson rafraîchissante à base de fleurs d'hibiscus.",
            "price": 4.00
        },
        {
            "name": "Thé Gingembre",
            "description": "Thé épicé au gingembre et citron.",
            "price": 3.00
        },
        {
            "name": "Café Africain",
            "description": "Café fort et aromatique.",
            "price": 3.50
        },
        {
            "name": "Smoothie Mangue",
            "description": "Smoothie frais à la mangue.",
            "price": 5.00
        },
        {
            "name": "Limonade Maison",
            "description": "Limonade fraîche faite maison.",
            "price": 3.00
        },
        {
            "name": "Eau Minérale",
            "description": "Eau minérale naturelle.",
            "price": 2.00
        },
        {
            "name": "Primus",
            "description": "Bière populaire de Bralima.",
            "price": 5.00
        },
        {
            "name": "Turbo King",
            "description": "Bière brune de Bracongo.",
            "price": 5.50
        },
        {
            "name": "Skol",
            "description": "Bière légère de Bracongo.",
            "price": 4.50
        },
        {
            "name": "Mützig",
            "description": "Bière premium de Bralima.",
            "price": 6.00
        }
    ]
};

// Afficher les données du menu
const categories = Object.keys(menuData);

categories.forEach(category => {
    const categoryElement = document.querySelector(`.category[data-category="${category}"] .menu-items`);
    if (categoryElement) {
        menuData[category].forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('menu-item');

            const nameElement = document.createElement('span');
            nameElement.classList.add('menu-item-name');
            nameElement.textContent = item.name;

            const priceElement = document.createElement('span');
            priceElement.classList.add('menu-item-price');
            priceElement.textContent = `$${item.price.toFixed(2)}`;

            const descriptionElement = document.createElement('div');
            descriptionElement.classList.add('menu-item-description');
            descriptionElement.textContent = item.description;

            itemElement.appendChild(nameElement);
            itemElement.appendChild(priceElement);
            categoryElement.appendChild(itemElement);
            categoryElement.appendChild(descriptionElement);
        });
    }
});

// Accordéon pour les sections du menu
const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', function() {
        this.classList.toggle('active');
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });
});

// Fonction pour filtrer les éléments du menu
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.menu-search');
    const minPriceInput = document.getElementById('min-price');
    const maxPriceInput = document.getElementById('max-price');
    const applyFilterButton = document.getElementById('apply-filter');
    const resetFilterButton = document.getElementById('reset-filter');

    // Fonction pour filtrer les éléments du menu
    function filterMenuItems() {
        const searchQuery = searchInput.value.toLowerCase();
        const minPrice = minPriceInput.value ? parseFloat(minPriceInput.value) : 0;
        const maxPrice = maxPriceInput.value ? parseFloat(maxPriceInput.value) : Infinity;

        // Pour chaque catégorie
        Object.keys(menuData).forEach(category => {
            const categoryElement = document.querySelector(`.category[data-category="${category}"]`);
            if (categoryElement) {
                const menuItems = categoryElement.querySelectorAll('.menu-item');
                const descriptions = categoryElement.querySelectorAll('.menu-item-description');
                
                // Pour chaque élément du menu dans cette catégorie
                menuItems.forEach((item, index) => {
                    const name = item.querySelector('.menu-item-name').textContent.toLowerCase();
                    const description = descriptions[index] ? descriptions[index].textContent.toLowerCase() : '';
                    const priceText = item.querySelector('.menu-item-price').textContent;
                    const price = parseFloat(priceText.replace('$', ''));
                    
                    // Filtrer par texte et par prix
                    const matchesText = name.includes(searchQuery) || description.includes(searchQuery);
                    const matchesPrice = price >= minPrice && price <= maxPrice;
                    
                    if (matchesText && matchesPrice) {
                        item.style.display = '';
                        if (descriptions[index]) descriptions[index].style.display = '';
                    } else {
                        item.style.display = 'none';
                        if (descriptions[index]) descriptions[index].style.display = 'none';
                    }
                });
            }
        });
    }

    // Événements pour le filtrage
    if (searchInput) {
        searchInput.addEventListener('input', filterMenuItems);
    }

    if (applyFilterButton) {
        applyFilterButton.addEventListener('click', filterMenuItems);
    }

    if (resetFilterButton) {
        resetFilterButton.addEventListener('click', function() {
            if (minPriceInput) minPriceInput.value = '';
            if (maxPriceInput) maxPriceInput.value = '';
            if (searchInput) searchInput.value = '';
            filterMenuItems();
        });
    }

    // Écouter les changements de prix lorsque l'utilisateur appuie sur Entrée
    [minPriceInput, maxPriceInput].forEach(input => {
        if (input) {
            input.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    filterMenuItems();
                }
            });
        }
    });
});

// Variables pour la réservation
let reservationDetails = {};

// Gestion de la modal de réservation
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('reservation-modal');
    const reservationBtn = document.getElementById('reservation-btn');
    const closeBtn = document.querySelector('.close-modal');
    
    // Ouvrir la modal lorsqu'on clique sur le bouton réserver
    if (reservationBtn) {
        reservationBtn.addEventListener('click', function() {
            openModal();
        });
    }
    
    // Fermer la modal lorsqu'on clique sur le X
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            closeModal();
        });
    }
    
    // Fermer la modal lorsqu'on clique à l'extérieur
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Empêcher la fermeture lors du clic sur le contenu de la modal
    if (modal) {
        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.addEventListener('click', function(event) {
                event.stopPropagation();
            });
        }
    }
    
    // Initialiser la date du formulaire à aujourd'hui
    const dateInput = document.getElementById('reserve-date');
    if (dateInput) {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        
        const formattedDate = `${yyyy}-${mm}-${dd}`;
        dateInput.setAttribute('min', formattedDate);
        dateInput.value = formattedDate;
    }
    
    // Auto-remplir le téléphone de paiement si le téléphone est déjà saisi
    const phoneInput = document.getElementById('reserve-phone');
    const paymentPhoneInput = document.getElementById('payment-phone');
    
    if (phoneInput && paymentPhoneInput) {
        phoneInput.addEventListener('change', function() {
            paymentPhoneInput.value = this.value;
        });
    }
});

// Fonctions pour ouvrir/fermer la modal
function openModal() {
    const modal = document.getElementById('reservation-modal');
    if (modal) {
        modal.style.display = 'block';
        // Force reflow pour permettre la transition
        void modal.offsetWidth;
        modal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Empêcher le scroll
        
        // S'assurer que l'étape 1 est visible et les autres cachées
        showStep(1);
    }
}

function closeModal() {
    const modal = document.getElementById('reservation-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(function() {
            modal.style.display = 'none';
            document.body.style.overflow = ''; // Réactiver le scroll
            
            // Réinitialiser le formulaire et les étapes
            document.getElementById('reservationForm').reset();
            reservationDetails = {};
        }, 300); // Attendre la fin de la transition
    }
}

// Fonctions pour la navigation entre les étapes
function showStep(stepNumber) {
    document.querySelectorAll('.reservation-step').forEach(step => {
        step.style.display = 'none';
    });
    document.getElementById(`step-${stepNumber}`).style.display = 'block';
}

// Passer à l'étape de paiement
function goToPayment() {
    // Valider le formulaire d'informations
    const name = document.getElementById('reserve-name').value;
    const phone = document.getElementById('reserve-phone').value;
    const date = document.getElementById('reserve-date').value;
    const time = document.getElementById('reserve-time').value;
    const guests = document.getElementById('reserve-guests').value;
    
    if (!name || !phone || !date || !time || !guests) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
    }
    
    // Stocker les détails de réservation
    reservationDetails = {
        name: name,
        phone: phone,
        email: document.getElementById('reserve-email').value,
        date: date,
        time: time,
        guests: guests,
        notes: document.getElementById('reserve-notes').value,
    };
    
    // Remplir automatiquement le numéro de téléphone pour le paiement
    document.getElementById('payment-phone').value = phone;
    
    // Passer à l'étape de paiement
    showStep(2);
}

// Revenir à l'étape des détails
function backToDetails() {
    showStep(1);
}

// Traiter le paiement
function processPayment() {
    const paymentPhone = document.getElementById('payment-phone').value;
    
    if (!paymentPhone) {
        alert('Veuillez entrer votre numéro de téléphone pour le paiement.');
        return;
    }
    
    // Récupérer la méthode de paiement sélectionnée
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
    
    // En production, ici vous appelleriez une API de paiement
    // Pour cette démonstration, nous simulons une réponse réussie
    
    // Simuler le traitement du paiement
    const paymentBtn = document.querySelector('.payment-options .submit-button');
    const originalText = paymentBtn.textContent;
    paymentBtn.disabled = true;
    paymentBtn.textContent = 'Traitement en cours...';
    
    setTimeout(function() {
        // Mise à jour des détails de réservation avec les infos de paiement
        reservationDetails.paymentMethod = paymentMethod;
        reservationDetails.paymentPhone = paymentPhone;
        reservationDetails.paymentAmount = '50$';
        reservationDetails.paymentDate = new Date().toLocaleString('fr-FR');
        
        // Afficher la confirmation
        showConfirmation();
        
        // Réinitialiser le bouton
        paymentBtn.disabled = false;
        paymentBtn.textContent = originalText;
    }, 2000);
}

// Afficher la confirmation
function showConfirmation() {
    // Formater la date pour un affichage plus lisible
    const formattedDate = new Date(reservationDetails.date + 'T' + reservationDetails.time).toLocaleString('fr-FR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    
    // Créer le contenu de la confirmation
    const confirmationDetails = document.getElementById('confirmation-details');
    confirmationDetails.innerHTML = `
        <p><strong>Nom:</strong> ${reservationDetails.name}</p>
        <p><strong>Téléphone:</strong> ${reservationDetails.phone}</p>
        <p><strong>Date et heure:</strong> ${formattedDate}</p>
        <p><strong>Nombre de personnes:</strong> ${reservationDetails.guests}</p>
        <p><strong>Garantie payée:</strong> ${reservationDetails.paymentAmount} via ${reservationDetails.paymentMethod}</p>
        <p><strong>Numéro de référence:</strong> ${generateReferenceNumber()}</p>
    `;
    
    // Passer à l'étape de confirmation
    showStep(3);
}

// Générer un numéro de référence aléatoire
function generateReferenceNumber() {
    return 'RES-' + Math.random().toString(36).substring(2, 8).toUpperCase();
}

// Gestion du menu de navigation mobile
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Fonction pour basculer le menu
    function toggleMenu() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    }

    // Gestionnaire d'événement pour le bouton hamburger
    if (navToggle) {
        navToggle.addEventListener('click', toggleMenu);
    }

    // Fermer le menu quand un lien est cliqué
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Gérer la classe active pour les liens de navigation
    function setActiveLink() {
        const sections = document.querySelectorAll('section');
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === currentSection) {
                link.classList.add('active');
            }
        });
    }

    // Mettre à jour le lien actif au défilement
    window.addEventListener('scroll', setActiveLink);
    
    // Mettre à jour le lien actif au chargement
    setActiveLink();
}); 