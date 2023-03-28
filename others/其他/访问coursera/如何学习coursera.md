这是官方网站
[Coursera | Online Courses & Credentials From Top Educators. Join for Free](https://www.coursera.org/)
一般正常访问与注册是没有问题的，但是在看视频时一般会出现无法播放的情况。这种情况为视频播放链接的IP地址问题，我们需要找到对应的IP地址然后放到host文件里面。
首先进入
这种情况基本上是因为[http://d3c33hcgiwev3.cloudfront.net](http://d3c33hcgiwev3.cloudfront.net)网站无法访问造成的，所以只能想办法改hosts绕过去。
首先进入[Online Ping, Traceroute, DNS lookup, WHOIS, Port check, Reverse lookup, Proxy checker, Bandwidth meter, Network calculator, Network mask calculator, Country by IP, Unit converter](https://ping.eu/nslookup/)这个网站，然后输入`http://d3c33hcgiwev3.cloudfront.net`这个网站查询IP地址，把这些IP地址记下来。
然后打卡电脑上的hosts文件（位置在`C:\Windows\System32\drivers\etc\hosts`），输入以下内容
```text
# 解决coursera视频访问问题
54.230.96.174   d3c33hcgiwev3.cloudfront.net
54.230.96.57  d3c33hcgiwev3.cloudfront.net
54.230.96.102   d3c33hcgiwev3.cloudfront.net
54.230.96.22     d3c33hcgiwev3.cloudfront.net
```
然后打开电脑的cmd输入命令刷新DNS缓存`ipconfig /flushdns`
然后就OK啦！