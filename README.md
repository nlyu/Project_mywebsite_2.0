# Project_mywebsite_2.0 
# 用github写个人网站，“无后端网页开发”

这是一个试水玩票性质project，本来老的博客和个人网站是用静态html和ruby on rail开发的。后来被nodejs和reactjs的构架深深震撼，感觉自己从前在mvc结构做网站开发实在是太清亡了这种感觉。nodejs的好处和牛逼想必大家都知道了，受到这种重前端，后端全部放在database用api打包发给前端的启发。决定干脆做个0后端的网站。最后某天梦里惊做起发现可以用发新郎微博的方法来储存后台数据。干脆把微博作为自己的数据库，利用新郎的api直接发给nodejs。然而国内服务器有延迟，申请新浪api又要注册账号。。后来居然发现可以用github post issue的方式发文章，然后用git来做网站。 

卧槽瞬间爽炸。。没有数据库了。。没有后台了。。什么query，sql 操作，后台逻辑，前端调试，字体渲染。。瞬间消失。后台操作变成发微博文章。。改微博文章。。
后来做出来以后惊为天人，实在是太太太干净，太太太方便了。后端的数据更改，不用pull，push，下载，查文件啥的。直接上github 改一下issue就可以了。时间长了感觉自己变成了一个广告文员。。。。根本不用写代码。。。。前端搭好ui和界面留个地方，然后刷刷刷写文章就行了。文章用markdown格式，前端装一个markdown to html converter自己调试一下，还可以写成漂亮的效果。  

后来。。后来发现果然这个根本前人已经在做了。天猫的招聘界面就是用github nodejs搭建的，淘宝也是。有点遗憾和开心。谢谢你来看我的github哈，如果有什么建议请务必告诉我。

Link to new website: [lyulyulyu.com ver2.0](https://www.lyulyulyu.com)

This is my new personal website in NodeJs and ReactJs. Most most interesting feature is to use github issue to post data. Zerooooooo backend. Everthing is in the front. All of the data are stored in github issue page.

The old website repo is: [Project_mywebsite_1.0](https://github.com/nlyu/Projects_mywebsite)

Link to old website: [lyulyulyu.com](http://nlyu2.web.engr.illinois.edu/)

New website

![alt text](/new.png)

Old website

![alt text](/old.png)
 
 
# Installation & Run


```
 npm install
```

```
 npm start
```

See web page in localhost:9000
