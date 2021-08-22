import two_years_data from "~/static/data/2years.json";
import covid_data from "~/static/data/covid.json";
import feedback_data from "~/static/data/feedback.json";

export const state = () => ({
  two_years_data: two_years_data,
  covid_data: covid_data,
  feedback_data: feedback_data
});
