  // Create a new client instance
  var client = new Keen({
      projectId: '5805510b8db53dfda8a7490f',
      writeKey: '2CA4D7E1D842DE17AF0DE70FAC44F1778B2A0FE577C3033E14E6EA51E7FD9FABFC6720314F12107CE722C67A65B33A35C502692FF822EFA742EA4AA70C16B4E600C65FE2C31E88E0F72FFDD697657121BDF136B7AC39D8FF2E5D111D87EE0D7D'
  });

  var sessionCookie = Keen.utils.cookie('keen-cookie');
  if (!sessionCookie.get('user_id')) {
      sessionCookie.set('user_id', Keen.helpers.getUniqueId());
  }

  var sessionTimer = Keen.utils.timer();
  sessionTimer.start();

  Keen.listenTo({
      'click .nav a': function(e){
          // 500ms to record an event
          client.recordEvent('leave page');
      }
  });

  // DATA MODEL
  client.extendEvents(function(){
      return {
          page: {
              title: document.title,
              url: document.location.href
              // info: {} (add-on)
          },
          referrer: {
              url: document.referrer
              // info: {} (add-on)
          },
          tech: {
              browser: Keen.helpers.getBrowserProfile(),
              // info: {} (add-on)
              ip: '${keen.ip}',
              ua: '${keen.user_agent}'
          },
          time: Keen.helpers.getDatetimeIndex(),
          visitor: {
              id: sessionCookie.get('user_id'),
              time_on_page: sessionTimer.value()
          },
          // geo: {} (add-on)
          keen: {
              timestamp: new Date().toISOString(),
              addons: [
                  {
                      name: 'keen:ip_to_geo',
                      input: {
                          ip: 'tech.ip'
                      },
                      output: 'geo'
                  },
                  {
                      name: 'keen:ua_parser',
                      input: {
                          ua_string: 'tech.ua'
                      },
                      output: 'tech.info'
                  },
                  {
                      name: 'keen:url_parser',
                      input: {
                          url: 'page.url'
                      },
                      output: 'page.info'
                  },
                  {
                      name: 'keen:referrer_parser',
                      input: {
                          page_url: 'page.url',
                          referrer_url: 'referrer.url'
                      },
                      output: 'referrer.info'
                  }
              ]
          }
      };
  });

client.recordEvent('pageview');
