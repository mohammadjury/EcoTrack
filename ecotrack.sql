-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 28, 2023 at 09:37 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecotrack`
--

-- --------------------------------------------------------

--
-- Table structure for table `communityreports`
--

CREATE TABLE `communityreports` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `reportTitle` varchar(255) NOT NULL,
  `reportDescription` text DEFAULT NULL,
  `reportDate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `communityreports`
--

INSERT INTO `communityreports` (`id`, `userId`, `reportTitle`, `reportDescription`, `reportDate`) VALUES
(13, 1, 'Air Pollution in Downtown', 'Report about increased air pollution in the downtown area.', '2023-01-15'),
(14, 2, 'Illegal Logging in Forest Reserve', 'Report on observed illegal logging activities in the forest reserve.', '2023-01-20'),
(15, 1, 'Water Contamination in River', 'Report of water contamination issues in the river near City Park.', '2023-02-01'),
(16, 6, 'Edited Report Title', 'Edited Description of the report.', '2023-03-01'),
(19, 1, 'Report 1', 'Description for Report 1', '2023-01-01'),
(20, 2, 'Report 2', 'Description for Report 2', '2023-01-02'),
(21, 3, 'Report 3', 'Description for Report 3', '2023-01-03'),
(22, 4, 'Report 4', 'Description for Report 4', '2023-01-04'),
(23, 5, 'Report 5', 'Description for Report 5', '2023-01-05'),
(24, 6, 'Report 6', 'Description for Report 6', '2023-01-06'),
(25, 7, 'Report 7', 'Description for Report 7', '2023-01-07'),
(26, 8, 'Report 8', 'Description for Report 8', '2023-01-08'),
(27, 9, 'Report 9', 'Description for Report 9', '2023-01-09'),
(28, 10, 'Report 10', 'Description for Report 10', '2023-01-10'),
(29, 11, 'Report 11', 'Description for Report 11', '2023-01-11'),
(30, 12, 'Report 12', 'Description for Report 12', '2023-01-12'),
(31, 13, 'Report 13', 'Description for Report 13', '2023-01-13'),
(32, 14, 'Report 14', 'Description for Report 14', '2023-01-14'),
(33, 15, 'Report 15', 'Description for Report 15', '2023-01-15');

-- --------------------------------------------------------

--
-- Table structure for table `educationalresources`
--

CREATE TABLE `educationalresources` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `educationalresources`
--

INSERT INTO `educationalresources` (`id`, `title`, `description`, `url`, `createdAt`, `updatedAt`) VALUES
(1, 'Introduction to Ecology', 'A comprehensive introduction to the principles of ecology.', 'https://example.com', '2023-12-27 00:45:27', '2023-12-27 00:45:27'),
(2, 'Climate Change Basics', 'Understanding the fundamentals of climate change and its impact.', 'https://example.com', '2023-12-27 00:45:27', '2023-12-27 00:45:27'),
(3, 'Sustainable Agriculture Practices', 'Exploring sustainable practices in agriculture for environmental conservation.', 'https://example.com', '2023-12-27 00:45:27', '2023-12-27 00:45:27'),
(6, 'Resource 1', 'Description for Resource 1', 'https://example.com/resource1', '2023-12-27 02:22:23', '2023-12-27 02:22:23'),
(7, 'Resource 2', 'Description for Resource 2', 'https://example.com/resource2', '2023-12-27 02:22:23', '2023-12-27 02:22:23'),
(8, 'Resource 3', 'Description for Resource 3', 'https://example.com/resource3', '2023-12-27 02:22:23', '2023-12-27 02:22:23'),
(9, 'Resource 4', 'Description for Resource 4', 'https://example.com/resource4', '2023-12-27 02:22:23', '2023-12-27 02:22:23'),
(10, 'Resource 5', 'Description for Resource 5', 'https://example.com/resource5', '2023-12-27 02:22:23', '2023-12-27 02:22:23'),
(11, 'Resource 6', 'Description for Resource 6', 'https://example.com/resource6', '2023-12-27 02:22:23', '2023-12-27 02:22:23'),
(12, 'Resource 7', 'Description for Resource 7', 'https://example.com/resource7', '2023-12-27 02:22:23', '2023-12-27 02:22:23'),
(13, 'Resource 8', 'Description for Resource 8', 'https://example.com/resource8', '2023-12-27 02:22:23', '2023-12-27 02:22:23'),
(14, 'Resource 9', 'Description for Resource 9', 'https://example.com/resource9', '2023-12-27 02:22:23', '2023-12-27 02:22:23'),
(15, 'Resource 10', 'Description for Resource 10', 'https://example.com/resource10', '2023-12-27 02:22:23', '2023-12-27 02:22:23'),
(16, 'Resource 11', 'Description for Resource 11', 'https://example.com/resource11', '2023-12-27 02:22:23', '2023-12-27 02:22:23'),
(17, 'Resource 12', 'Description for Resource 12', 'https://example.com/resource12', '2023-12-27 02:22:23', '2023-12-27 02:22:23'),
(18, 'Resource 13', 'Description for Resource 13', 'https://example.com/resource13', '2023-12-27 02:22:23', '2023-12-27 02:22:23'),
(19, 'Resource 14', 'Description for Resource 14', 'https://example.com/resource14', '2023-12-27 02:22:23', '2023-12-27 02:22:23'),
(20, 'Updated Resource Title', 'Updated resource description', 'https://updated-url.com', '2023-12-27 02:22:23', '2023-12-27 12:47:19');

-- --------------------------------------------------------

--
-- Table structure for table `environmentalalerts`
--

CREATE TABLE `environmentalalerts` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `alertType` varchar(255) DEFAULT NULL,
  `threshold` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `environmentalalerts`
--

INSERT INTO `environmentalalerts` (`id`, `userId`, `alertType`, `threshold`) VALUES
(1, 1, 'Temperature', 30),
(2, 2, 'Humidity', 60),
(3, 3, 'Air Quality', 150),
(4, 4, 'Water Quality', 50),
(5, 5, 'Noise Level', 70),
(6, 6, 'Light Intensity', 200),
(7, 7, 'Pressure', 1000),
(8, 8, 'Wind Speed', 25),
(9, 9, 'CO2 Levels', 400),
(10, 10, 'Ozone Levels', 0.05);

-- --------------------------------------------------------

--
-- Table structure for table `environmentaldata`
--

CREATE TABLE `environmentaldata` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `timestamp` timestamp NOT NULL DEFAULT current_timestamp(),
  `airQuality` text NOT NULL,
  `temperature` float DEFAULT NULL,
  `humidity` float DEFAULT NULL,
  `waterQuality` text NOT NULL,
  `biodiversityMetrics` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `environmentaldata`
--

INSERT INTO `environmentaldata` (`id`, `userId`, `timestamp`, `airQuality`, `temperature`, `humidity`, `waterQuality`, `biodiversityMetrics`) VALUES
(51, 1, '2023-01-01 10:00:00', '25.5', 20, 50, '4.5', '3.0'),
(52, 1, '2023-01-02 11:30:00', '23.8', 22.5, 45, '5.8', '2.5'),
(53, 2, '2023-01-03 12:45:00', '20.3', 18.5, 55, '3.2', '1.0'),
(54, 2, '2023-01-04 14:00:00', '22.1', 21, 48, '4.1', '3.0'),
(55, 3, '2023-01-05 15:15:00', '19.7', 17.5, 60, '2.7', '0.5'),
(56, 3, '2023-01-06 16:30:00', '21.5', 23, 40, '5.5', '3.0'),
(57, 4, '2023-01-07 17:45:00', '24.0', 19.5, 52, '4.0', '2.0'),
(58, 4, '2023-01-08 19:00:00', '18.2', 20, 58, '3.2', '1.0'),
(59, 5, '2023-01-09 20:15:00', '26.8', 22.5, 42, '6.8', '3.0'),
(60, 5, '2023-01-10 21:30:00', '22.9', 18, 50, '5.9', '2.5'),
(61, 6, '2023-01-10 22:45:00', '19.5', 21.5, 45, '3.5', '1.0'),
(62, 6, '2023-01-12 00:00:00', '25.3', 19, 55, '5.3', '3.0'),
(63, 7, '2023-01-13 01:15:00', '23.0', 20.5, 48, '4.0', '2.5'),
(64, 7, '2023-01-14 02:30:00', '20.7', 17, 60, '2.7', '0.5'),
(65, 9, '2023-01-01 12:00:00', '345', 99, 99, '345', '345');

-- --------------------------------------------------------

--
-- Table structure for table `opendataaccesses`
--

CREATE TABLE `opendataaccesses` (
  `id` int(11) NOT NULL,
  `researcherId` int(11) DEFAULT NULL,
  `dataId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `opendataaccesses`
--

INSERT INTO `opendataaccesses` (`id`, `researcherId`, `dataId`) VALUES
(1, 1, 101),
(2, 2, 102),
(3, 3, 103),
(4, 44, 55),
(5, 0, 0),
(6, 6, 106),
(7, 7, 107),
(8, 8, 108),
(9, 9, 109),
(10, 10, 110),
(11, 11, 111),
(12, 12, 112),
(13, 13, 113),
(14, 14, 114);

-- --------------------------------------------------------

--
-- Table structure for table `sustainabilityscores`
--

CREATE TABLE `sustainabilityscores` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `score` float DEFAULT NULL,
  `category` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sustainabilityscores`
--

INSERT INTO `sustainabilityscores` (`id`, `userId`, `score`, `category`) VALUES
(1, 1, 80, 'Environmental'),
(2, 2, 75, 'Social'),
(3, 3, 90, 'Economic'),
(4, 4, 85, 'Environmental'),
(5, 5, 92, 'Social'),
(6, 6, 88, 'Economic'),
(7, 7, 78, 'Environmental'),
(8, 8, 70, 'Social'),
(9, 9, 95, 'Economic'),
(10, 10, 83, 'Environmental'),
(11, 11, 87, 'Social'),
(12, 12, 91, 'Economic'),
(13, 13, 79, 'Environmental'),
(14, 14, 84, 'Social'),
(15, 15, 89, 'Economic');

-- --------------------------------------------------------

--
-- Table structure for table `userprofiles`
--

CREATE TABLE `userprofiles` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `userprofiles`
--

INSERT INTO `userprofiles` (`id`, `username`, `email`, `password`) VALUES
(1, 'john', 'john@example.com', 'hashed_password'),
(2, 'EditedUsername', 'EditedUsername@example.com', 'newPassword'),
(3, 'mohammad', 'mohammad@example.com', 'hashed_password1'),
(4, 'ahmad', 'ahmad@example.com', 'hashed_password2'),
(5, 'firas', 'firas@example.com', 'hashed_password3'),
(6, 'donna', 'donna@example.com', 'hashed_password4'),
(7, 'mike', 'mike@example.com', 'hashed_password5'),
(8, 'ross', 'ross@example.com', 'hashed_password6'),
(9, 'harvey', 'harvey@example.com', 'hashed_password7'),
(10, 'specter', 'specter@example.com', 'hashed_password8'),
(11, 'raichel', 'raichel@example.com', 'hashed_password9'),
(12, 'omar', 'omar@example.com', 'hashed_password10'),
(13, 'samer', 'samer@example.com', 'hashed_password11'),
(14, 'smopy', 'smopy@example.com', 'hashed_password12'),
(15, 'darvey', 'darvey@example.com', 'hashed_password13'),
(16, 'ggez', 'ggez@example.com', 'hashed_password14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `communityreports`
--
ALTER TABLE `communityreports`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `educationalresources`
--
ALTER TABLE `educationalresources`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `environmentalalerts`
--
ALTER TABLE `environmentalalerts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `environmentaldata`
--
ALTER TABLE `environmentaldata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `opendataaccesses`
--
ALTER TABLE `opendataaccesses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sustainabilityscores`
--
ALTER TABLE `sustainabilityscores`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userprofiles`
--
ALTER TABLE `userprofiles`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `communityreports`
--
ALTER TABLE `communityreports`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `educationalresources`
--
ALTER TABLE `educationalresources`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `environmentalalerts`
--
ALTER TABLE `environmentalalerts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `environmentaldata`
--
ALTER TABLE `environmentaldata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;

--
-- AUTO_INCREMENT for table `opendataaccesses`
--
ALTER TABLE `opendataaccesses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `sustainabilityscores`
--
ALTER TABLE `sustainabilityscores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `userprofiles`
--
ALTER TABLE `userprofiles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `communityreports`
--
ALTER TABLE `communityreports`
  ADD CONSTRAINT `communityreports_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `userprofiles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
