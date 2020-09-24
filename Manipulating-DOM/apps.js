window.addEventListener('DOMContentLoaded', function () {
    let button = document.createElement('button');
    let btnText = document.createTextNode('Click Me');
    button.appendChild(btnText);
    document.body.appendChild(button);

    // OBJECTIVE 1 //
    button.addEventListener('click', function () {
        alert("Don't stop, you gotta keep keep on!");
    })

    //OBJECTIVE 2 is on HTML //

    // OBJECTIVE 3 //
    document.getElementById("box1").style.height = "100px";
    document.getElementById("box1").addEventListener("mouseover", function () {
        document.getElementById("box1").style.backgroundColor = 'blue';
    });

    document.getElementById("box1").addEventListener("mouseout", mouseOut);

    function mouseOut() {
        document.getElementById("box1").style.backgroundColor = 'white';
    }

    //OBJECTIVE 4 //
    let para = document.createElement("p");
    let node = document.createTextNode("You can't hit a homerun from the dugout!");
    para.appendChild(node);
    document.body.appendChild(para);

    function randmColor() {
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += Math.floor((Math.random() * 16)).toString(16);
        }
        return color;

    }

    para.addEventListener('click', () => {
        para.style.color = randmColor();
        //console.log(div.id)
    });

    //OBJECTIVE 5 //
    let three = document.createElement('button');
    let threeText = document.createTextNode('Another Click');
    three.appendChild(threeText);
    document.body.appendChild(three);
    let div = document.createElement('div');


    three.addEventListener('click', function () {

        let span = document.createElement('span');
        let spanText = document.createTextNode('Anthony Suarez')
        span.appendChild(spanText)
        div.appendChild(span);
        document.body.appendChild(div);
    })

    //OBJECTIVE 6 //
    let friends = document.createElement['Adrian', 'Thomas', 'Andre', 'Joseph', 'Wayne', 'Bic', 'Tyson', 'Sean', 'Brandon', 'Paul'];

    friends.addEventListener('click', function () {
        console.log(0);
    })
});