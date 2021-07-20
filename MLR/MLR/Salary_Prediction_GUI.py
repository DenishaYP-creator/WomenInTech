import warnings
warnings.filterwarnings('ignore')
import pandas as pd
import numpy as np
import seaborn as sns 
import matplotlib.pyplot as plt
import chart_studio.plotly as py

#Import Women Means Data
Women_df = pd.read_csv('Women_Means_Dataset.csv')
Women_df

Women_X = Women_df[['Age','Years_Coding','Formal_Education']]
Women_X

Women_Y = Women_df['Salary']

from sklearn.model_selection import train_test_split
Women_X_train, Women_X_test, Women_y_train, Women_y_test = train_test_split(Women_X, Women_Y, test_size=0.25, random_state=101)
print(Women_X_train.shape)
print(Women_X_test.shape)
print(Women_y_train.shape)
print(Women_y_test.shape)

from sklearn.linear_model import LinearRegression
Women_model = LinearRegression()
Women_model.fit(Women_X_train,Women_y_train)

import statsmodels.api as sm
Woemn_X_train_Sm= sm.add_constant(Women_X_train)
Women_X_train_Sm= sm.add_constant(Women_X_train)
ls=sm.OLS(Women_y_train,Women_X_train_Sm).fit()
print(ls.summary())



## GUI

import pandas as pd
from sklearn import linear_model
import tkinter as tk 
import matplotlib.pyplot as plt
from matplotlib.backends.backend_tkagg import FigureCanvasTkAgg


# with sklearn
regr = linear_model.LinearRegression()
regr.fit(Women_X, Women_Y)

print(regr.intercept_)
print('Coefficients: \n', regr.coef_)

# tkinter GUI
root= tk.Tk()

canvas1 = tk.Canvas(root, width = 500, height = 300)
canvas1.pack()

# with sklearn
Intercept_result = ('Intercept: ', regr.intercept_)
label_Intercept = tk.Label(root, text=Intercept_result, justify = 'center')
canvas1.create_window(260, 220, window=label_Intercept)

# with sklearn
Coefficients_result  = ('Coefficients: ', regr.coef_)
label_Coefficients = tk.Label(root, text=Coefficients_result, justify = 'center')
canvas1.create_window(260, 240, window=label_Coefficients)

# Age label and input box
label1 = tk.Label(root, text=' Age: ')
canvas1.create_window(100, 80, window=label1)

entry1 = tk.Entry (root) # create 1st entry box
canvas1.create_window(270, 80, window=entry1)

# Formal Education label and input box
label2 = tk.Label(root, text=' Formal Education: ')
canvas1.create_window(120, 100, window=label2)

entry2 = tk.Entry (root) # create 3rd entry box
canvas1.create_window(270, 100, window=entry2)

# Years Coding label and input box
label3 = tk.Label(root, text=' Years Coding: ')
canvas1.create_window(140, 120, window=label3)

entry3 = tk.Entry (root) # create 2nd entry box
canvas1.create_window(270, 120, window=entry3)

Women_model = LinearRegression()
Women_model.fit(Women_X, Women_Y)


def values(): 
    global Age #our 1st input variable
    Age = float(entry1.get()) 
    
    global Formal_Education #our 2nd input variable
    Formal_Education = float(entry2.get()) 
    
    global Years_Coding #our 3rd input variable
    Years_Coding = float(entry3.get()) 
    
    Prediction_result  = ('Predicted Womens Salary: ', Women_model.predict(np.array([[Age, Formal_Education, Years_Coding]])))
    label_Prediction = tk.Label(root, text = Prediction_result, bg='yellow')
    canvas1.create_window(260, 280, window=label_Prediction)
    
button1 = tk.Button (root, text='Predict Womens Salary',command=values, bg='orange') # button to call the 'values' command above 
canvas1.create_window(270, 150, window=button1)
 
mpl_fig = plt.figure()

#plot 1st scatter 
figure3 = plt.Figure(figsize=(4,3), dpi=100)
ax3 = figure3.add_subplot(111)
ax3.scatter(Women_df['Age'].astype(float),Women_df['Salary'].astype(float), color = 'r')
scatter3 = FigureCanvasTkAgg(figure3, root) 
scatter3.get_tk_widget().pack(side=tk.RIGHT, fill=tk.BOTH)
ax3.legend(['Salary']) 
ax3.set_xlabel('Age')
ax3.set_title('Age Vs. Salary')

# Export plot to plotly
unique_url = py.plot_mpl(mpl_fig, filename="Age VS. Salary")

#plot 2nd scatter 
figure4 = plt.Figure(figsize=(4,3), dpi=100)
ax4 = figure4.add_subplot(111)
ax4.scatter(Women_df['Formal_Education'].astype(float),Women_df['Salary'].astype(float), color = 'g')
scatter4 = FigureCanvasTkAgg(figure4, root) 
scatter4.get_tk_widget().pack(side=tk.RIGHT, fill=tk.BOTH)
ax4.legend(['Salary']) 
ax4.set_xlabel('Formal Education')
ax4.set_title('Formal Education Vs. Salary')

# Export plot to plotly
unique_url = py.plot_mpl(mpl_fig, filename="Formal Education VS. Salary")

#plot 2nd scatter 
figure5 = plt.Figure(figsize=(4,3), dpi=100)
ax5 = figure5.add_subplot(111)
ax5.scatter(Women_df['Years_Coding'].astype(float),Women_df['Salary'].astype(float), color = 'b')
scatter5 = FigureCanvasTkAgg(figure5, root) 
scatter5.get_tk_widget().pack(side=tk.RIGHT, fill=tk.BOTH)
ax5.legend(['Salary']) 
ax5.set_xlabel('Years Coding')
ax5.set_title('Years Coding Vs. Salary')

# Export plot to plotly
unique_url = py.plot_mpl(mpl_fig, filename="Years_coding VS. Salary")

root.mainloop()