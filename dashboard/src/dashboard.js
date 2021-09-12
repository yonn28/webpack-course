import NavigationBar from './components/navigation-bar/navigation-bar';

const navigationItems = [
    {
        url:'hello-world',
        title:'hello world'
    },
    {
        url:'kiwi-page',
        title:'kiwi page'
    }
];

const navigationBar = new NavigationBar();
navigationBar.render(navigationItems);

const url = window.location.pathname;

if ( url =='/hello-world' ){
    import('HelloWorldApp/HelloWorldPage').then((HelloWorldPageModule)=>{
        console.log("hello-world")
        const HelloWorldPage = HelloWorldPageModule.default;
        const helloWorldPage = new HelloWorldPage();
        helloWorldPage.render();
    });
}

if ( url == '/kiwi-page' ){
    import('KiwiApp/KiwiPage').then((KiwiPageModule)=>{
        console.log("kiwi-page");
        const KiwiPage = KiwiPageModule.default;
        const kiwiPage = new KiwiPage();
        kiwiPage.render();
    });
}



