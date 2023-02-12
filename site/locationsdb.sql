-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 08, 2023 at 08:59 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `locationsdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_theft`
--

CREATE TABLE `tb_theft` (
  `theft_id` int(16) NOT NULL,
  `latitude` varchar(50) NOT NULL,
  `longitude` varchar(50) NOT NULL,
  `recipt` varchar(50) NOT NULL,
  `message` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_theft`
--

INSERT INTO `tb_theft` (`theft_id`, `latitude`, `longitude`, `recipt`, `message`) VALUES
(1, '20.237357933025507', ' 77.48388671875', 'sdadasd', 'sdasd'),
(2, '20.237357933025507', ' 77.48388671875', 'sdadasd', 'sdasd'),
(3, '20.237357933025507', ' 77.48388671875', 'sdadasd', 'sdasd'),
(4, '26.91805493775759', ' 70.97998046875', 'dsdasdasdasdsdasdsda', 'dasdasdasdasdasdasdas'),
(5, '27.07299714827836', ' 66.80334609375001', 'test', 'efdfdfsdfsdfdfsdfsdefd\r\n'),
(6, '24.78466872359435', ' 67.5552229248047', 'Testing Point', 'Testing Point');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_theft`
--
ALTER TABLE `tb_theft`
  ADD PRIMARY KEY (`theft_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_theft`
--
ALTER TABLE `tb_theft`
  MODIFY `theft_id` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
