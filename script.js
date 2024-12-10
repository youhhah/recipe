document.addEventListener('DOMContentLoaded', function() {
    // Инициализация слайдера
    new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 5000,
        },
    });

    // Инициализация иконок
    lucide.createIcons();

    // Модальное окно
    const modal = document.getElementById('recipe-modal');
    const closeBtn = document.getElementsByClassName('close')[0];
    const recipeTitle = document.getElementById('recipe-title');
    const recipeContent = document.getElementById('recipe-content');

    // Открытие модального окна
    document.querySelectorAll('.view-recipe').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const recipe = this.getAttribute('data-recipe');
            showRecipe(recipe);
        });
    });

    // Закрытие модального окна
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    function showRecipe(recipe) {
        const recipes = {
            pasta: {
                title: "Паста Карбонара",
                content: "Ингредиенты: спагетти, бекон, яйца, сыр пармезан, черный перец.<br><br>Инструкция:<br>1. Отварите спагетти.<br>2. Обжарьте бекон.<br>3. Смешайте яйца и тертый сыр.<br>4. Соедините все ингредиенты и подавайте."
            },
            salad: {
                title: "Греческий салат",
                content: "Ингредиенты: помидоры, огурцы, красный лук, оливки, сыр фета, оливковое масло.<br><br>Инструкция:<br>1. Нарежьте овощи.<br>2. Добавьте оливки и кубики феты.<br>3. Заправьте оливковым маслом и подавайте."
            },
            soup: {
                title: "Тыквенный суп",
                content: "Ингредиенты: тыква, лук, чеснок, сливки, бульон, специи.<br><br>Инструкция:<br>1. Обжарьте лук и чеснок.<br>2. Добавьте нарезанную тыкву и бульон.<br>3. Варите до готовности, измельчите блендером.<br>4. Добавьте сливки и специи."
            },
            dessert: {
                title: "Шоколадный фондан",
                content: "Ингредиенты: шоколад, масло, яйца, сахар, мука.<br><br>Инструкция:<br>1. Растопите шоколад с маслом.<br>2. Взбейте яйца с сахаром.<br>3. Соедините все ингредиенты.<br>4. Выпекайте в формочках 8-10 минут при 200°C."
            }
        };

        recipeTitle.textContent = recipes[recipe].title;
        recipeContent.innerHTML = recipes[recipe].content;
        modal.style.display = "block";
    }

    // Инициализация карты
    ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map("map-container", {
            center: [55.76, 37.64], // Координаты центра карты (Москва)
            zoom: 10 // Масштаб карты
        });

        var myPlacemark = new ymaps.Placemark([55.76, 37.64], {
            hintContent: 'Наше расположение',
            balloonContent: 'Кулинарные рецепты'
        });

        myMap.geoObjects.add(myPlacemark);
    }
});

