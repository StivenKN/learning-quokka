CREATE DATABASE  IF NOT EXISTS `tecnologies_data` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `tecnologies_data`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: tecnologies_data
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `sections_description`
--

DROP TABLE IF EXISTS `sections_description`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sections_description` (
  `id_sec_description` int NOT NULL AUTO_INCREMENT,
  `section_number` int NOT NULL,
  `section_title` tinytext NOT NULL,
  `section_body` text NOT NULL,
  PRIMARY KEY (`id_sec_description`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sections_description`
--

LOCK TABLES `sections_description` WRITE;
/*!40000 ALTER TABLE `sections_description` DISABLE KEYS */;
/*!40000 ALTER TABLE `sections_description` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tecnologies`
--

DROP TABLE IF EXISTS `tecnologies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tecnologies` (
  `id_tecnology` int NOT NULL AUTO_INCREMENT,
  `name_tecnology` varchar(100) NOT NULL,
  `description_tecnology` varchar(300) DEFAULT NULL,
  `date_updated_tecnology` timestamp NOT NULL,
  PRIMARY KEY (`id_tecnology`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tecnologies`
--

LOCK TABLES `tecnologies` WRITE;
/*!40000 ALTER TABLE `tecnologies` DISABLE KEYS */;
/*!40000 ALTER TABLE `tecnologies` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `insert_fecha_actual` BEFORE INSERT ON `tecnologies` FOR EACH ROW BEGIN
	# Realizado con gpt, modificado por Stiven Blandón
  SET NEW.date_updated_tecnology = CURRENT_TIMESTAMP;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `tecnologies_BEFORE_UPDATE` BEFORE UPDATE ON `tecnologies` FOR EACH ROW BEGIN
	SET new.date_updated_tecnology = current_timestamp;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `tecnologies_details`
--

DROP TABLE IF EXISTS `tecnologies_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tecnologies_details` (
  `id_tecnologies_details` int NOT NULL AUTO_INCREMENT,
  `has_certificate` tinyint(1) NOT NULL DEFAULT '0',
  `id_tecnology_fk` int NOT NULL,
  PRIMARY KEY (`id_tecnologies_details`),
  UNIQUE KEY `id_tecnology_fk_UNIQUE` (`id_tecnology_fk`),
  CONSTRAINT `id_tecnology` FOREIGN KEY (`id_tecnology_fk`) REFERENCES `tecnologies` (`id_tecnology`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tecnologies_details`
--

LOCK TABLES `tecnologies_details` WRITE;
/*!40000 ALTER TABLE `tecnologies_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `tecnologies_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tecnologies_sections`
--

DROP TABLE IF EXISTS `tecnologies_sections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tecnologies_sections` (
  `id_sections_tecnologies` int NOT NULL AUTO_INCREMENT,
  `id_sections_description` int NOT NULL,
  `id_tecnologies_details` int NOT NULL,
  PRIMARY KEY (`id_sections_tecnologies`),
  UNIQUE KEY `id_section_descriptions_UNIQUE` (`id_sections_description`),
  UNIQUE KEY `id_section_tecnologies_details_UNIQUE` (`id_tecnologies_details`),
  CONSTRAINT `id_sections_fk` FOREIGN KEY (`id_sections_description`) REFERENCES `sections_description` (`id_sec_description`) ON UPDATE CASCADE,
  CONSTRAINT `id_tecnology_fk` FOREIGN KEY (`id_tecnologies_details`) REFERENCES `tecnologies_details` (`id_tecnologies_details`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tecnologies_sections`
--

LOCK TABLES `tecnologies_sections` WRITE;
/*!40000 ALTER TABLE `tecnologies_sections` DISABLE KEYS */;
/*!40000 ALTER TABLE `tecnologies_sections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tecnologies_videos`
--

DROP TABLE IF EXISTS `tecnologies_videos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tecnologies_videos` (
  `id_tecnology_videos` int NOT NULL AUTO_INCREMENT,
  `id_video` int NOT NULL,
  `id_details_tecnologies` int NOT NULL,
  PRIMARY KEY (`id_tecnology_videos`),
  KEY `videos_fk_idx` (`id_video`),
  KEY `details_fk_idx` (`id_details_tecnologies`),
  CONSTRAINT `details_fk` FOREIGN KEY (`id_details_tecnologies`) REFERENCES `tecnologies_details` (`id_tecnologies_details`) ON UPDATE CASCADE,
  CONSTRAINT `videos_fk` FOREIGN KEY (`id_video`) REFERENCES `videos` (`id_videos`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tecnologies_videos`
--

LOCK TABLES `tecnologies_videos` WRITE;
/*!40000 ALTER TABLE `tecnologies_videos` DISABLE KEYS */;
/*!40000 ALTER TABLE `tecnologies_videos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `videos`
--

DROP TABLE IF EXISTS `videos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `videos` (
  `id_videos` int NOT NULL AUTO_INCREMENT,
  `link_video` varchar(500) NOT NULL,
  PRIMARY KEY (`id_videos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `videos`
--

LOCK TABLES `videos` WRITE;
/*!40000 ALTER TABLE `videos` DISABLE KEYS */;
/*!40000 ALTER TABLE `videos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'tecnologies_data'
--

--
-- Dumping routines for database 'tecnologies_data'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-27 10:46:29
