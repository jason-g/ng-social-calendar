import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const calEvents = [
      { id: 1, name: 'Birthday', dateStart: '2017-11-02T12:58', dateEnd: '2017-11-02T13:58' },
      { id: 2, name: 'Party', dateStart: '2017-11-02T12:58', dateEnd: '2017-11-02T13:58' },
      { id: 3, name: 'Diner with Friends', dateStart: '2017-11-02T12:58', dateEnd: '2017-11-02T13:58' },
      { id: 4, name: 'Football', dateStart: '2017-11-02T12:58', dateEnd: '2017-11-02T13:58' },
      { id: 5, name: 'Class', dateStart: '2017-11-02T12:58', dateEnd: '2017-11-02T13:58' },
      { id: 6, name: 'Some super fun shit', dateStart: '2017-11-02T12:58', dateEnd: '2017-11-02T17:58' }
    ];
    return {calEvents};
  }
}
