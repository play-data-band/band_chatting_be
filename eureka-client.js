// import Eureka from 'eureka-js-client';

// Or, if you're not using a transpiler:
const Eureka = require('eureka-js-client').Eureka;

const client = new Eureka({
  instance: {
    app: 'CHATTING-SERVICE',
    hostName: 'localhost',
    ipAddr: '	192.168.0.253',
    statusPageUrl: 'http://localhost:8080/info',
    healthCheckUrl: 'http://localhost:8080/health',
    port: {
      '$': 8080,
      '@enabled': 'true',
    },
    vipAddress: 'CHATTING-SERVICE',
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn',
    },
  },
  eureka: {
    host: 'localhost',
    port: 8761,
    servicePath: '/eureka/apps/'
  },
});
// export default client
// // import Eureka from 'eureka-js-client';

// // Or, if you're not using a transpiler:
// const Eureka = require('eureka-js-client').Eureka;

// // example configuration
// const client = new Eureka({
//   // application instance information
//   instance: {
//     instanceId: 'CHATTING-SERVICE',
//     app: 'CHATTING-SERVICE',
//     // instanceId: 'node1',
//     hostName: 'localhost',
//     ipAddr: 'localhost',
//     vipAddress: 'aaa',
//     port: {
//       '$': 8080,
//       '@enabled': 'true',
//     },
//     dataCenterInfo: {
//       '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
//       name: 'MyOwn',
//     },
//     registerWithEureka: true,
//     fetchRegistry: true
//   },
//   eureka: {
//     // eureka server host / port
//     host: 'localhost',
//     port: 8761,
//     servicePath: '/eureka/apps/',
//     preferIpAddress: true
//   }
// });

client.start(error => {
  console.log(error || "user service registered")
});

module.exports = client