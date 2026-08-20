# MySQL数据库知识点归纳
基于MySQL8.0.46版本数据库和Navicat视图工具

## 1.MySQL数据类型
#### 整数类型
1.int(4),4个字节。
2.tinyint(1),1个字节。



#### 浮点类型
1.flot(m,d)，单精度浮点型8位精度（4个字节）m为总个数，d为小数位数。
2.double(m,d)，双精度浮点型16位精度（8个字节）m为总个数，d为小数位数。



#### 字符类型
1.char(n),固定长度，即每条数据占用等长字节空间;适合用在身份证号码、手机号码等
2.varchar(n),固定长度,可以设置最大长度;适合用在长度可变的属性。
3.text,可变长度，当不知道属性的最大长度时，适合用text。
4.<mark style="color:red;background-color:white ">按照查询速度：char最快,varchar次之，text最慢。</mark>



**字符串型使用建议：**
①经常变化的字段用varchar；
②知道固定长度的用char；
③尽量用varchar；
④超过255字符的只能用varchar或者text；
<mark style="color:red;background-color:white ">⑤能用varchar的地方不用text。</mark>



#### 日期类型
1.date，含义：日期 YYYY-MM-DD
2.time，含义：时间HH:MM:SS
3.datetime，含义：YYYY-MM-DD HH:MM:SS
4.timestamp，含义：YYYYMMDD HHMMSS



#### 二进制数据（BLOB）
1.BLOB和TEXT存储方式不同，TEXT以文本方式存储，英文存储区分大小写，而Blob是以
二进制方式存储，不分大小写。
2.BLOB存储的数据只能整体读出。
3.TEXT可以指定字符集，BLOB不用指定字符集。



## 2.操作数据库的关键字
#### 数据库创建语句
```
CREATE DATABASE 数据库名 DEFAULT CHARACTER SET 字符编码;
```



#### 数据库删除语句
```
DROP DATABASE 数据库名称;
```



#### 查看已创建数据库

```
SHOW DATABASES;
```



#### 选择数据库
```
USE 数据库名;
```



## 3.操作库表的关键字
#### 库表创建语句
```
CREATE TABLE 表名(列名 类型,列名 类型...);
```



#### 库表删除语句
```
DROP TABLE 表名;
```



#### 查看已创建库表
```
SHOW TABLES;
```