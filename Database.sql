CREATE TABLE `mydb`.`user_reg` (
  `uid` INT NOT NULL AUTO_INCREMENT,
  `uname` VARCHAR(45) NULL,
  `upass` VARCHAR(45) NULL,
  `uemail` VARCHAR(45) NULL,
  `urecovery` VARCHAR(45) NULL,
  `uqueston` VARCHAR(45) NULL,
  PRIMARY KEY (`uid`));
