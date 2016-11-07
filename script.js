// exo 1

var image = document.getElementById('image1');

image.onmouseover=function()
{
    document.getElementById('image1').src = "./images/image1_2.jpg"
};


// exo 2

var champ = document.getElementById("nom");

function Focus()
{
    alert('Merci de votre participation');
}

// exo 3

function Keyboard()
{
    var champ1 = document.getElementById('nom');
    var x = champ1.value;
    alert("Vous venez de presser la touche " + x);
}

// exo 4

function Delete()
{
    var nom1 = document.getElementById('nom1'),
        prenom = document.getElementById('prenom'),
        ville = document.getElementById('ville');

    nom1.value="";
    prenom.value="";
    ville.value="";
}

// exo 5

var image1 = document.getElementsByTagName('img')[1],
    image2 = document.getElementsByTagName('img')[2],
    image3 = document.getElementsByTagName('img')[3],
    image4 = document.getElementsByTagName('img')[4],
    image5 = document.getElementsByTagName('img')[5];


function change()
    {
        image1.src = "./images/image1_2.jpg";
        image2.src = "./images/image2_2.jpg";
        image3.src = "./images/image3_2.jpg";
        image4.src = "./images/image4_2.jpg";
        image5.src = "./images/image5_2.jpg";
    }


// exo 6

function nothingchange()
{
    image1.src = "./images/image1.jpg";
    image2.src = "./images/image2.jpg";
    image3.src = "./images/image3.jpg";
    image4.src = "./images/image4.jpg";
    image5.src = "./images/image5.jpg";
}






