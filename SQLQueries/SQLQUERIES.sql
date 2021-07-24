--Creating Table for Kaggle_Data
CREATE TABLE Kaggle_Data(
    Respondent_Id INT ,
    Age FLOAT NOT NULL,
    Gender VARCHAR NOT NULL,
    Country VARCHAR NOT NULL,
    Formal_Education VARCHAR NOT NULL,
    Position VARCHAR NOT NULL,
    Years_Coding FLOAT NOT NULL,
    Salary FLOAT NOT NULL,
	PRIMARY KEY (Respondent_Id)
);

SELECT * FROM Kaggle_Data


--Creating Table for Salary_vs_Experience
CREATE TABLE Salary_vs_Experience(
    Respondent_Id INT NOT NULL,
    Gender VARCHAR NOT NULL,
    Salary FLOAT NOT NULL,
    Years_Coding FLOAT NOT NULL,
    PRIMARY KEY (Respondent_Id)
);

--Creating Table for Men
CREATE TABLE Men(
Respondent_Id INT NOT NULL,
Age FLOAT NOT NULL,

Country VARCHAR NOT NULL,
Formal_Education VARCHAR NOT NULL,
Position VARCHAR NOT NULL,
Years_Coding FLOAT NOT NULL,
Salary FLOAT NOT NULL,
PRIMARY KEY (Respondent_Id)
);

--Creating Table for women
CREATE TABLE Men(
Respondent_Id INT NOT NULL,
Age FLOAT NOT NULL,
Country VARCHAR NOT NULL,
Formal_Education VARCHAR NOT NULL,
Position VARCHAR NOT NULL,
Years_Coding FLOAT NOT NULL,
Salary FLOAT NOT NULL,
PRIMARY KEY (Respondent_Id)
);


