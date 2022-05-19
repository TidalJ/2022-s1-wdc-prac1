/*
SQLyog Community v13.1.6 (64 bit)
MySQL - 5.7.19 : Database - enrolment
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`enrolment` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `enrolment`;

/*Table structure for table `Enrolments` */

DROP TABLE IF EXISTS `Enrolments`;

CREATE TABLE `Enrolments` (
  `student_id` varchar(20) DEFAULT NULL,
  `subject_code` varchar(20) DEFAULT NULL,
  `mark` int(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `Enrolments` */

insert  into `Enrolments`(`student_id`,`subject_code`,`mark`) values 
('a1111111','COMP SCI 1102',62),
('a1111111','COMP SCI 1102',62),
('a1111112','COMP SCI 1102',55),
('a1111112','COMP SCI 1102',55),
('a1111113','PHIL 2039',65),
('a1111113','PHIL 2039',65),
('a1111114','COMP SCI 2207',67),
('a1111114','COMP SCI 2207',67);

/*Table structure for table `Students` */

DROP TABLE IF EXISTS `Students`;

CREATE TABLE `Students` (
  `student_id` varchar(20) DEFAULT NULL,
  `given_name` varchar(20) DEFAULT NULL,
  `family_name` varchar(20) DEFAULT NULL,
  `program` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `Students` */

insert  into `Students`(`student_id`,`given_name`,`family_name`,`program`) values 
('a1111111','Fang','Li','	BE(Hons)(Soft)'),
('a1111112','Jane','Brown','BE(Hons)(Soft)'),
('a1111113','Bob','Smith','BCompSc'),
('a1111114','Wei','Zhang','BCompSc');

/*Table structure for table `Subjects` */

DROP TABLE IF EXISTS `Subjects`;

CREATE TABLE `Subjects` (
  `subject_code` varchar(20) DEFAULT NULL,
  `subject` varchar(40) DEFAULT NULL,
  `faculty` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `Subjects` */

insert  into `Subjects`(`subject_code`,`subject`,`faculty`) values 
('COMP SCI 1102','Object Oriented Programming','ECMS'),
('COMP SCI 2207','Web and Database Computing','ECMS'),
('COMP SCI 2000','Computer Systems','ECMS'),
('PHIL 2039','Philosophy of Mind','Arts');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
