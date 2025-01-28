import { Injectable } from '@angular/core';
import { PersonNode } from 'src/app/core/types/type'; // Certifique-se de que o caminho está correto

@Injectable({
  providedIn: 'root'
})
export class TreeService {
  getTree(): PersonNode[] {
    // Retornando dados de exemplo ou de um backend
    return [
      {
        id: 1,
        name: 'Pessoa 1',
        relationship: 'Pai',
        level: 0,
        children: [
          {
            id: 2,
            name: 'Pessoa 2',
            relationship: 'Filho',
            level: 1,
            children: [
              {
                id: 3,
                name: 'Pessoa 3',
                relationship: 'Neto',
                level: 2,
                children: [
                  {
                    id: 4,
                    name: 'Pessoa 4',
                    relationship: 'Bisneto',
                    level: 3,
                    children: []
                  },
                  {
                    id: 5,
                    name: 'Pessoa 5',
                    relationship: 'Bisneto',
                    level: 3,
                    children: []
                  }
                ]
              },
              {
                id: 6,
                name: 'Pessoa 6',
                relationship: 'Neto',
                level: 2,
                children: [
                  {
                    id: 7,
                    name: 'Pessoa 7',
                    relationship: 'Bisneto',
                    level: 3,
                    children: []
                  }
                ]
              }
            ]
          },
          {
            id: 8,
            name: 'Pessoa 8',
            relationship: 'Filho',
            level: 1,
            children: [
              {
                id: 9,
                name: 'Pessoa 9',
                relationship: 'Neto',
                level: 2,
                children: []
              }
            ]
          }
        ]
      }
    ];
  }
}
