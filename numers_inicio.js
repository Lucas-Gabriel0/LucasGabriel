function dados(n = 0, b = 0, c = 0) {
    
    var contagem_pages = document.getElementById('pages_contagem');
    var contagem_projects = document.getElementById("projects_contagem");
    var contagem_coffees = document.getElementById("coffee_contagem");



    function projects(){
        if(b <= 16){
            contagem_projects.innerText = b + "+";
            b++;
            setTimeout(projects, 100);
        }
    }

    function pages(){
        if(n <= 22){
            contagem_pages.innerText = n + "+";
            n++;
            setTimeout(pages, 100);
        }
        
    }
   

    function coffees(){
        if(c <= 30){
            contagem_coffees.innerText = c + "+"
            c++;
            setTimeout(coffees, 100);
        }
    }


    pages();
    projects();
    coffees();
}
dados();




