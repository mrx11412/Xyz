const text = "Hi, I'm Mehedi Hasan Hriday. My nickname is Mehedi, but My virtual nickname is Mr.X. I really enjoy watching anime and movies because they take me to a whole new world. I have a strong interest in technology, especially hacking, graphic design, and app or website development. Therefore, in the future, I am considering pursuing a career in computer engineering. I currently have deep feelings for a girl. My current plan is to achieve a good result in SSC 25 and, eventually, build a beautiful life.";

        const delay = 100; 

        function autoType(element, text, delay) {

            let index = 0;

            (function type() {

                if (index < text.length) {

                    element.innerHTML += text.charAt(index);

                    index++;

                    setTimeout(type, delay);

                }

            })();

        }

        const autoTypingElement = document.getElementById("auto-typing");

        

        function toggleProfile() {

            const container = document.querySelector('.container');

            container.classList.toggle('expanded');

        }

        

      

        function createStars() {

            const starContainer = document.getElementById('stars');

            for (let i = 0; i < 100; i++) {

            const star = document.createElement('div');

            star.classList.add('star');

            star.style.left = `${Math.random() * window.innerWidth}px`;

            star.style.top = `${Math.random() * window.innerHeight}px`;

            star.style.width = `${Math.random() * 2 + 1}px`;

            star.style.height = star.style.width;

            star.style.animationDuration = `${Math.random() * 3 + 2}s`;

            star.style.animationDelay = `${Math.random() * 5}s`;

            starContainer.appendChild(star);

            }

            }

            

          

            function createComets() {

            const cometContainer = document.getElementById('comets');

            for (let i = 0; i < 5; i++) {

            const comet = document.createElement('div');

            comet.classList.add('comet');

            comet.style.left = `${Math.random() * window.innerWidth}px`;

            comet.style.top = `${Math.random() * window.innerHeight}px`;

            comet.style.width = `${Math.random() * 5 + 2}px`;

            comet.style.height = comet.style.width;

            comet.style.animationDuration = `${Math.random() * 5 + 3}s`;

            comet.style.animationDelay = `${Math.random() * 5}s`;

            cometContainer.appendChild(comet);

            }

            }

            

            window.onload = function() {

            createStars();

            createComets();

            autoType(autoTypingElement, text, delay);

            setTimeout(function() {

            alert('প্রোফাইল পিকচারে ক্লিক করুন, আরো তথ্য দেখার জন্য!');

            }, 3000);

            };
