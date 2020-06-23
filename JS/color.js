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

    //Text Show
    document.getElementById('text-color').innerHTML = color1;
    document.getElementById('text-color2').innerHTML = color1;
    document.getElementById('text-color3').innerHTML = color1;

    }
    document.getElementById('range-hue'),addEventListener('input', changeHue);