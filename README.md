Cohort Builder
==============

An attractive, custom cohort tool that's can be used by your team or your customers. Running this analysis means juggling a lot of complex queries and timeframes. This tool makes that super easy, and in doing so opens up one of the most powerful, valuable types of analysis to be built right into a product.

Cohort Builder, powered by the Keen IO [Analysis](https://github.com/keen/keen-analysis.js) and [Dataviz](https://github.com/keen/keen-dataviz.js) SDKs

![](https://raw.githubusercontent.com/keen/cohorts/master/docs/preview.png?token=AALA1mYWCYerp6rKA9Ydq9yF_hX1xB3Kks5YB9sMwA%3D%3D)

## Example usage

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <!-- Cohort Builder relies on the Keen IO Dataviz SDK -->
    <link href="https://d26b395fwzu5fz.cloudfront.net/keen-dataviz-1.0.1.css" rel="stylesheet">

    <!-- Cohort Builder CSS -->
    <link href="keen-cohort-builder.css" rel="stylesheet">
  </head>
<body>
  <div id="cohort-chart"></div>
  <div id="cohort-table"></div>

  <!-- Cohort Builder relies on the Keen IO Dataviz SDK -->
  <script src="https://d26b395fwzu5fz.cloudfront.net/keen-analysis-1.1.0.js"></script>
  <script src="https://d26b395fwzu5fz.cloudfront.net/keen-dataviz-1.0.1.js"></script>

  <!-- Cohort Builder JS -->
  <script src="keen-cohort-builder.js"></script>
  <script>
    var keenClient = new Keen({
      projectId: 'YOUR_PROJECT_ID',
      readKey: 'YOUR_READ_KEY'
    });

    var cohortChart = new Keen.Dataviz()
      .el('#cohort-chart')
      .height(100)
      .type('line');

    var cohortTable = new Keen.Dataviz()
      .el('#cohort-table')
      .library('cohort-builder')
      .type('matrix');

    var dateMatrix = Keen.CohortBuilder.generateDateMatrix('weeks', 5);
    var queryMatrix = Keen.CohortBuilder.generateCohortQueryMatrix(dateMatrix, function(cohort){
      return new Keen.Query('funnel', {
        steps: [
          {
            event_collection: 'first_launch',
            actor_property: 'dpid',
            filters: [
              { property_name: 'make', operator: 'eq', property_value: 'Apple' }
            ],
            timeframe: cohort.created_at
          },
          {
            event_collection: 'application_opened',
            actor_property: 'dpid',
            filters: [
              { property_name: 'make', operator: 'eq', property_value: 'Apple' }
            ],
            timeframe: cohort.current_interval
          }
        ]
      });
    });

    // Start first chart spinner
    cohortChart.prepare();
    Keen.CohortBuilder.fetchCohortDatasets(keenClient, queryMatrix, function(dataset) {
      cohortChart
        .data(dataset)
        .height(280)
        .render();

      cohortTable
        .data(dataset)
        .render();
    });
  </script>
</body>
</html>
```
