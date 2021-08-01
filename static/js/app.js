// Intercept and Coeffs were found using sklearn in pandas 
Women_Intercept = -10533.346696907938;
W_Age_Coeff = 1642.32066185;
W_Education_Coeff = 992.60496029;
W_Coding_Coeff = 338.05303618;

// Women_Salary = (Women_Intercept + (AGE * Age_Coeff) + (Education * Education_Coeff) + (Coding * Coding_Coeff))

// Intercept and Coeffs were found using sklearn in pandas 
Men_Intercept = -3521.425764058258;
M_Age_Coeff = 78.46865159;
M_Education_Coeff = 4836.1987244;
M_Coding_Coeff = 6189.2322976;

// Men_Salary = (Men_Intercept + (AGE * Age_Coeff) + (Education * Education_Coeff) + (Coding * Coding_Coeff))


function calculateSalary() {

  let W_salary = {};
  let M_salary = {};

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

$(function () {
  $(".qty").on("change keyup", calculateSalary)
})