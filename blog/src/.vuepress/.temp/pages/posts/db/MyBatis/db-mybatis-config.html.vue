<template><div><h2 id="mybatis的基本配置" tabindex="-1"><a class="header-anchor" href="#mybatis的基本配置" aria-hidden="true">#</a> MyBatis的基本配置</h2>
<h3 id="基本对象" tabindex="-1"><a class="header-anchor" href="#基本对象" aria-hidden="true">#</a> 基本对象</h3>
<ul>
<li>
<p><code v-pre>SqlSessionFactoryBuilder()</code>
通过使用<code v-pre>build()</code>函数构建<code v-pre>SqlSessionFactory()</code>，<code v-pre>SqlSessionFactory()</code>为MyBatis的非常重要的对象。</p>
</li>
<li>
<p><code v-pre>SqlSessionFactory()</code>
MyBatis中很重要的对象，它的实例类是线程安全的，一般一个数据库只创建一个<code v-pre>SqlSessionFactory()</code>。它主要用于创建<code v-pre>SqlSession()</code>，含有多个重载的创建<code v-pre>SqlSession()</code>的<code v-pre>openSession()</code>函数。</p>
</li>
<li>
<p><code v-pre>SqlSession()</code></p>
<p>主要是应用程序与持久层之间执行交互操作的对象，主要是用于执行持久化操作，封装了执行SQL语句的方法。它的实例类是线程不安全的，使用后要及时关闭，常放在<code v-pre>try finally</code>语句中的finally语句中进行关闭操作。</p>
</li>
</ul>
<p>要使用<code v-pre>SqlSessionFactoryBuilder()</code> 创建 <code v-pre>SqlSessionFactory()</code>，<code v-pre>SqlSessionFactory()</code>然后 创建 <code v-pre>SqlSession()</code></p>
<h3 id="基本配置文件" tabindex="-1"><a class="header-anchor" href="#基本配置文件" aria-hidden="true">#</a> 基本配置文件</h3>
<p>基本配置文件是由<code v-pre>&lt;configuration&gt;</code>标签包裹的xml文件，<code v-pre>&lt;configuration&gt;</code>元素是整个 XML 配置文件的根节点，其角色就相当于是 MyBatis 的总管，MyBatis 所有的配置信息都会存放在它里面。</p>
<ul>
<li><code v-pre>&lt;properties&gt;</code>
用于读取外部配置文件的信息，比如获取数据库的连接信息。</li>
<li><code v-pre>&lt;settings&gt;</code>
主要用于改变MyBatis运行时的行为，比如开启二级缓存、延迟加载等。主要是定义配置参数，根据设计需求进行开启与关闭。</li>
<li><code v-pre>&lt;typeAliases&gt;</code>
改标签的中文意思是类型别名，在确定操作对象时通常需要输入全限定名，而全限定名一般都很长。所以MyBatis提供了类型别名标签，可以用于一个别名来代替全限定名。不仅仅是代替类名，也包含了对Java类型的别名代替。</li>
<li><code v-pre>&lt;environments&gt;</code>
用于指定配套多套运行环境，比如测试环境，开发环境，生产环境，但是必须指定一个默认环境。运行环境主要包括不同的数据源<code v-pre>&lt;dataSource&gt;</code>与事务管理<code v-pre>&lt;TransactionManager&gt;</code>。
数据源提供了三种<code v-pre>UNPOOLED</code>、<code v-pre>POOLED</code>与<code v-pre>JNDI</code>。事务管理器主要有<code v-pre>JDBC</code>与<code v-pre>MANGED</code>，一般Spring也有事务管理器。</li>
<li><code v-pre>&lt;mappers&gt;</code>
用于指定MyBatis的映射文件，映射文件中包含了POJO对象与数据表之间的映射信息。找到映射文件后解析其中的映射信息。</li>
</ul>
<p>根据MyBatis的基本配置文件可以发现，其实需要开发的主要是映射文件。</p>
<h3 id="映射文件配置" tabindex="-1"><a class="header-anchor" href="#映射文件配置" aria-hidden="true">#</a> 映射文件配置</h3>
<ul>
<li><code v-pre>&lt;select&gt;</code></li>
<li><code v-pre>&lt;insert&gt;</code></li>
<li><code v-pre>&lt;update&gt;</code></li>
<li><code v-pre>&lt;delete&gt;</code></li>
<li><code v-pre>&lt;sql&gt;</code>
用于定义可以复用的sql片段，减少代码量。</li>
<li><code v-pre>&lt;resultMap&gt;</code>
用于进行变量名的映射，比如查询<code v-pre>name</code>时，sql中写的是<code v-pre>name</code>，但对应的数据库中的列名为<code v-pre>uname</code>，则可以使用resultMap避免出现不对应的情况。</li>
</ul>
<h2 id="动态sql" tabindex="-1"><a class="header-anchor" href="#动态sql" aria-hidden="true">#</a> 动态SQL</h2>
<p>MyBatis通过采用功能强大的基于对象导航图语言的表达式来完成动态SQL，开发人员可以通过动态SQL灵活组装SQL语句，一定程度上避免了单一SQL语句的反复堆砌，提高了SQL语句的复用性。</p>
<h3 id="基本元素" tabindex="-1"><a class="header-anchor" href="#基本元素" aria-hidden="true">#</a> 基本元素</h3>
<table>
<thead>
<tr>
<th>元素</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>&lt;if&gt;</code></td>
<td>判断语句，用于单条件判断</td>
</tr>
<tr>
<td><code v-pre>&lt;choose&gt;(&lt;when&gt;,&lt;otherwise&gt;)</code></td>
<td>判断语句，用于多条件判断</td>
</tr>
<tr>
<td><code v-pre>&lt;where&gt;</code></td>
<td>简化SQL语句中where的条件判断</td>
</tr>
<tr>
<td><code v-pre>&lt;trim&gt;</code></td>
<td></td>
</tr>
<tr>
<td><code v-pre>&lt;set&gt;</code></td>
<td></td>
</tr>
<tr>
<td><code v-pre>&lt;foreach&gt;</code></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="条件查询" tabindex="-1"><a class="header-anchor" href="#条件查询" aria-hidden="true">#</a> 条件查询</h3>
<h3 id="更新操作" tabindex="-1"><a class="header-anchor" href="#更新操作" aria-hidden="true">#</a> 更新操作</h3>
<h3 id="复杂查询操作" tabindex="-1"><a class="header-anchor" href="#复杂查询操作" aria-hidden="true">#</a> 复杂查询操作</h3>
<h2 id="mybatis的关联映射与缓存" tabindex="-1"><a class="header-anchor" href="#mybatis的关联映射与缓存" aria-hidden="true">#</a> MyBatis的关联映射与缓存</h2>
<h3 id="关联映射" tabindex="-1"><a class="header-anchor" href="#关联映射" aria-hidden="true">#</a> 关联映射</h3>
<h3 id="缓存机制" tabindex="-1"><a class="header-anchor" href="#缓存机制" aria-hidden="true">#</a> 缓存机制</h3>
<h2 id="注解开发" tabindex="-1"><a class="header-anchor" href="#注解开发" aria-hidden="true">#</a> 注解开发</h2>
</div></template>


