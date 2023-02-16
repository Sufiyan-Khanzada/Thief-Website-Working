-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 16, 2023 at 01:13 AM
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
  `id` int(11) NOT NULL,
  `latitude` float(10,6) NOT NULL,
  `longitude` float(10,6) NOT NULL,
  `uname` varchar(255) NOT NULL,
  `uemail` varchar(255) NOT NULL,
  `uphone` varchar(255) NOT NULL,
  `udamage` varchar(255) NOT NULL,
  `ulostitem` varchar(255) NOT NULL,
  `ureportReg` date NOT NULL,
  `ureportNo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_theft`
--

INSERT INTO `tb_theft` (`id`, `latitude`, `longitude`, `uname`, `uemail`, `uphone`, `udamage`, `ulostitem`, `ureportReg`, `ureportNo`) VALUES
(1, 24.937216, 67.042282, 'Taha', 'admin@revtecherp.com', '12313232', '231', '32123', '0000-00-00', 231),
(2, 24.937340, 67.041107, 'Tahaxcx', 'admin@revtecherp.com', '12313232', '231', '32123', '0000-00-00', 231),
(3, 24.937340, 67.041107, 'Tahaxczc', 'admin@revtecherp.com', '12313232', '231', '32123', '0000-00-00', 231),
(4, 24.936989, 67.039772, 'Taha', 'admin@revtecherp.com', '12313232', '231', '32123', '0000-00-00', 231),
(5, 24.933599, 67.045586, 'Taha', 'admin@revtechesdsdsarp.com', '12313232', '231', '32123', '0000-00-00', 231),
(6, 24.933599, 67.045586, 'Taha', 'admin@revtechesdsdsarp.com', '12313232', '231', '32123', '0000-00-00', 231),
(7, 24.933599, 67.045586, 'Taha', 'admin@revtechesdsdsarp.com', '12313232', '231', '32123', '0000-00-00', 231),
(8, 24.937216, 67.042282, 'Taha', 'admin@revtecherp.com', '12313232', '231', '32123', '0000-00-00', 231),
(9, 24.937216, 67.042282, 'Taha', 'admin@revtecherp.com', '12313232', '231', '32123', '0000-00-00', 231),
(10, 24.937340, 67.041107, 'Tahaxcx', 'admin@revtecherp.com', '12313232', '231', '32123', '0000-00-00', 231),
(11, 24.937340, 67.041107, 'Tahaxczc', 'admin@revtecherp.com', '12313232', '231', '32123', '0000-00-00', 231),
(12, 24.936989, 67.039772, 'Taha', 'admin@revtecherp.com', '12313232', '231', '32123', '0000-00-00', 231),
(13, 24.933599, 67.045586, 'Taha', 'admin@revtechesdsdsarp.com', '12313232', '231', '32123', '0000-00-00', 231),
(14, 24.933599, 67.045586, 'Taha', 'admin@revtechesdsdsarp.com', '12313232', '231', '32123', '0000-00-00', 231),
(15, 24.933599, 67.045586, 'Taha', 'admin@revtechesdsdsarp.com', '12313232', '231', '32123', '0000-00-00', 231),
(16, 24.937216, 67.042282, 'Taha', 'admin@revtecherp.com', '12313232', '231', '32123', '0000-00-00', 231),
(17, 24.937040, 67.039948, 'Ahmend', 'amsa@gmail.com', '1313132', '12312313', '123123', '0000-00-00', 123132),
(18, 24.937593, 67.044136, 'sdsad', 'sdsdasd@sadsd.sdsa', '52654', '454646', '464', '0000-00-00', 6),
(19, 24.937546, 67.041588, 'sdsd', 'sdsd@gma.asa', '45645135', 's1313', '132131', '0000-00-00', 13213);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_theft`
--
ALTER TABLE `tb_theft`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_theft`
--
ALTER TABLE `tb_theft`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
