<template>
  <div class="index-page">
    <IntroSection />

    <VocabSection />

    <YearChartSection
      id="year-chart-section"
      :two_years_data="two_years_data"
      :covid_data="covid_data"
    />

    <TypeChartSection :two_years_data="two_years_data" />

    <ExampleSection :two_years_data="two_years_data" />

    <PositionChartSection :two_years_data="two_years_data" />

    <CompareSection :two_years_data="two_years_data" />

    <RequirementSection />

    <FeedbackSection :feedback_data="feedback_data" />

    <CovidChartSection id="covid-chart-section" :data="covid_data" />

    <AboutYouSection />

    <ReadMoreSection id="read-more-section" />
  </div>
</template>

<script>
import two_years_data from "~/static/data/2years.json";
import covid_data from "~/static/data/covid.json";
import feedback_data from "~/static/data/feedback.json";

export default {
  data() {
    return {
      two_years_data: two_years_data,
      covid_data: covid_data,
      feedback_data: feedback_data
    };
  }
};
</script>
