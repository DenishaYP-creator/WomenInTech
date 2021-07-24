
[![Womenin-Twch.png](https://i.postimg.cc/G2PjRQ8B/Womenin-Twch.png)](https://postimg.cc/PpxDz1Mh)
[![Womenpng.png](https://i.postimg.cc/C1jRdMg5/Womenpng.png)](https://postimg.cc/hztD5BhR)
<hr>

# WomenInTech: 

# Segment Two: Build the Pieces

### Overview of the Problem

**Target Population of Interest:** Women in Machine Learning and Data Science  Technology roles in the United States who responded to annual Surveys of various sources.

According to the US Bureau of Labor Statistics, "Employment in computer and information technology occupations is projected to grow faster than the average for all occupations."

**Problem Statement:** Despite the growth in Technology jobs the number of Women in the United States that are occupying roles in Technology is significantly less than their male counterparts. When we look at the women's representation in the Technology roles specifically women in Software Engineering, Data Science field the gender imbalance still remains to be true. Furthermore, pay gap also exist with women making less on avarage than men.

**Question:**  What is the difference between the percentage of the women (survey respondent) population and men  (survey respondents) population who occupied Technology roles Software Engineering, Machine Learning and Data Science in the United States? When comparing men and women in similar roles, does a pay gap exist? Does years of coding experience and/or education impact the salary of women? 

**Simple Hypothesis**
Null Hypothesis: | Alternative Hypothesis:
------------ | -------------
There is NO difference between the % in the workforce and (gap in salary when compared with years of coding experience, education) of the women population  and the men population | There is a difference between the % in workforce and (gap in salary when compared with years of coding experience, education) women population and the men population in the United States


### Objectives
In Our analysis, we will compare the 2020 survey results against the previous two years surveys to determine the key differences between men & women within the dataset in order to reject the null hypythosis and conclude that gender and paygap imbalance exists.  Furthermore, we will seek to understand the state of Women in Technology roles. We will utilize a Supervised Machine learning algorithm to predict salary of women in ML & DA role based on years of experience.

**Measure of Success** : The success of the project is dependent on the group ability to analyze the data and provide the necessary insight that speaks to the difference that exist in Technology roles and what impacts formal education and years of coding experience have on salary for women when compare to men. 

**Data Source Details:**

**1. What is the highest level of formal education that you have attained or plan to attain within the next 2 years(Q4)?** 
a) No formal education past high school b) Some college/university study without earning a bachelor’s degree c) Bachelor’s degree d) Master’s degree e) Doctoral degree f) Professional degree g) I prefer not to answer

**2. Select the title most similar to your current role or most recent title if retired(Q5):**  
a) Business Analyst b) Data Analyst c) Data Engineer d) Data Scientist) DBA/Database Engineer f) Machine Learning Engineerg) Product/Project Managerh) Research Scientist i) Software Engineerj) Statistician k) Student l) Currently not employed m) Other

**3. For how many years have you been writing code and/or programming(Q6)?** 
a) I have never written code b) < 1 years c) 1-2 years d) 3-5 years e) 5-10 years f) 10-20 years g) 20+ years
 
**5. What is the size of the company where you are employed(Q20)?** 
a) 0-49 employees b) 50-249 employees c) 250-999 employees d) 1000-9,999 employees e) 10,000 or more employees

**6. What is your current yearly compensation(Q24)?**  



### GitHub Repository Details
The Women in Tech Github Repo has a main branch and 5 branches that are specific to the feature component of the project. The name of the branches are follows:
1. ETL-Extract_Transform_Load
2. Database
3. Machine_Learning
4. Visualization
5. Presentation

### Machine Learning Model
#### Quantitative data analysis methods
The Linear Regression model machine learning model is the provisional machine learning model that stands in for the final machine learning model.
The model would measure the degree of difference years of experience and its impact on the salary of women developers. In other see if there’s any kind of correlation between how a women salary be based on their years of experience. Additional variable (may/will) be analyzed to deter if any correlation exist. 


**Target Variable: Salary**

Input Variable | Output Variable
------------ | -------------
X |y
Years of Coding, Formal Education | Salary


###  Database Integration

**DataFrame**
The provisional that will mimics the expected final database structure or schema will encapass the following columns/features from the dataframe the group created utlizing kaggle survey data from a csv file. 

[![Categories.png](https://i.postimg.cc/cJmkh66p/Categories.png)](https://postimg.cc/KK15vGPf)


<hr> 

# Segment Two: 

### MACHINE LEARNING MODEL 

**Machine Learning Files**
- Salary_vs_Education.ipynb
- Salary_vs_Years_Coding.ipynb
- Salary_vs_Age.ipynb
- Salary_vs_Position.ipynb

[![Salary-Educationpng.png](https://i.postimg.cc/ZK3yWWXq/Salary-Educationpng.png)](https://postimg.cc/crxJjLxq)

[![Salary-Yearof-Coding.png](https://i.postimg.cc/cJ5J9WPj/Salary-Yearof-Coding.png)](https://postimg.cc/cKwZCpxM)

### Dashboard
In addition to Google Slides the team will create a Flask Appplication that will connect to Heroku. 
The final Women In Tech dashboard will ulized plotly js library to create interactive charts to show case the findings.

### DATABASE  
**Files:**

- SQLQUERIES.sql
- TableQueries.sql

[![Database-ERD.png](https://i.postimg.cc/N058nJ9J/Database-ERD.png)](https://postimg.cc/2qNBbxxh)



<hr> 


[![Orange-BGpng-copy-2.png](https://i.postimg.cc/kXkDNtgG/Orange-BGpng-copy-2.png)](https://postimg.cc/2V7zryvN)

# Further Details on the Women in Tech Project  

## Team Members 
Denisha Perez | Juleah Koelling| Sahana Thumsi| Shelia Daniel | Sierra Knighten
------------ | -------------  | ------------- | ------------- | -------------
 ### Team Communication
 The Women in Tech team primary means of communciation is Slack. The Women in Tech team utlizes the Orange slack channel to present ideas, ask questions, and provide solutions that aide in meeting project deliverable and overall project delivery. Team member also shared mobile phone number to be utlized as an alternative option when necessary. 


## Technologies 
#### Data Cleaning and Analysis: 
Python Pandas will be used to clean and perform exploratory analysis on the data.
#### Database Storage:
Postgress SQL is the database we intend to use, and we will use Heruko to display the data.
#### Dashboard: 
Tableau for a fully functioning and interactive dashboard.
#### Machine Learning:
SciKitLearn is the ML library we'll be using to create a the initial regression model or classification model if applicable.
#### Other Libraries:
Numpy, Mathplotlib, Imbalance Learn 

 
### Group Project Deliverables 
- [x] Presentation
- [x] Github Repo
- [x] Machine Learning Model
- [x] Database
- [x] Dashboard 


### Group Project Components & Timeline  
Segment | Title | Start Date | End Date 
------------ | ------------- | ------------- | -------------
One | Sketch It Out | TBD | Jul 4 
Two |Build the Pieces | Jul 5  | Jul 18
Three |Plug It In	Group |	Jul 19 | Jul 25
Four|Put It All Together | Jul 26 | Aug 1

[![womenin-Tech2.png](https://i.postimg.cc/QdLVgrn3/womenin-Tech2.png)](https://postimg.cc/qzLk0WTb)
