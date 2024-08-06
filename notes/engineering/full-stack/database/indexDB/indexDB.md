## 简介以及特点
IndexedDB、Cookie、localStorage和sessionStorage是客户端存储解决方案，它们各自具有不同的特点和适用场景：
### Cookie的特点：

- **自动发送**：每个HTTP请求都会自动携带同源的Cookie，因此它们对服务器也是可见的。
- **大小限制**：一般单个Cookie保存的数据不超过4KB。
- **生命周期**：可以设置过期时间，或者为会话期Cookie，在浏览器关闭时清除。
- **用途**：常用于存储会话标识（如用户登录信息）、个人偏好等。
- **安全性**：可以通过设置Secure、HttpOnly和SameSite属性来提高安全性。
### localStorage的特点：
- **存储容量**：通常比Cookie大，根据不同浏览器，可以达到5MB甚至更多。
- **生命周期**：数据在浏览器关闭后依然存在，直到主动清除。
- **访问性**：仅在客户端可用，不会随HTTP请求发送到服务器。
- **同源限制**：遵循同源策略，只能被相同源的页面访问。
### sessionStorage的特点：
- **存储容量**：与localStorage相似，具有较大的存储空间。
- **生命周期**：数据在页面会话期间有效，当浏览器窗口或标签关闭时数据被清除。
- **访问性**：与localStorage相同，仅在客户端可用，且遵循同源策略。
### IndexedDB的特长：
- **大量数据存储**：可以存储大量结构化数据，包括二进制数据，容量远大于localStorage和sessionStorage。
- **异步操作**：所有数据库操作都是异步的，不会阻塞UI线程，提高性能。
- **事务支持**：支持事务，确保数据操作的原子性，一致性，隔离性和持久性（ACID属性）。
- **索引和搜索**：可以创建索引，优化查询性能，高效搜索大量数据。
- **复杂数据类型**：可以存储复杂数据类型，如对象和数组。
- **离线应用**：适合构建离线Web应用，即使没有网络连接也能访问数据。
- **浏览器支持**：现代浏览器广泛支持IndexedDB，但IE旧版本不支持或支持不完整。
### IndexedDB的特长总结：

IndexedDB的主要优势在于其能够存储大量数据、异步操作不阻塞UI、支持事务和复杂的查询，以及对二进制数据的支持。这使得IndexedDB非常适合需要处理大量数据、构建复杂应用或离线应用的场景。相比之下，localStorage和sessionStorage更适合存储少量数据，而Cookie则适用于需要在客户端和服务器之间共享少量数据的情况。

### 使用场景
所有的场景都基于客户端需要存储大量数据的前提下：

1. 数据可视化等界面，大量数据，每次请求会消耗很大性能。
2. 即时聊天工具，大量消息需要存在本地。
3. 其它存储方式容量不满足时，不得已使用IndexedDB



## 重要概念

1. **数据库（Database）**：
   - IndexedDB中的数据库是数据的容器，有版本的概念。

2. **对象存储（Object Store）**：
   - 类似于关系数据库中的表，用于存储记录（数据行）。

3. **索引（Index）**：
   - 为对象存储中的属性创建索引，优化查询性能。

4. **事务（Transaction）**：
   - 数据库操作在事务中执行，确保数据的一致性和完整性。

5. **键（Key）**：
   - 每个记录都有一个唯一的键，用于索引和检索数据。

6. **键范围（Key Range）**：
   - 用于定义查询范围的对象。

7. **游标（Cursor）**：
   - 用于遍历对象存储中的记录。

8. **请求（Request）**：
   - 用于执行数据库操作，如读取、写入等。

9. **响应（Response）**：
   - 请求完成后的结果或错误信息。

## 如何使用

1. **打开数据库**：
   - 使用`indexedDB.open()`方法打开或创建数据库。

   ```javascript
   const request = indexedDB.open('myDatabase', 1);
   ```

2. **处理数据库升级**：
   - 在`onupgradeneeded`事件中创建或修改对象存储和索引。

   ```javascript
   request.onupgradeneeded = (event) => {
     const db = event.target.result;
     if (!db.objectStoreNames.contains('storeName')) {
       db.createObjectStore('storeName', {keyPath: 'id'});
     }
   };
   ```

3. **创建事务和操作数据库**：
   - 事务是执行数据库操作的单元。

   ```javascript
   const transaction = db.transaction(['storeName'], 'readwrite');
   const store = transaction.objectStore('storeName');
   ```

4. **添加数据**：
   - 使用`add()`方法添加新记录。

   ```javascript
   const request = store.add({id: 1, data: 'My data'});
   request.onsuccess = () => console.log('Data added');
   ```

5. **读取数据**：
   - 使用`get()`方法读取记录。

   ```javascript
   const request = store.get(1);
   request.onsuccess = (event) => console.log(event.target.result);
   ```

6. **删除数据**：
   - 使用`delete()`方法删除记录。

   ```javascript
   const request = store.delete(1);
   request.onsuccess = () => console.log('Data deleted');
   ```

7. **更新数据**：
   - 使用`put()`方法更新记录。

   ```javascript
   const request = store.put({id: 1, data: 'Updated data'});
   request.onsuccess = () => console.log('Data updated');
   ```

8. **使用游标遍历数据**：
   - 打开游标并遍历对象存储中的所有记录。

   ```javascript
   const request = store.openCursor();
   request.onsuccess = (event) => {
     const cursor = event.target.result;
     if (cursor) {
       console.log(cursor.value);
       cursor.continue();
     }
   };
   ```

9. **监听事务和数据库事件**：
   - 处理事务完成或错误。

   ```javascript
   transaction.oncomplete = () => console.log('Transaction completed');
   transaction.onerror = () => console.error('Transaction error');
   ```

10. **关闭数据库连接**：
    - 操作完成后关闭数据库。

    ```javascript
    db.close();
    ```

11. **错误处理**：
    - 妥善处理IndexedDB操作中可能出现的错误。

使用IndexedDB时，要记住它是异步的，并且需要在事务中进行操作。通过监听事件如`onsuccess`、`onerror`、`onupgradeneeded`等来处理数据库的打开、升级和操作成功或失败的情况。此外，由于IndexedDB遵循同源策略，它只能被创建它的站点访问。通过上述步骤，你可以在Web应用中使用IndexedDB进行客户端存储。
