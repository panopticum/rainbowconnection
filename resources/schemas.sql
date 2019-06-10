-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema rainbowconnection
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema rainbowconnection
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `rainbowconnection` DEFAULT CHARACTER SET utf8 ;
USE `rainbowconnection` ;

-- -----------------------------------------------------
-- Table `rainbowconnection`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rainbowconnection`.`users` (
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `color` VARCHAR(6) NOT NULL DEFAULT 'FFFFFF',
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `rainbowconnection`.`connections`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `rainbowconnection`.`connections` (
  `user_one_id` BIGINT UNSIGNED NOT NULL,
  `user_two_id` BIGINT UNSIGNED NOT NULL,
  `action_user_id` BIGINT UNSIGNED NOT NULL,
  INDEX `fk_connections_users_idx` (`user_one_id` ASC),
  INDEX `fk_connections_users1_idx` (`user_two_id` ASC),
  INDEX `fk_connections_users2_idx` (`action_user_id` ASC),
  CONSTRAINT `fk_connections_users`
    FOREIGN KEY (`user_one_id`)
    REFERENCES `rainbowconnection`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_connections_users1`
    FOREIGN KEY (`user_two_id`)
    REFERENCES `rainbowconnection`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_connections_users2`
    FOREIGN KEY (`action_user_id`)
    REFERENCES `rainbowconnection`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
