
[![Womenin-Twch.png](https://i.postimg.cc/G2PjRQ8B/Womenin-Twch.png)](https://postimg.cc/PpxDz1Mh)
[![Womenpng.png](https://i.postimg.cc/C1jRdMg5/Womenpng.png)](https://postimg.cc/hztD5BhR)
<hr>

# WomenInTech: 

# Segment One: Sketch It Out 

### Overview of the Problem

**Target Population of Interest:** Women in Machine Learning and Data Science  Technology roles in the United States who responded to annual Surveys of various sources.

According to the US Bureau of Labor Statistics, "Employment in computer and information technology occupations is projected to grow faster than the average for all occupations."

**Problem Statement:** Despite the growth in Technology jobs, the number of women in the United States that are occupying roles in Technology is significantly less than their male counterparts. When we look at the representation of women in the Software Engineering and Data Science fields, the gender imbalance still remains to be true. Furthermore, a pay gap also exists with women making less than men on avarage.

**Question:**  What is the difference between the percentage of the women (survey respondent) population and men  (survey respondents) population who occupied Technology roles Software Engineering, Machine Learning and Data Science in the United States? When comparing men and women in similar roles, does a pay gap exist? Does years of coding experience and/or education impact the salary of women? 

**Simple Hypothesis**
Null Hypothesis: | Alternative Hypothesis:
------------ | -------------
There is NO difference between the % in the workforce and (gap in salary when compared with years of coding experience, education) of the women population  and the men population | There is a difference between the % in workforce and (gap in salary when compared with years of coding experience, education) women population and the men population in the United States


### Objectives
In Our analysis, we will compare the 2020 survey results against the previous two years surveys to determine the key differences between men & women within the dataset in order to reject the null hypythosis and conclude that gender and paygap imbalance exists.  Furthermore, we will seek to understand the state of Women in Technology roles. We will utilize a Supervised Machine learning algorithm to predict salary of women in ML & DA role based on years of experience.

**Measure of Success** : The success of the project is dependent on the group ability to analyze the data and provide the necessary insight that speaks to the difference that exist in Technology roles and what impacts formal education and years of coding experience have on salary for women when compare to men. 

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
Years of Coding, Formal Education, Age | Salary


###  Database Integration

**DataFrame**
The provisional that will mimics the expected final database structure or schema will encapass the following columns/features from the dataframe the group created utlizing kaggle survey data from a csv file. 

[![Categories.png](https://i.postimg.cc/cJmkh66p/Categories.png)](https://postimg.cc/KK15vGPf)


<hr> 

[![Secment2.png](https://i.postimg.cc/HkqQNNjs/Secment2.png)](https://postimg.cc/9DBRRJGv)

# Segment Two: 

### MACHINE LEARNING MODEL 

**Machine Learning Files**
- Means_Salary_vs_Education.ipynb
- Means_Salary_vs_Years_Coding.ipynb
- Means_Salary_vs_Age.ipynb
- Men_Salary_Prediction_GUI
- Women_Salary_Prediction_GUI

**Our Process:**
- The data was process utlizing Jupyter notebook and python Pandas module.  
- The feature engineering was performed on the raw data set to improved model accuracy. The primary features the Women in Tech selected to answer our question are Years of Coding, Formal Education, Age, and Salary. 
- We split the data frame into two. Male and Female and followed the following step on each.
- We decided to perform a linear Regression model to better understand the realationship between the selected features utilizing sklearn LinearRegression model module.
- The Benefit of the Linear Regression Model it attempts to make prediction base on the variables by finding thr best fit line. 
- Linear Regression Model has it's  limitations with the biggest being it's sensitivity to outliers which can have huge effects on the regression. 

**ML Steps:**

1. Assign X Variable 
2. Rashape X Variable 
3. Assign y Variable  
4. Create an instance of the linear regression model
5 Attempt to learn patterns in the data by fitting the data| 
6. Used the predict() method to generate predictions

**Results:**

Predictions Results: **Female:** 885   **Male:** 3903

Vlaues | **Female** | **Male** 
------------ | -------------| -------------
R-squared Value | 0.850 | 0.992
Intercept | [-10533.346696907938] | -3521.425764058258
Age_Coefficent | [1642.32066185] | 78.46865159
Formal_Education Coeffiecent | [992.60496029] | 4836.1987244
Years_Coding Coefficent | [338.05303618] | 6189.2322976

**Male** 
R-squared Value |  0.992
Intercept | -3521.425764058258 | -3521.425764058258
Age_Coefficent | 78.46865159 | 
Formal_Education Coeffiecent | 4836.1987244
Years_Coding Coefficent | 6189.2322976

**Salary_vs_Education** | Female| Male
------------ | -------------| -------------
Coefficent| [14895.62758145]| 35160.81416349059
Intercept | [6749.67429451]| 99772.47478803102
rsquared| 0.03930021772367798 |0.008440846472859365
**Salary_vs_Years_Coding** | **Female** |**Male** 
Coefficent| [3586.23031933] | 76808.07128281836
Intercept | [3518.21343549] | 96006.81994698191
rsquared| 0.1686829283894643| 0.12449161784230522
**Salary_vs_Age** | **Female** |**Male** 
Coefficent|[1056.24293621] | 70888.22871340805
Intercept |[1639.68849527] | 68944.7988896175
rsquared| 0.03064321419116678 | 0.06905352422189848 


[![Salary-vs-Education.png](https://i.postimg.cc/L80dG33C/Salary-vs-Education.png)](https://postimg.cc/v49SV9jf)

[![Salary-vs-Years-Coding.png](https://i.postimg.cc/gksbHWXP/Salary-vs-Years-Coding.png)](https://postimg.cc/F7Y6hwVP)

[![Salary-vs-Age.png](https://i.postimg.cc/j29NG9Cq/Salary-vs-Age.png)](https://postimg.cc/Fky7STjw)

### Dashboard & Presentation 
In addition to Google Slides the team will create a Flask Appplication that will connect to Heroku. 
The final Women In Tech dashboard will ulized plotly js library to create interactive charts to show case the findings.

Google Slide Template Link: https://docs.google.com/presentation/d/14lsTK_TZEUkBLGRvn5NSM5nXPuJzJcnixqrUnA2axA8/edit?usp=sharing (In progress) 


### DATABASE  
**Files:**

- SQLQUERIES.sql
- TableQueries.sql



![image](https://user-images.githubusercontent.com/78892035/127244871-67c68f4e-c3dd-4af4-95eb-330fa5414a07.png)


<hr> 


[![Orange-BGpng-copy-2.png](https://i.postimg.cc/kXkDNtgG/Orange-BGpng-copy-2.png)](https://postimg.cc/2V7zryvN)

# Further Details on the Women in Tech Project  

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
