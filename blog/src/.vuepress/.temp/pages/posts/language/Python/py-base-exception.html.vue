<template><div><h2 id="异常" tabindex="-1"><a class="header-anchor" href="#异常" aria-hidden="true">#</a> 异常</h2>
<h3 id="python所有的内置异常" tabindex="-1"><a class="header-anchor" href="#python所有的内置异常" aria-hidden="true">#</a> Python所有的内置异常</h3>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>BaseException  <span class="token comment"># 所有异常的基类</span>
 <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> SystemExit  <span class="token comment"># 解释器请求退出</span>
 <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> KeyboardInterrupt  <span class="token comment"># 用户中断执行(通常是输入^C)</span>
 <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> GeneratorExit  <span class="token comment"># 生成器(generator)发生异常来通知退出</span>
 <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> Exception  <span class="token comment"># 常规异常的基类</span>
      <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> StopIteration  <span class="token comment"># 迭代器没有更多的值</span>
      <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> StopAsyncIteration  <span class="token comment"># 必须通过异步迭代器对象的__anext__()方法引发以停止迭代</span>
      <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> ArithmeticError  <span class="token comment"># 各种算术错误引发的内置异常的基类</span>
      <span class="token operator">|</span>    <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> FloatingPointError  <span class="token comment"># 浮点计算错误</span>
      <span class="token operator">|</span>    <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> OverflowError  <span class="token comment"># 数值运算结果太大无法表示</span>
      <span class="token operator">|</span>    <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> ZeroDivisionError  <span class="token comment"># 除(或取模)零 (所有数据类型)</span>
      <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> AssertionError  <span class="token comment"># 当assert语句失败时引发</span>
      <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> AttributeError  <span class="token comment"># 属性引用或赋值失败</span>
      <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> BufferError  <span class="token comment"># 无法执行与缓冲区相关的操作时引发</span>
      <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> EOFError  <span class="token comment"># 当input()函数在没有读取任何数据的情况下达到文件结束条件(EOF)时引发</span>
      <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> ImportError  <span class="token comment"># 导入模块/对象失败</span>
      <span class="token operator">|</span>    <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> ModuleNotFoundError  <span class="token comment"># 无法找到模块或在在sys.modules中找到None</span>
      <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> LookupError  <span class="token comment"># 映射或序列上使用的键或索引无效时引发的异常的基类</span>
      <span class="token operator">|</span>    <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> IndexError  <span class="token comment"># 序列中没有此索引(index)</span>
      <span class="token operator">|</span>    <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> KeyError  <span class="token comment"># 映射中没有这个键</span>
      <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> MemoryError  <span class="token comment"># 内存溢出错误(对于Python 解释器不是致命的)</span>
      <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> NameError  <span class="token comment"># 未声明/初始化对象 (没有属性)</span>
      <span class="token operator">|</span>    <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> UnboundLocalError  <span class="token comment"># 访问未初始化的本地变量</span>
      <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> OSError  <span class="token comment"># 操作系统错误，EnvironmentError，IOError，WindowsError，socket.error，select.error和mmap.error已合并到OSError中，构造函数可能返回子类</span>
      <span class="token operator">|</span>    <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> BlockingIOError  <span class="token comment"># 操作将阻塞对象(e.g. socket)设置为非阻塞操作</span>
      <span class="token operator">|</span>    <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> ChildProcessError  <span class="token comment"># 在子进程上的操作失败</span>
      <span class="token operator">|</span>    <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> ConnectionError  <span class="token comment"># 与连接相关的异常的基类</span>
      <span class="token operator">|</span>    <span class="token operator">|</span>    <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> BrokenPipeError  <span class="token comment"># 另一端关闭时尝试写入管道或试图在已关闭写入的套接字上写入</span>
      <span class="token operator">|</span>    <span class="token operator">|</span>    <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> ConnectionAbortedError  <span class="token comment"># 连接尝试被对等方中止</span>
      <span class="token operator">|</span>    <span class="token operator">|</span>    <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> ConnectionRefusedError  <span class="token comment"># 连接尝试被对等方拒绝</span>
      <span class="token operator">|</span>    <span class="token operator">|</span>    <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> ConnectionResetError    <span class="token comment"># 连接由对等方重置</span>
      <span class="token operator">|</span>    <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> FileExistsError  <span class="token comment"># 创建已存在的文件或目录</span>
      <span class="token operator">|</span>    <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> FileNotFoundError  <span class="token comment"># 请求不存在的文件或目录</span>
      <span class="token operator">|</span>    <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> InterruptedError  <span class="token comment"># 系统调用被输入信号中断</span>
      <span class="token operator">|</span>    <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> IsADirectoryError  <span class="token comment"># 在目录上请求文件操作(例如 os.remove())</span>
      <span class="token operator">|</span>    <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> NotADirectoryError  <span class="token comment"># 在不是目录的事物上请求目录操作(例如 os.listdir())</span>
      <span class="token operator">|</span>    <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> PermissionError  <span class="token comment"># 尝试在没有足够访问权限的情况下运行操作</span>
      <span class="token operator">|</span>    <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> ProcessLookupError  <span class="token comment"># 给定进程不存在</span>
      <span class="token operator">|</span>    <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> TimeoutError  <span class="token comment"># 系统函数在系统级别超时</span>
      <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> ReferenceError  <span class="token comment"># weakref.proxy()函数创建的弱引用试图访问已经垃圾回收了的对象</span>
      <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> RuntimeError  <span class="token comment"># 在检测到不属于任何其他类别的错误时触发</span>
      <span class="token operator">|</span>    <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> NotImplementedError  <span class="token comment"># 在用户定义的基类中，抽象方法要求派生类重写该方法或者正在开发的类指示仍然需要添加实际实现</span>
      <span class="token operator">|</span>    <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> RecursionError  <span class="token comment"># 解释器检测到超出最大递归深度</span>
      <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> SyntaxError  <span class="token comment"># Python 语法错误</span>
      <span class="token operator">|</span>    <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> IndentationError  <span class="token comment"># 缩进错误</span>
      <span class="token operator">|</span>         <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> TabError  <span class="token comment"># Tab和空格混用</span>
      <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> SystemError  <span class="token comment"># 解释器发现内部错误</span>
      <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> TypeError  <span class="token comment"># 操作或函数应用于不适当类型的对象</span>
      <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> ValueError  <span class="token comment"># 操作或函数接收到具有正确类型但值不合适的参数</span>
      <span class="token operator">|</span>    <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> UnicodeError  <span class="token comment"># 发生与Unicode相关的编码或解码错误</span>
      <span class="token operator">|</span>         <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> UnicodeDecodeError  <span class="token comment"># Unicode解码错误</span>
      <span class="token operator">|</span>         <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> UnicodeEncodeError  <span class="token comment"># Unicode编码错误</span>
      <span class="token operator">|</span>         <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> UnicodeTranslateError  <span class="token comment"># Unicode转码错误</span>
      <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> Warning  <span class="token comment"># 警告的基类</span>
           <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> DeprecationWarning  <span class="token comment"># 有关已弃用功能的警告的基类</span>
           <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> PendingDeprecationWarning  <span class="token comment"># 有关不推荐使用功能的警告的基类</span>
           <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> RuntimeWarning  <span class="token comment"># 有关可疑的运行时行为的警告的基类</span>
           <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> SyntaxWarning  <span class="token comment"># 关于可疑语法警告的基类</span>
           <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> UserWarning  <span class="token comment"># 用户代码生成警告的基类</span>
           <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> FutureWarning  <span class="token comment"># 有关已弃用功能的警告的基类</span>
           <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> ImportWarning  <span class="token comment"># 关于模块导入时可能出错的警告的基类</span>
           <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> UnicodeWarning  <span class="token comment"># 与Unicode相关的警告的基类</span>
           <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> BytesWarning  <span class="token comment"># 与bytes和bytearray相关的警告的基类</span>
           <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> ResourceWarning  <span class="token comment"># 与资源使用相关的警告的基类。被默认警告过滤器忽略。</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="某些模块中的异常" tabindex="-1"><a class="header-anchor" href="#某些模块中的异常" aria-hidden="true">#</a> 某些模块中的异常</h3>
<p>比如request库中内置的异常，不同模块中有其自己定义的异常。</p>
<p>调用内置异常</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">from</span> requests<span class="token punctuation">.</span>exceptions <span class="token keyword">import</span> ConnectionError<span class="token punctuation">,</span> ReadTimeout
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>request模块内置异常结构</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>IOError
 <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> RequestException  <span class="token comment"># 处理不确定的异常请求</span>
      <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> HTTPError  <span class="token comment"># HTTP错误</span>
      <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> ConnectionError  <span class="token comment"># 连接错误</span>
      <span class="token operator">|</span>    <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> ProxyError  <span class="token comment"># 代理错误</span>
      <span class="token operator">|</span>    <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> SSLError  <span class="token comment"># SSL错误</span>
      <span class="token operator">|</span>    <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> ConnectTimeout<span class="token punctuation">(</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> Timeout<span class="token punctuation">)</span>  <span class="token comment"># (双重继承，下同)尝试连接到远程服务器时请求超时，产生此错误的请求可以安全地重试。</span>
      <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> Timeout  <span class="token comment"># 请求超时</span>
      <span class="token operator">|</span>    <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> ReadTimeout  <span class="token comment"># 服务器未在指定的时间内发送任何数据</span>
      <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> URLRequired  <span class="token comment"># 发出请求需要有效的URL</span>
      <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> TooManyRedirects  <span class="token comment"># 重定向太多</span>
      <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> MissingSchema<span class="token punctuation">(</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> ValueError<span class="token punctuation">)</span> <span class="token comment"># 缺少URL架构(例如http或https)</span>
      <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> InvalidSchema<span class="token punctuation">(</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> ValueError<span class="token punctuation">)</span> <span class="token comment"># 无效的架构，有效架构请参见defaults.py</span>
      <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> InvalidURL<span class="token punctuation">(</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> ValueError<span class="token punctuation">)</span>  <span class="token comment"># 无效的URL</span>
      <span class="token operator">|</span>    <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> InvalidProxyURL  <span class="token comment"># 无效的代理URL</span>
      <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> InvalidHeader<span class="token punctuation">(</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> ValueError<span class="token punctuation">)</span>  <span class="token comment"># 无效的Header</span>
      <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> ChunkedEncodingError  <span class="token comment"># 服务器声明了chunked编码但发送了一个无效的chunk</span>
      <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> ContentDecodingError<span class="token punctuation">(</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> BaseHTTPError<span class="token punctuation">)</span>  <span class="token comment"># 无法解码响应内容</span>
      <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> StreamConsumedError<span class="token punctuation">(</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> TypeError<span class="token punctuation">)</span>  <span class="token comment"># 此响应的内容已被使用</span>
      <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> RetryError  <span class="token comment"># 自定义重试逻辑失败</span>
      <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> UnrewindableBodyError  <span class="token comment"># 尝试倒回正文时，请求遇到错误</span>
      <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> FileModeWarning<span class="token punctuation">(</span><span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> DeprecationWarning<span class="token punctuation">)</span>  <span class="token comment"># 文件以文本模式打开，但Requests确定其二进制长度</span>
      <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> RequestsDependencyWarning  <span class="token comment"># 导入的依赖项与预期的版本范围不匹配</span>
Warning
 <span class="token operator">+</span><span class="token operator">-</span><span class="token operator">-</span> RequestsWarning  <span class="token comment"># 请求的基本警告</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用户自定义的异常" tabindex="-1"><a class="header-anchor" href="#用户自定义的异常" aria-hidden="true">#</a> 用户自定义的异常</h3>
<p>除了python内置异常和一些模块中内置异常外，用户也可以自定义异常。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">WupeiqiException</span><span class="token punctuation">(</span>Exception<span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment">## 继承父类Exception</span>
  
  <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token comment">## 初始化方法</span>
    self<span class="token punctuation">.</span>message <span class="token operator">=</span> msg
  
  <span class="token keyword">def</span> <span class="token function">__str__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span> 
    <span class="token keyword">return</span> self<span class="token punctuation">.</span>message
  
<span class="token keyword">try</span><span class="token punctuation">:</span>
  <span class="token keyword">raise</span> WupeiqiException<span class="token punctuation">(</span><span class="token string">'我的异常'</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> WupeiqiException <span class="token keyword">as</span> e<span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="异常捕获" tabindex="-1"><a class="header-anchor" href="#异常捕获" aria-hidden="true">#</a> 异常捕获</h2>
<h3 id="异常捕获中的一些关键字" tabindex="-1"><a class="header-anchor" href="#异常捕获中的一些关键字" aria-hidden="true">#</a> 异常捕获中的一些关键字</h3>
<table>
<thead>
<tr>
<th style="text-align:left">关键字</th>
<th style="text-align:left">关键字说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">try/except</td>
<td style="text-align:left">捕获异常并处理</td>
</tr>
<tr>
<td style="text-align:left">pass</td>
<td style="text-align:left">忽略异常</td>
</tr>
<tr>
<td style="text-align:left">as</td>
<td style="text-align:left">定义异常实例（except MyError as e）</td>
</tr>
<tr>
<td style="text-align:left">else</td>
<td style="text-align:left">如果try中的语句没有引发异常，则执行else中的语句</td>
</tr>
<tr>
<td style="text-align:left">finally</td>
<td style="text-align:left">无论是否出现异常，都执行的代码</td>
</tr>
<tr>
<td style="text-align:left">raise</td>
<td style="text-align:left">抛出/引发异常</td>
</tr>
</tbody>
</table>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code><span class="token keyword">try</span><span class="token punctuation">:</span>
  <span class="token comment"># 主代码块</span>
  <span class="token keyword">pass</span>
<span class="token keyword">except</span> KeyError<span class="token punctuation">,</span>e<span class="token punctuation">:</span>
  <span class="token comment"># 异常时，执行该块</span>
  <span class="token keyword">pass</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
  <span class="token comment"># 主代码块执行完，执行该块</span>
  <span class="token keyword">pass</span>
<span class="token keyword">finally</span><span class="token punctuation">:</span>
  <span class="token comment"># 无论异常与否，最终执行该块</span>
  <span class="token keyword">pass</span>
        
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="raise" tabindex="-1"><a class="header-anchor" href="#raise" aria-hidden="true">#</a> raise</h3>
<p>主动触发异常</p>
<p>适用于主动触发异常，自定义异常内容，自定义报错信息。</p>
<div class="language-python line-numbers-mode" data-ext="py"><pre v-pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">112</span>
<span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> a <span class="token operator">></span> <span class="token number">110</span><span class="token punctuation">:</span>
        <span class="token keyword">raise</span> Exception<span class="token punctuation">(</span><span class="token string">"blahblahblah"</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


