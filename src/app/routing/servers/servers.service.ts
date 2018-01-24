export class ServersService {
  private servers: {id: number, name: string, status: string}[] = [
    {
      id: 1,
      name: 'Productionserever',
      status: 'online'
    },
    {
      id: 2,
      name: 'Testserver',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Devserver',
      status: 'offline'
    },
    {
      id: 4,
      name: 'Dhwani',
      status: 'online'
    }
  ];

  getServers() {
    return this.servers;
  }

  getServer(id: number) {
    // debugger
    // console.log("getServer : " + id);
    const server = this.servers.find(
      (s) => {
        // console.log("s : ");
        // console.log(s);
        return s.id === (+id); //=== compares data type along with content. 3 not equals to "3"
      }
    );
    // console.log(server);
    return server;
  }

  updateServer(id: number, serverInfo: {name: string, status: string}) {
    const server = this.servers.find(
      (s) => {
        return s.id === id;
      }
    );
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
