function changeHue(){
    hue1 = document.getElementById('range-hue').value;
    st1 = document.getElementById('range-st').value;
    value1 = document.getElementById('range-value').value
    color1 = 'hsl('+ hue1 + ',' + st1+'%' + ',' + value1+'%' +')';
    color2 = 'hsl('+ hue1 + ',' + '100'+'%' + ',' + '50'+'%' +')';

    //Boxes Style
    document.getElementById('box2').style.backgroundColor = color1;
    document.getElementById('box3').style.backgroundColor = color1;
    document.getElementById('box4').style.backgroundColor = color1;

    //Range Style
    document.getElementById('range-st').style.backgroundImage = 'linear-gradient('+"to left" + "," + color2 + "," + 'rgb(133, 133, 133)' +')';
    document.getElementById('range-value').style.backgroundImage = 'linear-gradient('+"to left" + "," + 'white' + ',' + color2 + "," + 'black' +')';

    //color box
    document.getElementById("select1").style.backgroundColor = 'hsl('+ hue1 + ',' + '100'+'%' + ',' + '50'+'%' +')';
    document.getElementById("select2").style.backgroundColor = 'hsl('+ hue1 + ',' + '50'+'%' + ',' + '50'+'%' +')';
    document.getElementById("select3").style.backgroundColor = 'hsl('+ hue1 + ',' + '0'+'%' + ',' + '50'+'%' +')';
    document.getElementById("select4").style.color = 'hsl('+ hue1 + ',' + '100'+'%' + ',' + '50'+'%' +')';

    document.getElementById("select5").style.backgroundColor = 'hsl('+ hue1 + ',' + '100'+'%' + ',' + '50'+'%' +')';
    document.getElementById("select6").style.backgroundColor = 'hsl('+ hue1 + ',' + '100'+'%' + ',' + '80'+'%' +')';
    document.getElementById("select7").style.backgroundColor = 'hsl('+ hue1 + ',' + '100'+'%' + ',' + '30'+'%' +')';

    //Text Show
    document.getElementById('text-color').innerHTML = color1;
    document.getElementById('text-color2').innerHTML = color1;
    document.getElementById('text-color3').innerHTML = color1;

    }
    document.getElementById('range-hue'),addEventListener('input', changeHue);