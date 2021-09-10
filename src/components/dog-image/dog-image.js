import dog from './dog.jpg'
import  './Dog-image.scss'

class DogImage{
    render(){
        const img = document.createElement('img');
        img.src = dog;
        img.alt = 'Dog Image';
        img.classList.add('Dog-image')
        
        const body = document.querySelector('body');
        body.appendChild(img);
    }
}

export default DogImage;