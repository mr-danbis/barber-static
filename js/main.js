document.addEventListener("DOMContentLoaded", function () {
    class Slider {
        constructor(owlElement, owlOptions) {
            this.owlElement = owlElement;
            this.owlOptions = owlOptions;
        }

        addSlider(owlElement, owlOptions) {
            $(owlElement).owlCarousel(owlOptions);
        }
    }
    const gallerySlider = new Slider();


    gallerySlider.addSlider(".gallery__slider", {
        responsive: {
            0: {
                items: 1,
                margin: 10,
            },

            500: {
                items: 2,
                margin: 10,
            },

            750: {
                items: 3,
                margin: 20,
            },

            1300: {
                items: 4,
                margin: 40,
            },
        },
    });


    function openSidebar(){
        const sidebar = document.querySelector('.sidebar');
        const headerBurger = document.querySelector('.header__burger');
        const sidebarCloseBtn = document.querySelector('.sidebar__close');
        const sidebarLink = document.querySelectorAll('.sidebar__link');

        headerBurger.addEventListener('click', ()=> {
            sidebar.style.transform = 'translateX(0)';
        });

        sidebarCloseBtn.addEventListener('click', ()=> {
            sidebar.style.transform = 'translateX(-200%)';
        });
        
        sidebarLink.forEach(link => {
            link.addEventListener('click', ()=> {
                sidebar.style.transform = 'translateX(-200%)';
            });
        });
    }
    openSidebar();


});