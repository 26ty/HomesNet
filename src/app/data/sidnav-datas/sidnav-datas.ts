export const sidnav = [
  {
    label:"首頁",
    route:"/",
    icon: 'pi pi-fw pi-home',
  },
  {
    label:"Homes",
    route:"/",
    icon: 'pi pi-fw pi-home',
  },
  {
    label:"Heros",
    route:"heros",
    icon: 'pi pi-fw pi-reddit',
  },
  {
    label:"Form",
    route:"forms",
    icon: 'pi pi-fw pi-book',
  },
  {
    label:"Primeng",
    route:"primeng",
    icon: 'pi pi-fw pi-box',
    children:[
      {
        label:"Work",
        route:"primeng",
        icon: 'pi pi-fw pi-briefcase',
      }
    ]
  }
]
