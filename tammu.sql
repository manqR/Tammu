-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.10-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             10.3.0.5771
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- Dumping structure for table tammupos.tblitemtransaction
CREATE TABLE IF NOT EXISTS `tblitemtransaction` (
  `transactionID` varchar(50) NOT NULL,
  `productID` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `itemPrice` double NOT NULL,
  `discount` double NOT NULL,
  `urutan` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`urutan`),
  KEY `FK__tblproduct` (`productID`),
  KEY `FK_tblitemtransaction_tbltransaction` (`transactionID`),
  CONSTRAINT `FK__tblproduct` FOREIGN KEY (`productID`) REFERENCES `tblproduct` (`productID`),
  CONSTRAINT `FK_tblitemtransaction_tbltransaction` FOREIGN KEY (`transactionID`) REFERENCES `tbltransaction` (`transactionID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

-- Dumping structure for table tammupos.tblproduct
CREATE TABLE IF NOT EXISTS `tblproduct` (
  `productID` int(11) NOT NULL AUTO_INCREMENT,
  `productName` varchar(50) NOT NULL,
  `qty` int(11) NOT NULL,
  `price` double NOT NULL,
  `fee` double NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`productID`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

-- Dumping structure for table tammupos.tbltransaction
CREATE TABLE IF NOT EXISTS `tbltransaction` (
  `transactionID` varchar(50) NOT NULL,
  `totalPrice` double NOT NULL,
  `totalDiscount` double NOT NULL,
  `voucherCode` varchar(50) NOT NULL DEFAULT '',
  `totalVoucher` double NOT NULL,
  `userID` int(11) NOT NULL,
  `transactionDate` datetime NOT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`transactionID`),
  KEY `FK_tbltransaction_tblvoucher` (`voucherCode`),
  CONSTRAINT `FK_tbltransaction_tblvoucher` FOREIGN KEY (`voucherCode`) REFERENCES `tblvoucher` (`voucherCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

-- Dumping structure for table tammupos.tblvoucher
CREATE TABLE IF NOT EXISTS `tblvoucher` (
  `voucherCode` varchar(50) NOT NULL,
  `nominal` double NOT NULL,
  `voucherDescription` varchar(50) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  PRIMARY KEY (`voucherCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

-- Dumping structure for table tammupos.user
CREATE TABLE IF NOT EXISTS `user` (
  `userID` char(10) NOT NULL,
  `userName` varchar(20) NOT NULL,
  `fullName` varchar(50) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `referralCode` char(10) DEFAULT NULL,
  `saldo` double DEFAULT 0,
  `joinDate` date NOT NULL,
  `resignDate` date DEFAULT NULL,
  `status` int(11) NOT NULL,
  PRIMARY KEY (`userID`),
  UNIQUE KEY `userName` (`userName`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Data exporting was unselected.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
