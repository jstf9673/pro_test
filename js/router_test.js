(function () { 
        function Router () {}
        Router.prototype.route = function ( path, callback ) {
          var url = location.hash.slice(1) || '/';
          // 刷新时的处理 
          window.addEventListener('load', function () { 
              if ( url == path ) { 
                  callback&&callback(); 
              } 
          }, false);
          // hash变化时的处理 
          window.addEventListener('hashchange', function () { 
              url = location.hash.slice(1) || '/';
              if ( url == path ) { 
                  callback&&callback(); 
              } 
          }, false); }; 
          window.Router = new Router(); })();
//Router注册，注册方式就是Router.route(path, callback)的格式：

var content = document.querySelectorAll('.content');
// 测试函数，这里可以放一些ajax处理之类的 
function loadContent ( text ) { 
    content[0].innerHTML = text;
}
// 注意：这里的path要和html里面锚链接对应 // 如：‘#/’对应‘/’, '#/page2'对应'/page2' 
Router.route('/', function () { loadContent('这是首页'); });
Router.route('/page1', function () { loadContent('这是页面1'); }); 
Router.route('/page2', function () { loadContent('这是页面2'); }); 
Router.route('/page3', function () { loadContent('这是页面3'); });
Router.route('/page4', function () { loadContent('这是页面4'); });
