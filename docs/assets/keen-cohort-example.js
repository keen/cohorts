(function(env){
  // var SEED_INC_BASE = 30,
  //     SEED_INC_MIN = 7,
  //     SEED_INC_MAX = 12;

  // Stub request mechanism, for demo purposes
  env.Keen.CohortBuilder.fetchCohortDatasets = function(client, cohorts, callback) {
    var ds = new env.Keen.Dataset();

    ds.matrix = [
      [ 'Cohort joined ']
      // [ 'Cohort', '5 weeks ago', '4 weeks ago', '3 weeks ago', '2 weeks ago', '1 week ago' ],
      // [ 'Week 1', 35.5, 43.1, 55.1, 66.4, 78.3 ],
      // [ 'Week 2', 25.3, 38.2, 43.3, 54.0, null ],
      // [ 'Week 3', 22.1, 37.7, 41.7, null, null ],
      // [ 'Week 4', 20.3, 20.9, null, null, null ],
      // [ 'Week 5', 18.3, null, null, null, null ]
    ];

    ds.insertColumn(1, '1 week ago',   [ 78.3 ]);
    ds.insertColumn(1, '2 weeks ago',  [ 68.1, 54.0 ]);
    ds.insertColumn(1, '3 weeks ago',  [ 55.1, 43.4, 41.7 ]);
    ds.insertColumn(1, '4 weeks ago',  [ 43.1, 38.2, 38.1, 29.1 ]);
    ds.insertColumn(1, '5 weeks ago',  [ 35.5, 33.1, 25.1, 23.4, 22.9 ]);
    ds.insertColumn(1, '6 weeks ago',  [ 21.8, 20.1, 20.8, 19.8, 18.9, 18.4 ]);
    ds.insertColumn(1, '7 weeks ago',  [ 17.8, 15.0, 14.8, 10.0, 8.9, 8.5, 7.1 ]);
    ds.insertColumn(1, '8 weeks ago',  [ 15.2, 14.8, 14.3, 12.2, 10.9, 10.5, 10.1, 8.7 ]);
    ds.insertColumn(1, '9 weeks ago',  [ 12.7, 12.1, 10.8, 10.5, 10.3, 9.5, 6.1, 5.8, 4.8 ]);
    ds.insertColumn(1, '10 weeks ago', [ 10.3, 10.1, 10.0, 09.7, 9.2, 7.4, 6.2, 6.2, 3.1, 1.4 ]);


    setTimeout(function(){
      callback(ds);
    }, 1000);
  }

  // function rand(a, b){
  //   return Math.floor((Math.random() * b) + a);
  // }
  //
  // function gen(num, max) {
  //   var arr = [];
  //   for (var i = 0; i < max; i++) {
  //     if (i < num) {
  //       arr.push(rand(SEED_INC_MIN, SEED_INC_MAX) * (i+1) + SEED_INC_BASE);
  //     }
  //     else {
  //       arr.push(null);
  //     }
  //   }
  //   return arr;
  // }

}).call(this, typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {});
