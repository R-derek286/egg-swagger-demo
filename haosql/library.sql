/*
SQLyog Ultimate v12.08 (64 bit)
MySQL - 5.7.19 : Database - library
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`library` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `library`;

/*Table structure for table `admin` */

DROP TABLE IF EXISTS `admin`;

CREATE TABLE `admin` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Account` varchar(255) NOT NULL COMMENT '账号',
  `Password` varchar(255) NOT NULL COMMENT '密码',
  `ConfirmPwd` varchar(255) DEFAULT NULL COMMENT '确认密码',
  `isDelete` tinyint(1) DEFAULT '0' COMMENT '0-未删除，1-已删除',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

/*Data for the table `admin` */

insert  into `admin`(`Id`,`Account`,`Password`,`ConfirmPwd`,`isDelete`) values (1,'render','123456','123456',0),(2,'admin123','123456','123456',1),(3,'admin','123456','123456',0);

/*Table structure for table `book` */

DROP TABLE IF EXISTS `book`;

CREATE TABLE `book` (
  `Id` int(11) NOT NULL AUTO_INCREMENT COMMENT '图书编号',
  `BookName` varchar(255) NOT NULL COMMENT '图书名称',
  `Author` varchar(32) NOT NULL COMMENT '作者',
  `Price` decimal(10,0) NOT NULL COMMENT '定价',
  `Typeid` int(11) NOT NULL COMMENT '图书类型编号（外键）',
  `CreateTime` datetime NOT NULL COMMENT '创建时间',
  `UpdateTime` datetime DEFAULT NULL COMMENT '修改时间',
  `Stock` int(11) NOT NULL COMMENT '库存',
  `isSoldout` tinyint(1) DEFAULT '0' COMMENT '0-未下架，1-已下架',
  `isDelete` tinyint(1) DEFAULT '0' COMMENT '0-未删除，1-已删除',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

/*Data for the table `book` */

insert  into `book`(`Id`,`BookName`,`Author`,`Price`,`Typeid`,`CreateTime`,`UpdateTime`,`Stock`,`isSoldout`,`isDelete`) values (1,'ES6 标准入门','阮一峰','100',2,'2019-10-29 00:00:00','2019-10-29 15:40:31',10,0,1),(4,'JavaScript','derek','50',1,'2019-10-29 08:35:20','2019-10-29 15:26:51',16,0,1),(5,'java','哈哈','30',1,'2019-10-29 08:35:20',NULL,30,0,1),(6,'阿德','render','69',1,'2019-10-29 08:35:20','2019-10-29 08:35:20',20,0,1),(7,'JavaScript','Render','80',2,'2019-10-29 08:35:20','2019-10-30 06:52:45',20,0,0),(8,'社会学','奥术大师','12',1,'2019-10-29 08:35:20','2019-10-29 15:41:54',2121,0,1),(9,'大大','打算','21',1,'2019-10-29 08:35:20',NULL,31,1,1),(10,'PHP','derek','120',2,'2019-10-29 08:35:20',NULL,10,1,1),(11,'你可真行','那必须的','12',1,'2019-10-29 15:40:57',NULL,120,1,1),(12,'我的天哪','阿德','12',2,'2019-10-30 01:28:58','2019-10-30 01:30:29',100,0,0),(13,'面试题','阿德','30',2,'2019-10-30 03:41:19',NULL,100,0,0),(14,'你无法改变世界','宿文渊','20',1,'2019-10-30 06:21:19','2019-10-30 06:21:28',100,0,0),(15,'不会就是不会','我太难了','50',1,'2019-10-30 07:40:46',NULL,30,0,0),(16,'32131','32131','1',1,'2019-10-30 07:42:38',NULL,1,0,0),(17,'3131','32131','31',2,'2019-10-30 07:42:45',NULL,123,0,0),(18,'31','31','321',1,'2019-10-30 07:42:52',NULL,31,0,0),(19,'31231','3131','12',2,'2019-10-30 07:43:04',NULL,13,0,1),(20,'3131','313','131',2,'2019-10-30 07:43:11','2019-10-30 08:15:43',200,0,0),(21,'31321','3131','313',1,'2019-10-30 07:43:20','2019-10-30 08:15:35',50,0,0),(22,'阿德','阿德','120',1,'2019-10-30 09:26:07',NULL,120,0,0),(23,'寄的','阿德','123',1,'2019-10-30 09:26:29',NULL,100,0,1);

/*Table structure for table `booktype` */

DROP TABLE IF EXISTS `booktype`;

CREATE TABLE `booktype` (
  `Id` int(10) unsigned zerofill NOT NULL AUTO_INCREMENT COMMENT '类型编号',
  `Name` varchar(20) NOT NULL COMMENT '类型名称',
  `isDeleted` tinyint(1) DEFAULT '0' COMMENT '是否已删除',
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `booktype` */

insert  into `booktype`(`Id`,`Name`,`isDeleted`) values (0000000001,'前端开发',0);

/*Table structure for table `reader` */

DROP TABLE IF EXISTS `reader`;

CREATE TABLE `reader` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(32) NOT NULL,
  `Password` varchar(20) NOT NULL,
  `Sex` bit(1) NOT NULL,
  `Contact` varchar(20) NOT NULL,
  `Email` varchar(20) NOT NULL,
  `CreateTime` decimal(10,0) NOT NULL,
  `UpdateTime` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `reader` */

/*Table structure for table `v_book` */

DROP TABLE IF EXISTS `v_book`;

/*!50001 DROP VIEW IF EXISTS `v_book` */;
/*!50001 DROP TABLE IF EXISTS `v_book` */;

/*!50001 CREATE TABLE  `v_book`(
 `Id` int(11) ,
 `BookName` varchar(255) ,
 `Author` varchar(32) ,
 `Price` decimal(10,0) ,
 `Typeid` int(11) ,
 `CreateTime` varchar(24) ,
 `UpdateTime` datetime ,
 `Stock` int(11) ,
 `isSoldout` tinyint(1) ,
 `BookTypeName` varchar(20) 
)*/;

/*View structure for view v_book */

/*!50001 DROP TABLE IF EXISTS `v_book` */;
/*!50001 DROP VIEW IF EXISTS `v_book` */;

/*!50001 CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_book` AS select `b`.`Id` AS `Id`,`b`.`BookName` AS `BookName`,`b`.`Author` AS `Author`,`b`.`Price` AS `Price`,`b`.`Typeid` AS `Typeid`,date_format(`b`.`CreateTime`,'%Y-%m-%d %H:%i:%s') AS `CreateTime`,`b`.`UpdateTime` AS `UpdateTime`,`b`.`Stock` AS `Stock`,`b`.`isSoldout` AS `isSoldout`,`t`.`Name` AS `BookTypeName` from (`book` `b` left join `booktype` `t` on((`b`.`Typeid` = `t`.`Id`))) where (`b`.`isDelete` = 0) */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
