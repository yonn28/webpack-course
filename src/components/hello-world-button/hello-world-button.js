import './hello-world-button.scss'

class HelloWorldButton {
    buttonCssClass = 'hellow-world-button'
    static render() {
        const button = document.createElement('button');
        button.innerHTML = 'helllo world';
        button.classList.add('hellow-world-button');
        const body = document.querySelector('body');
        button.onclick = () => {
            const p = document.createElement('p');
            p.innerHTML = 'hello world';
            p.classList.add('hellow-world-text');
            body.appendChild(p)
        }
        body.appendChild(button);
    }
}

export default HelloWorldButton;