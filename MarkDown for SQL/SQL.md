# 基于MySQL8.0.46Navicat视图工具的SQL查询语法知识点
## 1.MySQL数据类型
**整数类型：**
*`int(4),4个字节。`*
*`tinyint(1),1个字节。`*


**浮点类型：**
*`flot(m,d)，单精度浮点型8位精度（4个字节）m为总个数，d为小数位数。`*
*`double(m,d)，双精度浮点型16位精度（8个字节）m为总个数，d为小数位数。`*


**字符类型：**
*`char(n),固定长度，即每条数据占用等长字节空间;适合用在身份证号码、手机号码等`*
*`varchar(n),固定长度,可以设置最大长度;适合用在长度可变的属性。`*
*`text,可变长度，当不知道属性的最大长度时，适合用text。`*
<mark style="color:red;background-color:white ">*按照查询速度：char最快,varchar次之，text最慢。*</mark>

*字符串型使用建议：*
1.经常变化的字段用varchar；
2.知道固定长度的用char；
3.尽量用varchar；
4.超过255字符的只能用varchar或者text；
5.能用varchar的地方不用text。