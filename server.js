const express = require('express')
const mysql = require('mysql')
const app = express()


// 建立与 Mysql 数据库的连接关系
const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'tieba'   // 指定操作哪个数据库
})


// 发布文章
app.post('/post/publish', (req, res) => {
  let sqlStr = 'instert into article set ?'
  // 执行 sql 语句
  db.query(sqlStr, article, (err, results) => {
    if (err) {
      return console.log(err.message);
    }
    if (results.affectedRows === 1) {
      console.log('插入数据成功!!!');
    }
  })
})

// 启动服务器
app.listen(81, () => {
  console.log('express server running at http://127.0.0.1:81');
})