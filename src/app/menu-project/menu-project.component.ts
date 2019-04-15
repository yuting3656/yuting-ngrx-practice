import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-project',
  templateUrl: './menu-project.component.html',
  styleUrls: ['./menu-project.component.css']
})
export class MenuProjectComponent implements OnInit {

  menuData = [
    {
      title: '會員管理',
      icon: 'fa fa-users',
      subMenu: [
        {
          title: '會員資料維護',
          url: '/member/listMemberAccount',
        },
        {
          title: '會員資料查詢',
          url: '/member/listMemberAccount/search',
        },
        {
          title: '公司資料維護',
          url: '/member/listCompanies',
        },
        {
          title: '會員鎖定列表',
          url: '/member/listLockedMemberAccount',
        },
        {
          title: '會員登入記錄列表',
          url: '/member/listMemberLogonLogs',
        },
        {
          title: '資料異動記錄列表',
          url: '/member/listMemberChangeLogs',
        },
        {
          title: '公司資料維護',
          url: '/member/editPasswordPolicy',
        }
      ]
    },
    {
      title: '應用服務與介接管理',
      icon: 'fa fa-archive',
      subMenu: [
        {
          title: '應用服務維護',
          url: '/service/listServices',
        },
        {
          title: '應用服務造訪統計',
          url: 'https://www.google.com.tw/',
        },
        {
          title: '介接API維護',
          url: '/api/listApi',
        },
        {
          title: '介接API存取記錄列表',
          url: '/api/listApiAccessLogs',
        }
      ]
    },
    {
      title: '系統管理',
      icon: 'fa fa-archive',
      subMenu: [
        {
          title: '後台帳號資料維護',
          url: '/admin/listAdminMemberAccounts',
        },
        {
          title: '作業群組維護',
          url: '/admin/listAuthRoles',
        },
        {
          title: '後台帳號登入記錄列表',
          url: '/admin/listAdminAccountLogonLogs',
        },
        {
          title: '訊息範本列表',
          url: '/admin/listNotificationTemplate',
        }
      ]
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  showMe(i) {
    alert(i);
  }

}
