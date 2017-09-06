-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Sep 05, 2017 at 10:57 PM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `froggo`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `aid` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `cookie` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`aid`, `email`, `password`, `cookie`) VALUES
(3, 'ivn.c.yu@gmail.com', '$2a$10$sTtgMRELnSIEzrxIKvIyz.czRQd8alJyWtXGCrBh5M2oEkD.mi0Q.', '');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `category` varchar(5000) NOT NULL,
  `domain` int(11) NOT NULL,
  `commentId` int(11) NOT NULL,
  `replyId` int(11) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `domain` varchar(5000) NOT NULL,
  `userId` int(11) NOT NULL,
  `comment` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`id`, `domain`, `userId`, `comment`) VALUES
(5, 'https://stackoverflow.com/search?q=how+can+i+logged+in+user+id+in+nodejs', 10, 'Hello everyone'),
(6, 'https://web.facebook.com/messages/t/1489363851133740?_rdc=1&_rdr', 10, 'Hjalsdj'),
(7, 'http://www.youtube.com/watch?v=uXwKYO0BdtI', 10, 'Vala niba'),
(8, 'http://www.youtube.com/watch?v=uXwKYO0BdtI', 11, 'abcd'),
(9, 'http://www.youtube.com/watch?v=uXwKYO0Bdtdadsf', 10, 'asdf'),
(10, 'https://github.com/strongloop/loopback/issues/569', 11, 'alsjdfl'),
(11, 'http://www.youtube.com/watch?v=uXwKYO0BdtIasdf', 10, 'asdf'),
(12, 'http://www.youtube.com/watch?v=uXwKYO0BdtIasdf', 10, 'kjf'),
(13, 'http://www.youtube.com/watch?v=uXwKYO0BdtIasdf', 10, 'hey'),
(14, 'https://www.w3schools.com/nodejs/obj_http_serverresponse.asp', 10, 'Last Child'),
(15, 'http://www.youtube.com/watch?v=uXwKYO0BdtIasdf', 11, 'Lol'),
(16, 'https://facebook.com/messages/t/1489363851133740?_rdc=adljsaldj', 11, 'jfalsjdlfk'),
(17, 'https://stackoverflow.com/questions/11186174/passportjs-how-to-get-req-user-in-my-views', 10, 'lkasdflkj'),
(18, 'https://dribbble.com/shots/3780476-Dribbble-First-Shot', 11, 'hellooooooo'),
(19, 'https://stackoverflow.com/questions/11186174/passportjs-how-to-get-req-user-in-my-views', 11, 'kjhkjhkjhkhkjl'),
(20, 'http://www.youtube.com/watch?v=uXwKYO0BdtI', 11, 'iuyylhlkkhl'),
(22, 'mucsit.tk', 10, 'No way\r\n'),
(23, 'http://localhost/boot/', 10, 'MucsTechnology Comment'),
(24, 'http://localhost/boot/', 11, 'Comment 2');

-- --------------------------------------------------------

--
-- Table structure for table `domain`
--

CREATE TABLE `domain` (
  `id` int(11) NOT NULL,
  `domain` varchar(5000) NOT NULL,
  `comment_counter` int(11) NOT NULL,
  `imageId` varchar(5000) NOT NULL,
  `urlTitle` varchar(300) NOT NULL,
  `category` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `domain`
--

INSERT INTO `domain` (`id`, `domain`, `comment_counter`, `imageId`, `urlTitle`, `category`) VALUES
(24, 'https://dribbble.com/shots/3780476-Dribbble-First-Shot', 1, '0cbc2eda2bcf81ccd3e042f55715f52d', '', 'Trending News'),
(25, 'mucsit.tk', 1, '79f146666a702abdbfef1bb7e428ea69', '', 'Video'),
(26, 'http://localhost/boot/', 1, 'd20a55c3a3313c62e6f852c2bab84748', 'MUCS Technology', 'Blog'),
(27, 'http://www.youtube.com/watch?v=uXwKYO0BdtI', 6, 'd8fa07b406de1e28669f4a8d9f0764dd', 'How to Connect to the MySQL Database Remotely - YouTube', 'Blog'),
(28, 'https://www.w3schools.com/nodejs/obj_http_serverresponse.asp', 1, 'b8f7bf00c14f8cfe7b13776ffa31cb50', 'Node.js HTTP ServerResponse Object', 'Travel'),
(29, 'https://stackoverflow.com/questions/11186174/passportjs-how-to-get-req-user-in-my-views', 2, '5d0b255ffb1ddc7c85cb4ab669364352', 'node.js - PassportJS: How to get req.user in my views - Stack Overflow', 'Trending News'),
(30, 'https://github.com/strongloop/loopback/issues/569', 1, '7fa0a4f672b313be2d4a5fe54dd86137', 'How to get current authenticated user · Issue #569 · strongloop/loopback · GitHub', 'Trending News'),
(31, 'https://web.facebook.com/messages/t/1489363851133740?_rdc=1&_rdr', 1, 'a091d9fc82d57577c2376f633c10da74', 'Update Your Browser | Facebook', 'Travel'),
(32, 'http://www.youtube.com/watch?v=uXwKYO0BdtIasdf', 4, 'b3757a9dcba79b8807e8b7c16cd448ab', 'How to Connect to the MySQL Database Remotely - YouTube', 'Blog');

-- --------------------------------------------------------

--
-- Table structure for table `reply`
--

CREATE TABLE `reply` (
  `id` int(11) NOT NULL,
  `domain` varchar(5000) NOT NULL,
  `reply` varchar(5000) NOT NULL,
  `userId` int(11) NOT NULL,
  `commentId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reply`
--

INSERT INTO `reply` (`id`, `domain`, `reply`, `userId`, `commentId`) VALUES
(9, 'https://www.youtube.com/watch?v=uXwKYO0BdtI', 'Hey', 10, 5);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `profileId` varchar(150) NOT NULL,
  `name` varchar(150) NOT NULL,
  `familyName` varchar(100) DEFAULT NULL,
  `photo` varchar(500) NOT NULL,
  `lastLogin` bigint(25) NOT NULL,
  `session` varchar(500) DEFAULT NULL,
  `givenName` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `profileId`, `name`, `familyName`, `photo`, `lastLogin`, `session`, `givenName`) VALUES
(10, '2', 'Shahan', 'Chowdhury', 'assets/img/profile.jpg', 1538, NULL, 'Shahan'),
(11, 'shahan953', 'Shahan', 'Chowdhury', 'assets/img/404.png', 0, NULL, 'Shahan Chowdhury');

-- --------------------------------------------------------

--
-- Table structure for table `vote`
--

CREATE TABLE `vote` (
  `id` bigint(100) NOT NULL,
  `domain` varchar(5000) NOT NULL,
  `vote` int(1) NOT NULL,
  `userId` int(11) NOT NULL,
  `commentId` int(11) NOT NULL,
  `replyId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `vote`
--

INSERT INTO `vote` (`id`, `domain`, `vote`, `userId`, `commentId`, `replyId`) VALUES
(0, 'https://www.youtube.com/watch?v=uXwKYO0BdtI', 51, 10, 5, 9);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`aid`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_comment_idx` (`userId`);

--
-- Indexes for table `domain`
--
ALTER TABLE `domain`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reply`
--
ALTER TABLE `reply`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_user_idx` (`userId`),
  ADD KEY `fk_comment_idx` (`commentId`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `profileId_UNIQUE` (`profileId`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`);

--
-- Indexes for table `vote`
--
ALTER TABLE `vote`
  ADD PRIMARY KEY (`replyId`,`commentId`,`userId`),
  ADD UNIQUE KEY `id_UNIQUE` (`id`),
  ADD KEY `fk_user_idx` (`userId`),
  ADD KEY `fk_comment_idx` (`commentId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
--
-- AUTO_INCREMENT for table `domain`
--
ALTER TABLE `domain`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
--
-- AUTO_INCREMENT for table `reply`
--
ALTER TABLE `reply`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `fk_user_comment` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `reply`
--
ALTER TABLE `reply`
  ADD CONSTRAINT `fk_comment` FOREIGN KEY (`commentId`) REFERENCES `comments` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_user` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `vote`
--
ALTER TABLE `vote`
  ADD CONSTRAINT `fk_vote_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
