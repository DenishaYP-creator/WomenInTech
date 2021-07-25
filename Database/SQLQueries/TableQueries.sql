CREATE TABLE Salary_vs_Experience(
    Respondent_Id INT NOT NULL,
    Gender VARCHAR NOT NULL,
    Salary FLOAT NOT NULL,
    Years_Coding FLOAT NOT NULL,
    PRIMARY KEY (Respondent_Id)
);

CREATE TABLE Demographic_Info(
    Respondent_Id INT NOT NULL,
    Age FLOAT NOT NULL,
    Country VARCHAR NOT NULL,
    Formal_Education VARCHAR NOT NULL,
    PRIMARY KEY (Respondent_Id)
);

CREATE TABLE Work_Info(
    Respondent_Id INT NOT NULL,
    Position VARCHAR NOT NULL,
    Years_Coding FLOAT NOT NULL,
	Salary FLOAT NOT NULL,
    PRIMARY KEY (Respondent_Id)
);

SELECT DISTINCT ON (Respondent_Id) d.Respondent_Id
d.Age
d.Country
d.Formal_Education
INTO Gender_Info
FROM Demographic_Info as d
LEFT JOIN Work_Info as wi
ON d.Respondent_Id = wi.Respondent_Id
LEFT JOIN Salary_vs_Experience as 
ON d.Respondent_Id = se.Respondent_Id
WHERE Country = 'United states of America'
ORDER BY d.Respondent_Id


select k.Respondent_Id, k.Age, k.Country, K.Formal_Education
INTO Demographic_Info 
from Kaggle_Data as k
select * from Demographic_Info

