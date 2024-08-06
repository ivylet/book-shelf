
## install

```shell
npm install @supabase/supabase-js
```


初始化

```js
  
import { createClient } from '@supabase/supabase-js' // Create a single supabase client for interacting with your database 
const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')
```
同样支持ts


## 数据库操作

### 获取 fetch data
```js
const {data,error} = await supabase.from('countries').select()
//从表中from
```
### 插入 insert data
```js
const { error } = await supabase .from('countries') .insert({ id: 1, name: 'Denmark' })
```

### 更新 update data 
```js
const { error } = await supabase .from('countries') .update({ name: 'Australia' }) .eq('id', 1)
```
### 更新插入 upsert data
```js
const { data, error } = await supabase .from('countries') .upsert({ id: 1, name: 'Albania' }) .select()
//插入数据后并返回这个数据
```
### 删除 delete data
```js
const response = await supabase .from('countries') .delete() .eq('id', 1)
```
### 调用 call a postgres function
```js
const { data, error } = await supabase.rpc('hello_world')
```
### 使用 using filter
```js
const { data, error } = await supabase
  .from('cities')
  .select('name, country_id')
  .eq('name', 'The Shire')    // Correct
  //列中等于The Shire的值
```
### filters
### modifiers
```js
const { data, error } = await supabase
  .from('countries')
  .upsert({ id: 1, name: 'Algeria' })
  .select()
//插入结果后 select  返回结果给data
```

## 认证Auth
supabase也有认证功能

```ts
import { createClient } from '@supabase/supabase-js' const supabase = createClient(supabase_url, anon_key)

//服务器端
import { createClient } from '@supabase/supabase-js' const supabase = createClient(supabase_url, anon_key, { auth: { autoRefreshToken: false, persistSession: false, detectSessionInUrl: false } })
```

### 创建新用户
```ts
const { data, error } = await supabase.auth.signUp({ 
	phone: '123456789', 
	password: 'example-password', 
	options: 
		{ 
			channel: 'sms' 
		}
	})
```
### 倾听身份验证事件
```ts
  
const { data } = supabase.auth.onAuthStateChange((event, session) => { console.log(event, session) 
																	  if (event === 'INITIAL_SESSION') { 
			// handle initial session 
	} else if (event === 'SIGNED_IN') { // handle sign in event 
	} else if (event === 'SIGNED_OUT') { // handle sign out event 
	} else if (event === 'PASSWORD_RECOVERY') { // handle password recovery event 
	} else if (event === 'TOKEN_REFRESHED') { // handle token refreshed event 
	} else if (event === 'USER_UPDATED') { // handle user updated event 
	} }) // call unsubscribe to remove the callback 
	data.subscription.unsubscribe()
```
### 创建匿名用户
```ts
const { data, error } = await supabase.auth.signInAnonymously({
  options: {
    captchaToken
  }
});
```

如此云云~~

[Supabase Javascript 客户端 - 简介 --- Supabase Javascript Client - Introduction](https://supabase.com/docs/reference/javascript/auth-api)
## 支持EDGE Function
```js
const { data, error } = await supabase.functions.invoke('hello', {
  headers: {
    "my-custom-header": 'my-custom-header-value'
  },
  method: 'GET'
})
```

## 实时 Realtime
监听数据库中的表项更改。
当我们把一张表的`Realtime`选项开启后，这张表数据的增删改操作，都会产生消息，并且推送到每个订阅了这个频道消息的客户端上。
```js
import { RealtimeClient } from '@supabase/realtime-js'

const client = new RealtimeClient(REALTIME_URL, {
  params: {
    apikey: API_KEY
  },
})

const channel = client.channel('test-channel', {})

channel.subscribe((status, err) => {
  if (status === 'SUBSCRIBED') {
    console.log('Connected!')
  }

  if (status === 'CHANNEL_ERROR') {
    console.log(`There was an error subscribing to channel: ${err.message}`)
  }

  if (status === 'TIMED_OUT') {
    console.log('Realtime server did not respond in time.')
  }

  if (status === 'CLOSED') {
    console.log('Realtime channel was unexpectedly closed.')
  }
})

```
## 存储桶
Supabase的存储桶（Storage Bucket）是Supabase平台提供的一项服务，它允许用户上传、存储和管理文件，类似于Amazon S3或Google Cloud Storage。以下是Supabase存储桶的主要功能和用途：

### 创建存储桶
```ts
const { data, error } = await supabase .storage .createBucket('avatars', { public: false, allowedMimeTypes: ['image/png'], fileSizeLimit: 1024 })
```
### 检索存储桶
```ts
const { data, error } = await supabase .storage .getBucket('avatars')
```
### 列出所有存储桶
```ts
const { data, error } = await supabase .storage .listBuckets()
```
### 更新存储桶
```ts
const { data, error } = await supabase .storage .updateBucket('avatars', { public: false, allowedMimeTypes: ['image/png'], fileSizeLimit: 1024 })
```
### 删除存储桶
```ts
const { data, error } = await supabase .storage .deleteBucket('avatars')
```
### 清空存储桶
```ts
const { data, error } = await supabase .storage .emptyBucket('avatars')
```

### 签名URL
类似网盘分享链接，这个链接可以下载可以上传
```ts
const { data, error } = await supabase .storage .from('avatars') .createSignedUrl('folder/avatar1.png', 60)
```



测试supabase存储桶功能 
测试主题变换
设置页面
侧边文件栏如何实现


富文本编译器[tiptap](https://templates.tiptap.dev/8TdzFHtFpT#c03a37be-5cb8-4494-a0ec-7c508f029747)

前后端交接

