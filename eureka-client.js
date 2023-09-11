// import Eureka from 'eureka-js-client';

// Or, if you're not using a transpiler:
const Eureka = require('eureka-js-client').Eureka;

// example configuration
const client = new Eureka({
  // application instance information
  instance: {
    app: 'Chatting-service',
    // instanceId: 'node1',
    hostName: 'localhost',
    ipAddr: '192.168.0.253',
    vipAddress: 'aaa',
    port: {
      '$': 8080,
      '@enabled': 'true',
    },
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn',
    },
    registerWithEureka: true,
    fetchRegistry: true
  },
  eureka: {
    // eureka server host / port
    host: 'localhost',
    port: 8761,
    servicePath: '/eureka/apps/'
    // # preferIpAddress: true
  }
});

client.start(error => {
  console.log(error || "user service registered")
});

module.exports = client