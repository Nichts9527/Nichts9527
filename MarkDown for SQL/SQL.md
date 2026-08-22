

# MySQL数据库知识点归纳

基于MySQL8.0.46版本数据库和Navicat视图工具








## 1.MySQL数据类型

#### 整数类型

|    类型    |  范围   |
| :--------: | :-----: |
|   int(4)   | 4个字节 |
| tinyint(1) | 1个字节 |

#### 浮点类型

|    类型     |                          含义                           |
| :---------: | :-----------------------------------------------------: |
|  flot(m,d)  | 单精度浮点型8位精度（4个字节）m为总个数，d为小数位数。  |
| double(m,d) | 双精度浮点型16位精度（8个字节）m为总个数，d为小数位数。 |

#### 字符类型

|    类型    |                             含义                             |
| :--------: | :----------------------------------------------------------: |
|  char(n)   | 固定长度，即每条数据占用等长字节空间;适合用在身份证号码、手机号码等 |
| varchar(n) |       固定长度,可以设置最大长度;适合用在长度可变的属性       |
|    text    |        可变长度，当不知道属性的最大长度时，适合用text        |

**<span style="color:red;">按照查询速度：char最快,varchar次之，text最慢。</span>**

**字符串型使用建议：**

①经常变化的字段用varchar；
②知道固定长度的用char；
③尽量用varchar；
④超过255字符的只能用varchar或者text；
**<span style="color:red; ">⑤能用varchar的地方不用text。</span>**

#### 日期类型

|   类型    |        含义         |
| :-------: | :-----------------: |
|   date    |   日期 YYYY-MM-DD   |
|   time    |    时间HH:MM:SS     |
| datetime  | YYYY-MM-DD HH:MM:SS |
| timestamp |   YYYYMMDD HHMMSS   |

#### 二进制数据（BLOB）

1.BLOB和TEXT存储方式不同，TEXT以文本方式存储，英文存储区分大小写，而Blob是以二进制方式存储，不分大小写。
2.BLOB存储的数据只能整体读出。
3.TEXT可以指定字符集，BLOB不用指定字符集。



***




## 2.操作数据库的关键字

#### 数据库创建语句

```sql
CREATE DATABASE 数据库名 DEFAULT CHARACTER SET 字符编码;
```

#### 数据库删除语句

```sql
DROP DATABASE 数据库名称;
```

#### 查看已创建数据库

```sql
SHOW DATABASES;
```

#### 选择数据库

```sql
USE 数据库名;
```



***




## 3.操作库表的关键字

#### 库表创建语句

```sql
CREATE TABLE 表名(列名 类型,列名 类型...);
```

#### 库表删除语句

```sql
DROP TABLE 表名;
```

#### 查看已创建库表

```sql
SHOW TABLES;
```

#### 修改表名

```sql
ALTER TABLE 旧表名 RENAME 新表名;
```

#### 修改列名

```sql
ALTER TABLE 表名 CHANGE COLUMN 旧列名 新列名 类型;
```

#### 修改列类型

```sql
ALTER TABLE 表名 MODIFY 列名 新类型;
```

#### 添加新列

```sql
ALTER TABLE 表名 ADD COLUMN 新列名 类型;
```

#### 删除指定列

```sql
ALTER TABLE 表名 DROP COLUMN 列名;
```



***


## 4.MySQL中的约束

<span style="color:red">数据库约束是对表中的数据进行进一步的限制，保证数据的正确性、有效性和完整性。</span>

#### 约束类型

>1.主键约束(Primary Key) PK
>主键约束是使用最频繁的约束。在设计数据表时，一般情况下，都会要求表中设置一个主键。
>主键是表的一个特殊字段，该字段能唯一标识该表中的每条信息。例如，学生信息
>表中的学号是唯一的。  

>2.外键约束(Foreign Key)FK
>外键约束经常和主键约束一起使用，用来确保数据的一致性。  

>3.唯一性约束(Unique)
>唯一约束与主键约束有一个相似的地方，就是它们都能够确保列的唯一性。与主键约束不同的是，唯一约束在一个表中可以有多个，并且设置唯一约束的列是允许有
>空值的。

>4.非空约束(NotNull)
>非空约束用来约束表中的字段不能为空。

>5.检查约束(Check)
>检查约束也叫用户自定义约束，是用来检查数据表中，字段值是否有效的一个手
>段，但目前MySQL数据库不支持检查约束。

#### 添加主键约束(Primary Key)

1.单一主键:使用一个列作为主键列，当该列的值有重复时，则违反唯一约束。
2.联合主键:使用多个列作为主键列，当多个列的值都相同时，则违反唯一约束。

使用DDL语句修改表添加主键约束

```sql
ALTER TABLE 表名 ADD PRIMARY KEY(列名);
```

#### 主键自增长

**MySQL中的自动增长类型要求:**

+ 一个表中只能有一个列为自动增长。
+ 自动增长的列的类型必须是整数类型。
+ 自动增长只能添加到具备主键约束与唯一性约束的列上。
+ 删除主键约束或唯一性约束，如果该列有自动增长能力，则要先去掉自动增长然后删除约束。

使用DDL语句添加主键自增长

```sql
ALTER TABLE 表名 MODIFY 主键 类型 AUTO_INCREMENT;
```

#### 删除主键

使用DDL语句删除主键

```sql
ALTER TABLE 表名 DROP PRIMARY KEY;
```

<span style="color:red">注意：删除主键时，如果主键列具备自动增长能力，需要先去掉自动增长，然后在删除主键。</span>

#### 添加外键约束(Foreign Key)

使用DDL语句修改表添加外键约束

```sql
ALTER TABLE 表名 ADD CONSTRAINT 约束名 FOREIGN KEY(列名) REFERENCES 参照的表名(参照的列名);
```

1.一个表中只能有一个列为自动增长。
2.自动增长的列的类型必须是整数类型。
3.自动增长只能添加到具备主键约束与唯一性约束的列上。
4.删除主键约束或唯一性约束，如果该列有自动增长能力，则要先去掉自动增长然后删除约束。

使用DDL语句添加主键自增长

```sql
ALTER TABLE 表名 MODIFY 主键 类型 AUTO_INCREMENT;
```

#### 删除主键

使用DDL语句删除主键

```sql
ALTER TABLE 表名 DROP PRIMARY KEY;
```

<span style="color:red">注意：删除主键时，如果主键列具备自动增长能力，需要先去掉自动增长，然后在删除主键。</span>

#### 添加外键约束(Foreign Key)

使用DDL语句修改表添加外键约束

```sql
ALTER TABLE 表名 ADD CONSTRAINT 约束名 FOREIGN KEY(列名) REFERENCES 参照的表名(参照的列名);
```

#### 删除外键约束

使用DDL语句删除外键约束

```sql
ALTER TABLE 表名 DROP FOREIGN KEY 约束名;
```

#### 添加唯一性约束(Unique)

使用DDL语句添加唯一性约束

```sql
ALTER TABLE 表名 ADD CONSTRAINT 约束名 UNIQUE(列名);
```

#### 删除唯一性约束

使用DDL语句删除唯一性约束

```
ALTER TABLE 表名 DROP KEY 约束名;
```

#### 添加非空约束(Not Null)

使用DDL语句添加非空约束

```sql
ALTER TABLE 表名 MODIFY 列名 类型 NOT NULL;
```

#### 删除非空约束

使用DDL语句删除非空约束

```sql
ALTER TABLE 表名 MODIFY 列名 类型 NULL;
```

#### 创建表时添加约束

查询表中的约束信息

```sql
SHOW KEYS FROM 表名;
```

使用DDL语句在创建表时添加约束

```sql
CREATE TABLE 表名(列名 类型 约束,列名 类型 约束,...);
```



***



## 5.MySQL中DML操作

#### 添加数据(INSERT)

使用DML语言添加数据

```sql
INSERT INTO 表名(列名1,列名2,列名3,...) VALUES(值1,值2,值3,...);
```

#### 默认值处理(DEFAULT)

**在MySQL中可以使用DEFAULT为列设定一个默认值。如果在插入数据时并未指定该列的
值，那么MySQL会将默认值添加到该列中。**

创建表时指定列的默认值

```sql
CREATE TABLE 表名(列名 类型 default 默认值,...);
```

示例：

```sql
create table emp3(emp_id int primary key auto_increment,name varchar(10),address varchar(50) default 'Unknown');
```

修改表添加新列并指定默认值

```sql
ALTER TABLE 表名 ADD COLUMN 列名 类型 DEFAULT 默认值;
```

示例：

```sql
alter table emp3 add column job_id int default 0;
```

插入数据时的默认值处理

<span style="color:red">如果在插入数据时并未指定该列的值，那么MySQL会将默认值添加到该列中。如果是完全
项插入需要使用default来占位。</span>

```sql
1.insert into emp3 (name) values("admin");
2.insert into emp3 values (default,"oldlu",default,default);
```

#### 更新数据(UPDATE)

```sql
UPDATE 表名 SET 列名=值,列名=值 WHERE 条件;
```

> **注意:**
>
> +++
>
> **更新语句中一定要给定更新条件，否则表中的所有数据都会被更新。**

示例：

```sql
update emp3 set address = "BeiJing" where emp_id = 1;
```

#### 删除数据(DELETE)

使用DELETE删除数据

```sql
DELETE FROM 表名 WHERE 条件;
```

> **注意：**
>
> ***
>
> **在DELETE语句中，如果没有给定删除条件则会删除表中的所有数据。**

示例：

```
delete from emp3 where emp_id = 1;
```

**TRUNCATE清空表**

```sql
TRUNCATE TABLE 表名;
```

示例：

```sql
truncate table emp3;
```



#### <span style="color:red">清空表时DELETE与 TRUNCATE 区别</span>

+ truncate是整体删除(速度较快)，delete是逐条删除(速度较慢);

+ truncate 不写服务器log,delete写服务器log，也就是truncate效率比 delete 高的原因;

+ truncate是会重置自增值，相当于自增列会被置为初始值，又重新从1开始记录，而不是接着原来的值。而delete删除以后，自增值仍然会继续累加。



***



## 6.SELECT基本查询

**SELECT语句从数据库中返回信息。使用一个SELECT语句，可以做下面的事:**

+ **列选择:**能够使用SELECT语句的列选择功能选择表中的列，这些列是想要用查询返回的。当查询时，能够返回列中的数据。
+ **行选择:**能够使用SELECT语句的行选择功能选择表中的行，这些行是想要用查询返回的。能够使用不同的标准限制看见的行。
+ **连接:**能够使用SELECT语句的连接功能来集合数据，这些数据被存储在不同的表中，在它们之间可以创建连接，查询出我们所关心的数据。

#### SELECT基本语法

#### SELECT基本语句

在最简单的形式中，SELECT语句必须包含下面的内容:

+ 一个SELECT子句，指定被显示的列。

+ 一个FROM子句，指定表，该表包含SELECT子句中的字段列表。

  

#### 在语法中

|        语法        |          含义          |
| :----------------: | :--------------------: |
|       SELECT       | 是一个或多个字段的列表 |
|         *          |      选择所有的列      |
|      DISTINCT      |        禁止重复        |
| column\|expression | 选择指定的字段或表达式 |
|       alias        | 给所选择的列不同的标题 |
|     FROM table     |     指定包含列的表     |

#### 查询中的列选择

**选择所有列**

用跟在SELECT关键字后面的星号(*)，你能够显示表中数据的所有列。

示例：

查询departments 表中的所有数据。

```sql
select * from departments;
```

**选择指定列**

能够用SELECT语句来显示表的指定列，指定列名之间用逗号分隔。

示例：

查询departments表中所有部门名称。

```sql
select department_name from departments;
```

#### 查询中的算术表达式

需要修改数据显示方式，如执行计算，或者作假定推测，这些都可能用到算术表达式。一个算术表达式可以包含列名、固定的数字值和算术运算符。

示例：
查询雇员的年薪，并显示他们的雇员ID，名字。

```sql
select employees_id,last_name,12*salary from employees;
```

**运算符的优先级**

+ 如果算术表达式包含有一个以上的运算，乘法和除法先计算。
+ 如果在一个表达式中的运算符优先级相同，计算从左到右进行。
+ 可以用圆括号强制其中的表达式先计算。

####  MySQL中定义空值

<span style="color:red">1.null不是0，也不是空格。</span>
<span style="color:red">2.null是一个未分配的、未知的，或不适用的值。</span>
<span style="color:red">3.如果一行中的某个列缺少数据值，该值被置为null，或者说包含一个空。</span>
<span style="color:red">4.空是一个难以获得的、未分配的、未知的，或不适用的值。空和0或者空格不相同。</span>
<span style="color:red">5.0是一个数字，而空格是一个字符。</span>

####  算术表达式中的空值

包含空值的算术表达式计算结果为空

```sql
SELECT last_name,12*salary*commission_pct FROM employees;
```

#### MySQL中的别名

使用列别名

```sql
SELECT 列名 AS 列别名 FROM 表名 WHERE 条件;
```

#### MySQL中去除重复

SELECT默认显示所有的行，包括相同的行。

```sql
SELECT 列名 FROM 表名;
```

除去重复的行。在SELECT子句中用DISTINCT关键字除去相同的行

```sql
SELECT DISTINCT department_id FROM employees;
```

#### 查询中的行选择

+ 用WHERE子句限制从查询返回的行。
+ 一个WHERE子句包含一个必须满足的条件，WHERE子句紧跟着FROM子句。
+ 如果条件是true，返回满足条件的行。

```sql
SELECT *|投影列 FROM 表名 WHERE 选择条件;
```

#### MySQL中的比较条件

|   运算   |   含义   |
| :------: | :------: |
|    =     |   等于   |
|    >     |   大于   |
|    >=    | 大于等于 |
|    <     |   小于   |
|    <=    | 小于等于 |
| <> \| != |  不等于  |

示例一：

查询employees表中员工薪水大于等于3000的员工的姓名与薪水。

```sql
select last_name,salary from employees where salary >= 3000;
```

示例二：

查询employees表中员工薪水不等于5000的员工的姓名与薪水。

```sql
select last_name,salary from employees where salary<>5000;
```

#### 其他比较条件

|       操作       |         含义         |
| :--------------: | :------------------: |
| BETWEEN...AND... | 在两个值之间（包含） |
|     IN(set)      |  匹配一个任意值列表  |
|       LIKE       |   匹配一个字符模版   |
|     IS NULL      |      是一个空值      |

**1.使用BETWEEN条件**

可以用BETWEEN范围条件显示基于一个值范围的行。指定的范围包含一个下限和一个上限。

```sql
select employee_id,last_name,salary from employees where salary between 3000 and 8000;
```

**2.使用IN条件**

使用 IN成员条件测试在列表中的值。

示例：
查询employees表，找出薪水是5000,6000,8000的雇员ID、名字与薪水。

```sql
select employee_id,last_name,salary from employees where salary in(5000,6000,8000);
```

**3.使用LIKE条件**

+ 使用LIKE 条件执行有效搜索串值的通配符搜索。

+ %表示零个或多个字符，_表示一个字符。

+ 搜索条件既可以包含文字也可以包含数字。

示例：

查询employees中雇员名字第二个字母是e的雇员名字。

```sql
SELECT last_name FROM employees WHERE last_name LIKE "_e%";
```

**4.使用NULL条件**

<span style="color:red">NULL条件，包括IS NULL条件和IS NOT NULL条件。</span>

<span style="color:red">IS NULL条件用于空值测试。空值的意思是难以获得的、未指定的、未知的或者不适用的。
因此，你不能用=，因为null不能等于或不等于任何值。</span>

示例一:
找出emloyees表中那些没有佣金的雇员雇员ID、名字与佣金。

```sql
select employee_id,last_name,commission_pct from employees where commission_pct is null;
```

#### MySQL中的逻辑条件

| 运算 |                     含义                     |
| :--: | :------------------------------------------: |
| AND  |    如果两个组成部分的条件都为真，返回TRUE    |
|  OR  | 如果两个组成部分中的任一个条件为真，返回TRUE |
| NOT  |         如果跟随的条件为假，返回TRUE         |

**逻辑条件组合两个比较条件的结果来产生一个基于这些条件的单个的结果，或者逆转一个单个条件的结果。当所有条件的结果为真时，返回行。可以在WHERE子句中用AND和OR运算符使用多个条件。**

示例一：
查询employees表中雇员薪水是8000的并且名字中含有e的雇员名字与薪水。

```sql
select last_name,salary from employees where salary = 8000 and last_name like '%e%';
```

示例二：
查询employees表中雇员薪水是8000的或者名字中含有e的雇员名字与薪水。

```sql
select last_name,salary from employees where salary = 8000 or last_name like '%e%';
```

示例三：
查询employees表中雇员名字中不包含u的雇员的名字。

```sql
select last_name from employees where last_name not 1ike %u%;
```

#### 优先规则

| 求值顺序 |                             |
| :------: | :-------------------------: |
|    1     |          算术运算           |
|    2     |          连字操作           |
|    3     |          比较操作           |
|    4     | IS [NOT] NULL,LIKE,[NOT] IN |
|    5     |        [NOT] BETWEEN        |
|    6     |             NOT             |
|    7     |             AND             |
|    8     |             OR              |
|    ※     |   使用圆括号改变优先规则    |

#### 使用ORDER BY排序

+ 用ORDER BY子句排序行
  + ASC：升序排序，默认
  + DESC：降序排序
+ ORDER BY子句在SELECT语句的最后。

<span style="color:red">在一个不明确的查询结果中排序返回的行。ORDER BY子句用于排序。如果使用了ORDER BY子句，它必须位于SQL语句的最后。</span>


SELECT语句的执行顺序如下：

+ FROM子句
+ WHERE子句
+ SELECT子句
+ ORDER BY子句

示例一：
查询employees表中的所有雇员，显示他们的ID、名字与薪水，并按薪水升序排序。

```sql
select employee_id,last_name,salary from employees order by salary;
select employee_id,last_name,salary from employees order by salary asc;
```

示例二：
查询employees表中的所有雇员，显示他们的ID与名字，并按雇员名字降序排序。

```sql
 select employee_id,last_name from employees order by last_name;
```

**使用列别名排序**

示例：
显示雇员ID，名字。计算雇员的年薪，年薪列别名为annsal，并对该列进行升序排序。

```sql
select employee_id,last_name,12*salary annsal from employees order by annsal;
```

**多列排序**

+ ORDER BY列表的顺序就是排序的顺序
+ 你可以排序一个不在SELECT列表中的列

示例：
以升叙排序显示DEPARTMENT_ID列，同时以降序排序显示 SALARY列。

```sql
 select department_id,salary from employees order by department_id asc,salary desc;
```



***



## 7.SQL函数

**函数是SQL的一个非常强有力的特性，函数能够用于下面的目的：**

+ 执行数据计算
+ 修改单个数据项
+ 操作输出进行行分组
+ 格式化显示的日期和数字
+ 转换列数据类型

<span style="color:red">SQL函数有输入参数，并且总有一个返回值。</span>

#### 函数分类

**1.单行函数**

单行函数仅对单个行进行运算，并且每行返回一个结果。

常见的函数类型：

+ 字符
+ 数字
+ 日期
+ 转换

**2.多行函数**

多行函数能够操纵成组的行，每个行组给出一个结果，这些函数也被称为组函数。

#### 单行函数

**作用如下：**

+ 操作数据项
+ 接受多个参数并返回一个值
+ 作用于每一个返回行
+ 每行返回一个结果
+ 可以修改数据类型
+ 可以嵌套
+ 接受多个参数，参数可以是一个列或者一个表达式

**单行函数分为五类：**

1.字符函数

2.数字函数

3.日期函数

4.转换函数

5.通用函数

#### 字符函数

**大小写处理函数**

|         函数         |        描述         |                         实例                          |
| :------------------: | :-----------------: | :---------------------------------------------------: |
| LOWER(s) \| LCASE(s) | 将字符串s转换为小写 | 将字符串 OLDLU转换为小写：SELECT LOWER("OLDLU");oldlu |
| UPPER(s) \| UCASE(s) | 将字符串s转换为大写 | 将字符串 oldlu转换为大写：SELECT UPPER("oldlu");OLDLU |

示例：
显示雇员Davies的雇员号、姓名和部门号，将姓名转换为大写。

```sql
select employee_id,lower(last_name),department_id from employees where last_name ='davies';
```

**字符处理函数**

|            函数            |                         描述                          |                             实例                             |
| :------------------------: | :---------------------------------------------------: | :----------------------------------------------------------: |
|         LENGTH(S)          |                   返回字符串s的长度                   |     返回字符串oldlu的字符数：SELECT LENGTH("oldlu"); --5     |
|     CONCAT(S1,S2...Sn)     |        字符串S1,S2等多个字符串合并为一个字符串        | 合并多个字符串：SELECT CONCAT("sxt","teacher","oldlu"); --sxt teacher oldlu; |
|      LPAD(S1,len,S2)       |  在字符串S1的开始处填充字符串S2，使字符串长度达到len  | 将字符串x填充到oldlu字符串的开始处：SELECT LPAD('oldlu',8,'x');  --xxxoldlu |
|          LTRIM(S)          |                去掉字符串S开始处的空格                | 去掉字符串oldlu开始处的空格：SELECT LTRIM(" oldlu");--oldlu  |
|      REPLACE(S,S1,S2)      |           将字符串S2替代字符串S中的字符串S1           | 将字符串oldlu中的字符o替换为字符O：SELECT REPLACE('oldlu','o','O'); --Oldlu |
|         REVERSE(S)         |                 将字符串S的顺序反过来                 |    将字符串abc的顺序反过来：SELECT REVERSE('abc'); -- cba    |
|      RPAD(S1,len,S2)       | 在字符串S1的结尾处添加字符串S2，使字符串的长度达到len | 将字符串xx填充到oldlu字符串的结尾处：SELECT RPAD('oldlu',8,'x'); -- oldluxxx |
|          RTRIM(S)          |                去掉字符串S结尾处的空格                |  去掉字符串 oldlu的末尾空格：SELECT RTRIM("oldlu ");--oldlu  |
|  SUBSTR(S, start,length)   |    从字符串S的start位置截取长度为length的子字符串     | 从字符串 OLDLU中的第2个位置截取3个字符：SELECT SUBSTR("OLDLU", 2, 3); -- LDL |
| SUBSTRING(S,start, length) |    从字符串S的start位置截取长度为length的子字符串     | 从字符串 OLDLU中的第2个位置截取3个字符：SELECT SUBSTR("OLDLU", 2, 3); -- LDL |
|          TRIM(S)           |             去掉字符串S开始和结尾处的空格             |  去掉字符串oldlu的首尾空格：SELECT TRIM(" oldlu ");--oldlu   |

示例：
显示所有工作岗位名称从第4个字符位置开始，包含字符串REP的雇员的ID信息，将雇员的姓和名连接显示在一起，还显示雇员名的的长度，以及名字中字母a的位置。

```sql
SELECT employee_id, CONCAT(first_name,last_name) AS NAME,job_id, LENGTH(last_name),INSTR(last_name, 'a'),"Contains 'a'?" FROM employees WHERE SUBSTR(job_id, 4) = 'REP';
```

#### 数字函数

**ROUND(column|expression, n)函数**

ROUND函数四舍五入列、表达式或者n位小数的值。如果第二个参数是0或者缺少，值被四舍五入为整数。如果第二个参数是2，值被四舍五入为两位小数。如果第二个参数是-2，值被四舍五入到小数点左边两位。

```sql
SELECT ROUND(45.923,2), ROUND(45.923,0),ROUND(45.923,-1);
```

**TRUNCATE(column|expression,n)函数**

TRUNCATE函数的作用类似于ROUND函数。如果第二个参数是0或者缺少，值被截断为整数。如果第二个参数是2，值被截断为两位小数。如果第二个参数是-2，值被截断到小数点左边两位。<span style="color:red">与ROUND最大的区别是不会进行四舍五入。</span>

```sql
SELECT TRUNCATE(45.923,2);
```

**使用MOD(M,N)函数**

MOD函数找出m 除以n的余数。
示例：
所有job_id是SA_REP的雇员的名字，薪水以及薪水被5000除后的余数。

```sql
SELECT last_name,salary,MOD(salary, 5000) FROM employees WHERE job_id="SA_REP";
```

#### 日期函数

在MySQL中允许直接使用字符串表示日期，但是要求字符串的日期格式必须为：YYYY-MM-DD HH:MI:SS' 或者YYYY/MM/DD HH:MI:SS';

|      函数      |                   描述                   |                    实例                     |
| :------------: | :--------------------------------------: | :-----------------------------------------: |
|   CURDATE()    |               返回当前日期               |       SELECT CURDATE(); --2026-08-22        |
|   CURTIME()    |               返回当前时间               |        SELECT CURTIME(); --23:21:22         |
| CURRENT_DATE() |               返回当前日期               |       SELECT CURDATE(); --2026-08-22        |
| CURRENT_TIME() |               返回当前时间               |        SELECT CURTIME(); --23:21:22         |
|     DAY(d)     |          返回日期值d的日期部分           |        SELECT DAY("2017-06-15");--15        |
|    HOUR(t)     |             返回t中的小时值              |         SELECT HOUR('01:02:03");--1         |
|    MONTH(d)    |        返回日期d中的月份值，1到12        |  SELECT MONTH("2011-11-11 11:11:11");--11   |
|   SECOND(t)    |             返回t中的秒钟值              |        SELECT SECOND('01:02:03');--3        |
|     NOW()      |            返回当前日期和时间            |     SELECT NOW();--2026-08-22 23:25:47      |
|   TO_DAYS(d)   |     计算日期d距离0000年1月1日的天数      | SELECT TO_DAYS('0000-01-01 01:01:01');--366 |
|    WEEK(d)     | 计算日期d是本年的第几个星期，范围是0到53 |   SELECT WEEK("2011-11-11 11:11:11");->45   |
|    YEAR(d)     |                 返回年份                 |      SELECT YEAR("2017-06-15"); --2017      |

示例一:
向employees表中添加一条数据，雇员ID：300，名字：kevin，email：kevin@sxt.cn，入职时间：2049-5-18:30:30，工作部门：'T_PROG'。

```sql
insert into employees (EMPLOYEE_ID, 1ast_name, email, HIRE_DATE, JOB_ID) values(300,'kevin','kevin@sxt.cn','2049-5-1 8:30:30','IT_PROG');
```

示例二:
显示所有在部门90中的雇员的名字和从业的周数。雇员的总工作时间以周计算，用当前日期(SYSDATE)减去雇员的受雇日期，再除以7。

```sql
SELECT last_name,(SYSDATE()-hire_date)/7 AS WEEKS FROM employees WHERE department_id = 90;
```

#### 转换函数

**数据类型转换**

1.隐式数据类型转换：

> 隐式数据类型转换是指MySQL服务器能够自动地进行类型转换。如:可以将标准格式的字
> 串日期自动转换为日期类型。
> MySQL字符串日期格式为:YYYY-MM-DD HH:MI:SS' 或 ‘YYYY/MM/DD HH:MI:SS';

2.显式数据类型转换

> 显示数据类型转换是指需要依赖转换函数来完成相关累心的转换。如:
>
> + DATE_FORMAT(date,format);将日期转换成字符串
> + STR_TO_DATE(str,format);将字符串转换成日期

示例一：
向employees表中添加一条数据，雇员ID：400，名字：oldlu，email:oldlu@sxt.cn，入职时间：2049年5月5日，工作部门："T_PROG"。

```sql
insert into employees (EMPLOYEE_ID,1ast_name,email,HIRE_DATE,J0B_ID) values (400,'oldlu','oldlu@sxt.cn',STR_TO_DATE('2049年5月5日','%Y年%m月%d日'),'IT_PR0G');
```

示例二:
查询employees表中雇员名字为King的雇员的入职日期，要求显示格式为yyyy年MM月dd 日。

```sql
select DATE_FORMAT(hire_date,'%Y年%m月%d') from employees where last_name = 'King';
```

