
-- Creating Mens meana table

CREATE TABLE Men_Means_Dataset(
    Gender FLOAT NOT NULL,
    Formal_Education FLOAT NOT NULL,
    Position FLOAT NOT NULL,
    Years_Coding FLOAT NOT NULL,
    Salary FLOAT NOT NULL,
    Age FLOAT NOT NULL,
    PRIMARY KEY (Salary)
)

-- Creating Womens Means Table
CREATE TABLE Womens_Means_Dataset(
    Gender FLOAT NOT NULL,
    Formal_Education FLOAT NOT NULL,
    Position FLOAT NOT NULL,
    Years_Coding FLOAT NOT NULL,
    Salary FLOAT NOT NULL,
    Age FLOAT NOT NULL,
    PRIMARY KEY (Salary)
)

-- queries to display table
SELECT * from  Men_Means_Dataset
SELECT * from  Womens_Means_Dataset

-- Joining Men and Womens Mean tables 
Select mm.Salary, mm.Age, mm.Gender, wm.Salary,wm.Age, wm.Gender
from Men_Means_Dataset as mm
FULL OUTER JOIN Womens_Means_Dataset as wm
ON mm.Age=wm.Age




-- Select *
-- from 
-- Men_Means_Dataset FULL OUTER JOIN Womens_Means_Dataset
-- ON Men_Means_Dataset.Salary=Womens_Means_Dataset.Salary


-- SELECT 
--     Gender,
--     Formal_Education,
--     Position,
--     Years_Coding,
--     Salary,
--     Age
--     FROM
--         Men_Means_Dataset
-- UNION ALL
--     SELECT
--         Gender,
--         Formal_Education,
--         Position,
--         Years_Coding,
--         Salary,
--         Age
--     FROM
--         Womens_Means_Dataset




-- 

