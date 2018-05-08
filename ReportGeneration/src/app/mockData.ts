export let reportLandingData = [{
  reportname: "Provider Network Adqquacy",
  report: "HSD3",
  datasetname: ["HSD.HSD_PCP", "HSD.PROVIDER_PROFILE_FINAL"],
  Editable: 'N'
},
{
  reportname: "Over and Under Utilization",
  report: "HSD40",
  datasetname: ["HSD.DME_CLCL_MED", "HSD.CLCL_MED_ER_NONER", "HSD.MEMBER_CLINICAL_CARE_LEVEL", "HSD.QUARTER_PHARMACY_ALL_CLAIMS"],
  Editable: 'N'
}, {
  reportname: "Patient Centered Medical Homes",
  report: "HSD48",
  datasetname: ["HSD.PMCH_PCP", "HSD.PMCH_CLCL_MED"],
  Editable: 'N'
},
{
  reportname: "Patient Centered Medical Homes",
  report: "HSD70",
  datasetname: ["HSD.PMCH_PCP", "HSD.PMCH_CLCL_MED"],
  Editable: 'N'
},]
export let reportTableData = [{
  ListType: 'ENF',
  InsuranceID: "10598489700",
  MedicaidID: "3662946630",
  SSN: "529287966",
  FIRST_NAME: "JEAN",
  LAST_NAME: "RYAN",
  DOB: "29.05.1938",
  NFLOCRefusal: "29.05.1938",
  RefusalDate: "00:00:00",
  AlternateMCO: "TRUE",
  AlternateMCODate: "",
  Comments: ""
},
{
  ListType: 'FNS',
  InsuranceID: "10598489700",
  MedicaidID: "3662946630",
  SSN: "529287966",
  FIRST_NAME: "JEAN",
  LAST_NAME: "RYAN",
  DOB: "29.05.1938",
  NFLOCRefusal: "29.05.1938",
  RefusalDate: "00:00:00",
  AlternateMCO: "FALSE",
  AlternateMCODate: "",
  Comments: ""
}];


export let dataTableData = [{
  ListType: 'data',
  InsuranceID: "10598489700",
  MedicaidID: "3662946630",
  SSN: "529287966",
  FIRST_NAME: "JEAN",
  LAST_NAME: "RYAN",
  DOB: "29.05.1938",
  NFLOCRefusal: "29.05.1938",
  RefusalDate: "00:00:00",
  AlternateMCO: "FALSE",
  AlternateMCODate: "",
  Comments: ""
},
{
  ListType: 'data1',
  InsuranceID: "10598489700",
  MedicaidID: "3662946630",
  SSN: "529287966",
  FIRST_NAME: "JEAN",
  LAST_NAME: "RYAN",
  DOB: "29.05.1938",
  NFLOCRefusal: "29.05.1938",
  RefusalDate: "00:00:00",
  AlternateMCO: "FALSE",
  AlternateMCODate: "",
  Comments: ""
}];
export let loginContent = [{
  username: 'user1',
  password: 'user1',
  action: 'HSD3,HSD70'
},
{
  username: 'user2',
  password: 'user2',
  action: 'HSD3,HSD48'
},
{
  username: 'user3',
  password: 'user3',
  action: 'HSD3'
},
{
  username: 'user4',
  password: 'user4',
  action: 'HSD3'
},
{
  username: 'user5',
  password: 'user5',
  action: 'HSD3'
},
{
  username: 'user6',
  password: 'user6',
  action: 'HSD3'
}]
/* export let reportTableData = [{
      id: 1,
      readonly:false,
      interviewdate: '12/19/2017',
      interviewtime: '8.30AM',
      interviewtype: 'Telephonic',
      primaryinterviewer: 'Ajith',
      comments: ''
      
    },
    {
      id: 2,
      readonly:false,      
      interviewdate: '01/19/2018',
      interviewtime: '9.30AM',
      interviewtype: 'Skype',
      primaryinterviewer: 'Vijay',
      comments: ''      
    },
    {
      id: 3,
      readonly:false,      
      interviewdate: '01/06/2018',
      interviewtime: '11.30AM',
      interviewtype: 'Direct',
      primaryinterviewer: 'Rajini',
      comments: ''      
    },
    {
      id: 4,
      readonly:false,      
      interviewdate: '01/09/2018',
      interviewtime: '9.40AM',
      interviewtype: 'Skype',
      primaryinterviewer: 'Kamal',
      comments: ''      
    }
  ]

   export let dataTableData = [{
      id: 1,
      interviewdate: '12/19/2017',
      interviewtime: '8.30AM',
      interviewtype: 'Telephonic',
      primaryinterviewer: 'Ajith',
      comments:' join join by join'
    },
    {
      id: 2,
      interviewdate: '01/19/2018',
      interviewtime: '9.30AM',
      interviewtype: 'Skype',
      primaryinterviewer: 'Vijay',
      comments:' join join by join'
    },
    {
      id: 3,
      interviewdate: '01/06/2018',
      interviewtime: '11.30AM',
      interviewtype: 'Direct',
      primaryinterviewer: 'Rajini',
      comments:' join join by join'
    },
    {
      id: 4,
      interviewdate: '01/09/2018',
      interviewtime: '9.40AM',
      interviewtype: 'Skype',
      primaryinterviewer: 'Kamal',
      comments:' join join by join'
    },
    {
      id: 5,
      interviewdate: '01/09/2018',
      interviewtime: '9.40AM',
      interviewtype: 'Skype',
      primaryinterviewer: 'Kamal',
      comments:' join join by join'
    },
    {
      id: 6,
      interviewdate: '01/06/2018',
      interviewtime: '11.30AM',
      interviewtype: 'Direct',
      primaryinterviewer: 'Rajini',
      comments:' join join by join'
    },
    {
      id: 7,
      interviewdate: '01/19/2018',
      interviewtime: '9.30AM',
      interviewtype: 'Skype',
      primaryinterviewer: 'Vijay',
      comments:' join join by join'
    },
    {
      id: 8,
      interviewdate: '12/19/2017',
      interviewtime: '8.30AM',
      interviewtype: 'Telephonic',
      primaryinterviewer: 'Ajith',
      comments:' join join by join'
    },
    {
      id: 9,
      interviewdate: '01/19/2018',
      interviewtime: '9.30AM',
      interviewtype: 'Skype',
      primaryinterviewer: 'Vijay',
      comments:' join join by join'
    },
    {
      id: 10,
      interviewdate: '12/19/2017',
      interviewtime: '8.30AM',
      interviewtype: 'Telephonic',
      primaryinterviewer: 'Ajith',
      comments:' join join by join'
    },
    {
      id: 11,
      interviewdate: '12/19/2017',
      interviewtime: '8.30AM',
      interviewtype: 'Telephonic',
      primaryinterviewer: 'Ajith',
      comments:' join join by join'
    },
    {
      id: 12,
      interviewdate: '01/19/2018',
      interviewtime: '9.30AM',
      interviewtype: 'Skype',
      primaryinterviewer: 'Vijay',
      comments:' join join by join'
    }
  ]
*/