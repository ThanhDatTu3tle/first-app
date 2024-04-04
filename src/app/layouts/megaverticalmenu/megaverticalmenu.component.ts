import { Component, OnInit } from '@angular/core';

import { MegaMenuItem } from 'primeng/api';

import data from './data.json';

@Component({
  selector: 'app-megaverticalmenu',
  templateUrl: './megaverticalmenu.component.html',
  styleUrls: [`./../../../../node_modules/primeflex/primeflex.css`]
})
export class MegaVertiCalMenuComponent implements OnInit {
  megaMenuItems: MegaMenuItem[] = [];

  megaMenuData: any = data;
  
  constructor() {}

  ngOnInit() {
    let resultArr = [];
    let formatedMegaMenuItems = this.megaMenuData.reduce(function (acc: any, cur: any) {
      let itemFound = acc.find(function(item: any) {
        return item[0].label_parent === cur.label_parent;
      });
      if (itemFound) {
        itemFound.push(cur);
      } else {
        acc.push([cur]);
      }
      return acc;
    }, []);
    let resultItem = formatedMegaMenuItems.map((item: any) => {
      let x = {};
      return x = {
        label: `${item[0].label_parent}`,
        icon: `${item[0].icon}`,
        items: [
          [
            {
              label: `${item[0].label_parent}`,
              items: item.map((itemChild: any) => (
                {
                  label: `${itemChild.label}`,
                  icon: `${itemChild.icon}`,
                  url: `${itemChild.routerLink}`
                }
              ))
            }
          ]
        ]
      };
    });
    resultArr.push(resultItem);
    this.megaMenuItems = resultArr[0];
  }
}
