// Intercept and Coeffs were found using sklearn in pandas 
Women_Intercept = -32201.72846527167;
W_Age_Coeff = 1632.77211965;
W_Education_Coeff = 5731.59056211;
W_Coding_Coeff = -78.53633802;

// Women_Salary = (Women_Intercept + (AGE * Age_Coeff) + (Education * Education_Coeff) + (Coding * Coding_Coeff))

// Intercept and Coeffs were found using sklearn in pandas 
Men_Intercept = -17339.256208534753
M_Age_Coeff = 39.89848239;
M_Education_Coeff = 5020.14870238;
M_Coding_Coeff = 6415.19448554;


function calculateSalary()
{
  
  let W_salary={};
  let M_salary={};
  
  // Women Prediction
  W_salary.Age = ($("#qty_age").val() * W_Age_Coeff)
  $("#unit_Age").val(W_salary.Age);
  
  W_salary.Formal_Education = ($("#qty_education").val() * W_Education_Coeff)
  $("#unit_education").val(W_salary.Formal_Education);
  
  W_salary.Years_Coding = ($("#qty_coding").val() * W_Coding_Coeff)
  $("#unit_coding").val(W_salary.Years_Coding);
  
  // Men Prediction
  M_salary.Age = ($("#qty_age").val() * M_Age_Coeff)
  $("#unit_Age").val(M_salary.Age);
  
  M_salary.Formal_Education = ($("#qty_education").val() * M_Education_Coeff)
  $("#unit_education").val(M_salary.Formal_Education);
  
  M_salary.Years_Coding = ($("#qty_coding").val() * M_Coding_Coeff)
  $("#unit_coding").val(M_salary.Years_Coding);
  
  
  let Women_Salary_Prediction = Women_Intercept + W_salary.Age + W_salary.Formal_Education + W_salary.Years_Coding;
  let Men_Salary_Prediction = Men_Intercept + M_salary.Age + M_salary.Formal_Education + M_salary.Years_Coding;

 
  $("#total_value1").text(Math.round(Women_Salary_Prediction));
  $("#total_value2").text(Math.round(Men_Salary_Prediction));
}

$(function()
 {
    $(".qty").on("change keyup",calculateSalary)
})