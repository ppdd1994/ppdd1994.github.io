myApp.controller('skillCtrl', function ($scope) {
    $scope.skills = [
        {name: 'HTML', contain: ['熟悉常用标签', '了解语义化', 'canvas', '储存与离线应用']},
        {name: 'CSS/CSS3', contain: ['熟悉盒子模型', 'Flex布局', '响应式布局', 'CSS3动画']},
        {name: 'JavaScript', contain: ['熟悉基本语法', 'OOP', 'Dom', 'JSON的语法解析与序列化', 'Ajax']},
        {name: '前端框架', contain: ['jQuery', 'Boostrap','Angular.js', 'Vue.js']},
        {name: '工具/其他', contain: ['Sublime','WebStorm','NPM','Git','Less','Grunt','SEO','Yahoo军规']}
    ]

});

myApp.controller('workCtrl', function ($scope) {
    $scope.works = [
        {
            "name": "HTML5小游戏--街机游戏",
            "intro": "青蛙过河类小游戏",
            "imgUrl": "images/game.jpg",
            "codeUrl":"https://github.com/ppdd1994/Canvas-Game",
            "demoUrl":"../link/arcade-game/index.html"
        },
        {
            "name": "HTML5小游戏--深海小鱼",
            "intro": "通过Canvas绘制的小游戏",
            "imgUrl": "images/htmlgame.jpg",
            "codeUrl":"https://github.com/ppdd1994/html5-game",
            "demoUrl":"../link/htmlgame/index.html"
        },
        {
            "name": "仿饿了么APP-商家页",
            "intro": "使用Vue.js+es6+webpack技术，采用组件化、模块化的开发方式",
            "imgUrl": "images/vue.jpg",
            "codeUrl":"https://github.com/ppdd1994/-app",
            "demoUrl":"http://vuejssellapp.t.imooc.io"
        },
        {
            "name": "响应式金融网站",
            "intro": "适应多终端",
            "imgUrl": "images/fin.png",
            "codeUrl":"https://github.com/ppdd1994/ResponsiveWeb",
            "demoUrl":"http://responsiveweb.t.imooc.io/"
        },
        {
            "name": "Todolist小应用",
            "intro": "定时提醒 localStorge",
            "imgUrl": "images/todo.png",
            "codeUrl":"https://github.com/ppdd1994/jquery-application",
            "demoUrl":"http://ppfivechance.p.imooc.io/"
        },
        {
            "name": "七夕小动画",
            "intro": "H5+CSS3+JS",
            "imgUrl": "images/val.png",
            "codeUrl":"https://github.com/ppdd1994/valentine",
            "demoUrl":"../link/val/index.html"

        },
        {
            "name": "时钟效果",
            "intro": "Canvas动画",
            "imgUrl": "images/clock.png",
            "codeUrl":"http://codepen.io/fivechance/pen/XpOaEB",
            "demoUrl":"http://codepen.io/fivechance/pen/XpOaEB"
        },
        {
            "name": "照片墙",
            "intro": "各种图片展示效果",
            "imgUrl": "images/slide.png",
            "codeUrl":"https://github.com/ppdd1994/showpic",
            "demoUrl":"../link/show/index.html"
        }
    ]

});
