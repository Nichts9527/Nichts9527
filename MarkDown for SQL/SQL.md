# MySQL数据库知识点归纳
基于MySQL8.0.46版本数据库和Navicat视图工具
***


## 1.MySQL数据类型
#### 整数类型
>1.int(4),4个字节。
>2.tinyint(1),1个字节。

#### 浮点类型
>1.flot(m,d)，单精度浮点型8位精度（4个字节）m为总个数，d为小数位数。
>2.double(m,d)，双精度浮点型16位精度（8个字节）m为总个数，d为小数位数。

#### 字符类型
>1.char(n),固定长度，即每条数据占用等长字节空间;适合用在身份证号码、手机号码等
>2.varchar(n),固定长度,可以设置最大长度;适合用在长度可变的属性。
>3.text,可变长度，当不知道属性的最大长度时，适合用text。
>4.<mark style="color:red;">按照查询速度：char最快,varchar次之，text最慢。</mark>

**字符串型使用建议：**
>①经常变化的字段用varchar；
>②知道固定长度的用char；
>③尽量用varchar；
>④超过255字符的只能用varchar或者text；
><mark style="color:red; ">⑤能用varchar的地方不用text。</mark>

#### 日期类型
>1.date，含义：日期 YYYY-MM-DD
>2.time，含义：时间HH:MM:SS
>3.datetime，含义：YYYY-MM-DD HH:MM:SS
>4.timestamp，含义：YYYYMMDD HHMMSS

#### 二进制数据（BLOB）
>1.BLOB和TEXT存储方式不同，TEXT以文本方式存储，英文存储区分大小写，而Blob是以二进制方式存储，不分大小写。
>2.BLOB存储的数据只能整体读出。
>3.TEXT可以指定字符集，BLOB不用指定字符集。
***


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
***
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

#### 修改表名
```
ALTER TABLE 旧表名 RENAME 新表名;
```

#### 修改列名
```
ALTER TABLE 表名 CHANGE COLUMN 旧列名 新列名 类型;
```

#### 修改列类型
```
ALTER TABLE 表名 MODIFY 列名 新类型;
```

#### 添加新列
```
ALTER TABLE 表名 ADD COLUMN 新列名 类型;
```

#### 删除指定列
```
ALTER TABLE 表名 DROP COLUMN 列名;
```


***
## 4.MySQL中的约束
<span style="color:red">数据库约束是对表中的数据进行进一步的限制，保证数据的正确性、有效性和完整性。</span>

#### 约束类型

>1.主键约束(Primary Key) PK
主键约束是使用最频繁的约束。在设计数据表时，一般情况下，都会要求表中设置一个主键。
主键是表的一个特殊字段，该字段能唯一标识该表中的每条信息。例如，学生信息
表中的学号是唯一的。  

>2.外键约束(Foreign Key)FK
外键约束经常和主键约束一起使用，用来确保数据的一致性。  

>3.唯一性约束(Unique)
唯一约束与主键约束有一个相似的地方，就是它们都能够确保列的唯一性。与主键约束不同的是，唯一约束在一个表中可以有多个，并且设置唯一约束的列是允许有
空值的。

>4.非空约束(NotNull)
非空约束用来约束表中的字段不能为空。

>5.检查约束(Check)
检查约束也叫用户自定义约束，是用来检查数据表中，字段值是否有效的一个手
段，但目前MySQL数据库不支持检查约束。

#### 添加主键约束(Primary Key)
1.单一主键:使用一个列作为主键列，当该列的值有重复时，则违反唯一约束。
2.联合主键:使用多个列作为主键列，当多个列的值都相同时，则违反唯一约束。

使用DDL语句修改表添加主键约束
```
ALTER TABLE 表名 ADD PRIMARY KEY(列名);
```

#### 主键自增长
**MySQL中的自动增长类型要求:**
1.一个表中只能有一个列为自动增长。
2.自动增长的列的类型必须是整数类型。
3.自动增长只能添加到具备主键约束与唯一性约束的列上。
4.删除主键约束或唯一性约束，如果该列有自动增长能力，则要先去掉自动增长然后删除约束。

使用DDL语句添加主键自增长
```
ALTER TABLE 表名 MODIFY 主键 类型 AUTO_INCREMENT;
```

#### 删除主键
使用DDL语句删除主键
```
ALTER TABLE 表名 DROP PRIMARY KEY;
```
<span style="color:red">注意：删除主键时，如果主键列具备自动增长能力，需要先去掉自动增长，然后在删除主键。</span>

#### 添加外键约束(Foreign Key)
使用DDL语句修改表添加外键约束
```
ALTER TABLE 表名 ADD CONSTRAINT 约束名 FOREIGN KEY(列名) REFERENCES 参照的表名(参照的列名);
```