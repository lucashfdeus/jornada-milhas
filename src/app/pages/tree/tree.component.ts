import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { TreeService } from 'src/app/core/services/tree.service';
import { PersonNode } from 'src/app/core/types/type';

export interface FlatPersonNode {
  id: number;
  name: string;
  relationship: string;
  level: number;
  expandable: boolean;
}

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  treeData: PersonNode[] = [];
  dataSource: MatTreeFlatDataSource<PersonNode, FlatPersonNode>;
  treeControl: FlatTreeControl<FlatPersonNode>;
  treeFlattener: MatTreeFlattener<PersonNode, FlatPersonNode>;

  constructor(private treeService: TreeService) {
    this.treeFlattener = new MatTreeFlattener<PersonNode, FlatPersonNode>(
      (node: PersonNode, level: number) => this.transformNode(node, level),
      (node: FlatPersonNode) => node.level,
      (node: FlatPersonNode) => node.expandable,
      (node: PersonNode) => node.children
    );

    this.treeControl = new FlatTreeControl<FlatPersonNode>(
      (node: FlatPersonNode) => node.level,
      (node: FlatPersonNode) => node.expandable
    );

    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
  }

  ngOnInit(): void {
    this.treeData = this.treeService.getTree();
    this.dataSource.data = this.treeData;
  }

  transformNode(node: PersonNode, level: number): FlatPersonNode {
    return {
      id: node.id,
      name: node.name,
      relationship: node.relationship,
      level: level,
      expandable: Array.isArray(node.children) && node.children.length > 0
    };
  }

  hasChild = (_: number, node: FlatPersonNode) => node.expandable;

  getIconForRelationship(relationship: string): string {
    switch (relationship) {
      case 'Pai':
        return 'family_restroom';
      case 'Filho':
        return 'child_care';
      case 'Neto':
        return 'child_friendly';
      case 'Bisneto':
        return 'groups';
      default:
        return 'person';
    }
  }

  getClassForRelationship(relationship: string): string {
    switch (relationship) {
      case 'Pai':
        return 'pai';
      case 'Filho':
        return 'filho';
      case 'Neto':
        return 'neto';
      case 'Bisneto':
        return 'bisneto';
      default:
        return '';
    }
  }
}
