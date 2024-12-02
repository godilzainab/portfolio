let projects = document.querySelector("Projects");
let images = document.querySelectorAll(".webprojects")
let graphicimages = document.querySelectorAll(".graphicprojects");


// let newimages = ["work/Screenshot 2024-11-30 134223.png","work/Screenshot 2024-11-29 234445.png","work/Screenshot 2024-11-30 134559.png","work/Screenshot 2024-11-29 235711.png","work/Screenshot 2024-11-30 134751.png","work/Screenshot 2024-11-30 134751.png","work/Screenshot 2024-11-29 234641.png","work/Screenshot 2024-11-29 234404.png","work/Screenshot 2024-11-29 235145.png"];
let newimages = ["work/Screenshot 2024-11-30 134559.png","work/Screenshot 2024-11-30 134909.png","work/Screenshot 2024-11-30 134751.png"];

    images[0].addEventListener('click',function(){
        if(images[0].getAttribute("src") == newimages[0]){
            images[0].setAttribute('src', 'work/to-do-list.png');
        }
        else{            
        images[0].setAttribute('src', newimages[0]);
        }
    });
    
    images[1].addEventListener('click',function(){
        if(images[1].getAttribute("src") == newimages[1]){
            images[1].setAttribute('src', 'work/total.png');
        }
        else{            
        images[1].setAttribute('src', newimages[1]);
        }
    });

    images[2].addEventListener('click',function(){
        if(images[2].getAttribute("src") == newimages[2]){
            images[2].setAttribute('src', 'work/Screenshot 2024-11-30 122758.png');
        }
        else{            
        images[2].setAttribute('src', newimages[2]);
        }
    });


    let newimg =["work/Screenshot 2024-11-30 134223.png","work/Screenshot 2024-11-29 234641.png","work/Screenshot 2024-11-29 234404.png"];

    graphicimages[0].addEventListener('click',function(){
        if(graphicimages[0].getAttribute("src") == newimg[0]){
            graphicimages[0].setAttribute('src', 'work/Screenshot 2024-11-29 234229.png');
        }
        else{            
            graphicimages[0].setAttribute('src', newimg[0]);
        }
    });

    graphicimages[1].addEventListener('click',function(){
        if(graphicimages[1].getAttribute("src") == newimg[1]){
            graphicimages[1].setAttribute('src', 'work/Screenshot 2024-11-30 114027.png');
        }
        else{            
            graphicimages[1].setAttribute('src', newimg[1]);
        }
    });


    graphicimages[2].addEventListener('click',function(){
        if(graphicimages[2].getAttribute("src") == newimg[2]){
            graphicimages[2].setAttribute('src', 'work/Screenshot 2024-11-29 234348.png');
        }
        else{            
            graphicimages[2].setAttribute('src', newimg[2]);
        }
    });