(function(env){
  // Stub request mechanism, for demo purposes
  env.Keen.CohortBuilder.fetchCohortDatasets = function(client, cohorts, callback) {
    var ds = new env.Keen.Dataset();
    ds.matrix = [
      [ 'Cohort', '5 weeks ago', '4 weeks ago', '3 weeks ago', '2 weeks ago', '1 week ago' ],
      [ 'Week 1', 30.5, 43.1, 55.1, 66.4, 78.3 ],
      [ 'Week 2', 25.3, 38.2, 43.3, 54.0, null ],
      [ 'Week 3', 22.1, 37.7, 41.7, null, null ],
      [ 'Week 4', 20.3, 20.9, null, null, null ],
      [ 'Week 5', 18.3, null, null, null, null ]
    ];
    setTimeout(function(){
      callback(ds);
    }, 1000);
  }

}).call(this, typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {});
