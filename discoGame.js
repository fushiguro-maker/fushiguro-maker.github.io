window.onload = function () {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function aggTimer() {
        timer++;
        time.textContent = '. ' + (timer % 60);
        minutes.textContent = 'time: ' + (timer / 60 | 0);
    }

    function startGame() {
        for (i = 0; i< max_square; i++)
            squares[i] = square.create(getRandomInt(canvas_width - 40), 0, 40, 40, colors[getRandomInt(colors.length)]);

        bigSquare = square.create(canvas_width / 2, canvas_height - 10 - squareHeight, squareWidth, squareHeight, squareColor);
         
        score = 0;
        timer = 0;
        life = 3;
        interval = setInterval(aggTimer, 1000);
    }

    function endGame() {
        clearInterval(interval);
        let risp = (prompt("Game over!\n Hai totalizzato " + score + " punti! 🥳\n Vuoi ricominciare? (rispondi con s/n)"));
        if(risp == 's')
        {
            startGame();
            lifes.textContent = 'lifes: ' + life;
            score2.textContent = 'score: ' + score;
            gameOver.setAttribute('class', 'hidden');
            active = true;
        }
        else if(risp == 'n')
        {
            gameOver.setAttribute('class', 'hidden');
            on = false;
            active = false;
            timer = 0;
            time.textContent = '.' + timer;
            //ctx.beginPath();
            ctx.clearRect(0, 0, canvas_width, canvas_height);
            clearInterval(interval);
            score = 0;
            score2.textContent = 'score: ' + score;
            life = 3;
            lifes.textContent = 'lifes: ' + life;
        }
    }

    let start = document.getElementById('btn_start'),
        reset = document.getElementById('btn_reset'),
        pausa = document.getElementById('btn_pause'),
        riprendi = document.getElementById('btn_riprendi'),
        left = document.getElementById('btn_left'),
        right = document.getElementById('btn_right'),
        esci =  document.getElementById('btn_esci'),
        riprova =  document.getElementById('btn_riprova'),
        regole = document.getElementById('btn_regole'),
        canvas = document.getElementById('game_canvas'),
        inner = document.getElementById('inner_div'),
        score2 = document.getElementById('span_score'),
        time = document.getElementById('span_timer'),
        minutes = document.getElementById('span_minutes'),
        lifes = document.getElementById('div_lifes'),
        gameOver = document.getElementById('div_gameOver'),
        ctx = canvas.getContext("2d");
        canvas_width = inner.clientWidth,
        canvas_height = inner.clientHeight;

        console.log(canvas_width);
        console.log(canvas_height);
        canvas.width = canvas_width;
        canvas.height = canvas_height;
        
        let active = false;
        let on = false;
        let on2 = true;
        

        let max_square = 15,
            squares = [],
            colors = ['apple', 'banana', 'kiwi', 'uva', 'lemon', 'cherry', 'bomb', 'bomb', 'orange', 'goldenApple'],
            bigSquare;
        let score,
            timer,
            life,
            interval;
        let image = new Image(),
            image1 = new Image(),
            image2 = new Image(),
            image3 = new Image(),
            image4 = new Image(),
            image5 = new Image(),
            image6 = new Image(),
            image7 = new Image(),
            image8 = new Image(),
            basket = new Image();
        image.src = 'Apple.png';
        image1.src = 'Banana.png';
        image2.src = 'Kiwi.png';
        image3.src = 'Grape.png';
        image4.src = 'Lemon.png';
        image5.src = 'Cherry.png';
        image6.src = 'bomb.png';
        image7.src = 'Orange.png';
        image8.src = 'goldenApple.png';
        basket.src = 'basket.png';
        const squareHeight = 62,
              squareWidth = 90,
              squareColor = 'gold',
              velSquare = 10;
        

        start.addEventListener('click', function()
        {  
            startGame();

            if(active == false && on == false)
            {
                for (i = 0; i< max_square; i++)
                    squares[i] = square.create(getRandomInt(canvas_width - 40), 0, 40, 40, colors[getRandomInt(colors.length)]);
                active = true;
            }
        });

        regole.addEventListener('click', function()
        {
            alert("Raccogli più frutti che puoi!\n" +
                "- Le mele d'oro valgono 2 punti; \n" +
                "- Le bombe ti fanno perdere un punto e una vita; \n" +
                "- Tutti gli altri frutti valgono 1 punto;\n" + 
                "- Ogni 100 punti guadagni una vita.\nBuon divertimento!")
        });

        riprendi.addEventListener('click', function()
        {
            active = true;
            setInterval(aggTimer, 1000);
            riprendi.setAttribute('class', 'hidden');
        });

        reset.addEventListener('click', function()
        {
            active = false;
            let risp = (prompt("Sei sicuro di voler ricominciare? (rispondi con s/n)"));
            if(risp == "s")
            {
                clearInterval(interval);
                on = false;
                ctx.clearRect(0, 0, canvas_width, canvas_height);
                score = 0;
                score2.textContent = 'score: ' + score;
                console.log(score);
                life = 3;
                lifes.textContent = 'lifes: ' + life;
            }
            else if(risp == "n")  
                active = true;     
            
        });

        pausa.addEventListener('click', function()
        {
            if (active)
                {   
                    clearInterval(interval);
                    on = true;
                    active = false;
                    riprendi.setAttribute('class', 'visible');
                    riprendi.setAttribute('class', 'class_button');
                }
        });

        riprova.addEventListener('click', function()
        {   
            startGame();
            lifes.textContent = 'lifes: ' + life;
            score2.textContent = 'score: ' + score;
            gameOver.setAttribute('class', 'hidden');
            active = true;
        });

        esci.addEventListener('click', function()
        {   
            gameOver.setAttribute('class', 'hidden');
            on = false;
            active = false;
            ctx.clearRect(0, 0, canvas_width, canvas_height);
            score = 0;
            score2.textContent = 'score: ' + score;
            console.log(score);
            life = 3;
            lifes.textContent = 'lifes: ' + life;
        });

        document.addEventListener('keypress', function(event)
        {
            if (active)
            {   
                if(event.code == 'KeyA')
                {   
                    let newX = bigSquare.getX() - velSquare;
                    if(bigSquare.getX() < 0)
                        newX = 0;
                    bigSquare.setX(newX);
                }
                
                else if(event.code == 'KeyD')
                {
                    let newX = bigSquare.getX() + velSquare;
                    if(bigSquare.getX() > canvas_width - squareWidth)
                        newX = canvas_width - squareWidth;
                    bigSquare.setX(newX);
                }
            }
        });
        
        left.addEventListener('click', function()
        {
            if (active)
            {
                let newX = bigSquare.getX() - velSquare;
                if(bigSquare.getX() < 0)
                    newX = 0;
                 bigSquare.setX(newX);
            }
        });

        right.addEventListener('click', function()
        {
            if (active)
            {
                let newX = bigSquare.getX() + velSquare;
                if(bigSquare.getX() > canvas_width - squareWidth)
                    newX = canvas_width - squareWidth;
                bigSquare.setX(newX);
            }
        });

        update();
        

        function update() {
            
            if (active) {
                ctx.clearRect(0, 0, canvas_width, canvas_height);

                for (i = 0; i < max_square; i ++)
                {
                    // Disegna i quadrati

                    if(squares[i].getColor() =='apple')
                        ctx.drawImage(image, squares[i].getX(), squares[i].getY(), squares[i].getWidth(), squares[i].getHeigth());
                    if(squares[i].getColor() =='banana')
                        ctx.drawImage(image1, squares[i].getX(), squares[i].getY(), squares[i].getWidth(), squares[i].getHeigth());
                    if(squares[i].getColor() =='kiwi')
                        ctx.drawImage(image2, squares[i].getX(), squares[i].getY(), squares[i].getWidth(), squares[i].getHeigth());
                    if(squares[i].getColor() =='uva')
                        ctx.drawImage(image3, squares[i].getX(), squares[i].getY(), squares[i].getWidth(), squares[i].getHeigth());
                    if(squares[i].getColor() =='lemon')
                        ctx.drawImage(image4, squares[i].getX(), squares[i].getY(), squares[i].getWidth(), squares[i].getHeigth());
                    if(squares[i].getColor() =='cherry')
                        ctx.drawImage(image5, squares[i].getX(), squares[i].getY(), squares[i].getWidth(), squares[i].getHeigth());
                    if(squares[i].getColor() =='bomb')
                        ctx.drawImage(image6, squares[i].getX(), squares[i].getY(), squares[i].getWidth(), squares[i].getHeigth());
                    if(squares[i].getColor() =='orange')
                        ctx.drawImage(image7, squares[i].getX(), squares[i].getY(), squares[i].getWidth(), squares[i].getHeigth());
                    if(squares[i].getColor() =='goldenApple')
                        ctx.drawImage(image8, squares[i].getX(), squares[i].getY(), squares[i].getWidth(), squares[i].getHeigth());
                    
                 
                    // Muove i quadrati

                    let newY = squares[i].getY() + getRandomInt(6) + (score ? score * 0.01 : 0.5);
                    squares[i].setY(newY);
                    if(squares[i].getY() > canvas_height) 
                        squares[i].setY(0);

                    // Verifica scontri
                    if(bigSquare.getY() + 3 < squares[i].getY() + 40 && 
                        squares[i].getY() < bigSquare.getY()) 
                       {
                        if(bigSquare.getX() <= squares[i].getX() && 
                            bigSquare.getX() + squareWidth >= squares[i].getX() + 40)
                        {   
                            console.log(squares[i].getColor());
                            if((squares[i].getColor()) == 'bomb')
                            {
                                score -= 1;
                                life -= 1;
                                lifes.textContent = 'lifes: ' + life;
                                console.log(life);
                            }

                            if((squares[i].getColor()) == 'goldenApple')
                                {
                                    score += 2;
                                }
                            
                            else
                                {
                                    score += 1;
                                }
                            console.log(score);
                            score2.textContent = 'score: ' + score;
                            squares[i].setY(0);
                            let newRandX = getRandomInt(canvas_width - 40);
                            squares[i].setX(newRandX);
                            }
                    }
                    if(life == 0)
                    {
                        //ctx.clearRect(0, 0, canvas_width, canvas_height);
                        on = false;
                        endGame();
                    }
                    if(score != 0 && (score % 100) == 0 && on2 == true)
                    {   
                        on2 = false;
                        life += 1;
                        lifes.textContent = 'lifes: ' + life;
                    }
                    if((score % 100) != 0)
                        {
                            on2 = true;
                        } 
                }

                // Disegna "player"
                ctx.beginPath();
                ctx.drawImage(basket, bigSquare.getX(), bigSquare.getY(), bigSquare.getWidth(), bigSquare.getHeigth());
            }

            requestAnimationFrame(update);
        }
}
