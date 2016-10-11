Cohort Matrix
=============

Cohort Matrix, powered by the Keen IO Analysis and Dataviz SDKs

![](http://f.cl.ly/items/2D2M3v1q0B312d2f2k09/preview.png)

## Example usage

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <!-- Cohort Matrix relies on the Keen IO Dataviz SDK -->
    <link href="https://d26b395fwzu5fz.cloudfront.net/keen-dataviz-1.0.1.css" rel="stylesheet">
    <link href="keen-cohort-matrix.css" rel="stylesheet">
  </head>
<body>
  <div id="cohort-chart"></div>
  <div id="cohort-table"></div>
  <script src="https://d26b395fwzu5fz.cloudfront.net/keen-analysis-1.1.0.js"></script>
  <script src="https://d26b395fwzu5fz.cloudfront.net/keen-dataviz-1.0.1.js"></script>
  <script src="keen-cohort-matrix.js"></script>
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
      .type('table');

    var dateMatrix = generateDateMatrix('weeks', 5);
    var queryMatrix = generateCohortQueryMatrix(dateMatrix, function(cohort){
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
    fetchCohortDatasets(keenClient, queryMatrix, function(dataset) {
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
