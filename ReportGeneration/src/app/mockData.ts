export let reportLandingData = [{
  reportname: "Provider Network Adqquacy",
  report: "HSD3",
  datasetname: {"tab1":["tab1_HSD.HSD_PCP", "tab1_HSD.PROVIDER_PROFILE_FINAL"],"tab2":["tab2_HSD.HSD_PCP", "tab2_HSD.PROVIDER_PROFILE_FINAL"]},
  Editable: 'N'
},
{
  reportname: "Over and Under Utilization",
  report: "HSD40",
  datasetname: {"summary":["HSD.DME_CLCL_MED", "HSD.CLCL_MED_ER_NONER", "HSD.MEMBER_CLINICAL_CARE_LEVEL", "HSD.QUARTER_PHARMACY_ALL_CLAIMS"],"provider details":["HSD.DME_CLCL_MED_1", "HSD.CLCL_MED_ER_NONER_2", "HSD.MEMBER_CLINICAL_CARE_LEVEL_3"]},
  Editable: 'N'
}, {
  reportname: "Patient Centered Medical Homes",
  report: "HSD48",
   datasetname: {"cumulative":["HSD.DME_CLCL_MED", "HSD.CLCL_MED_ER_NONER"],"provider info":["HSD.DME_CLCL_MED_1", "HSD.MEMBER_CLINICAL_CARE_LEVEL_2"]},
   Editable: 'N'
},
{
  reportname: "Patient Centered Medical Homes",
  report: "HSD70",
  datasetname: {"cumulative":["HSD.PMCH_PCP", "HSD.PMCH_CLCL_MED"]},
  Editable: 'N'
},]
// export let reportTableData = [{
//   ListType: 'ENF',
//   InsuranceID: "10598489700",
//   MedicaidID: "3662946630",
//   SSN: "529287966",
//   FIRST_NAME: "JEAN",
//   LAST_NAME: "RYAN",
//   DOB: "29.05.1938",
//   NFLOCRefusal: "29.05.1938",
//   RefusalDate: "00:00:00",
//   AlternateMCO: "TRUE",
//   AlternateMCODate: "",
//   Comments: ""
// },
// {
//   ListType: 'FNS',
//   InsuranceID: "10598489700",
//   MedicaidID: "3662946630",
//   SSN: "529287966",
//   FIRST_NAME: "JEAN",
//   LAST_NAME: "RYAN",
//   DOB: "29.05.1938",
//   NFLOCRefusal: "29.05.1938",
//   RefusalDate: "00:00:00",
//   AlternateMCO: "FALSE",
//   AlternateMCODate: "",
//   Comments: ""
// }];


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

export let reportTableData ={
  "status": "View",
  "response": [
    {
      "macro": "V",
      "facets": "MEMBER ID FACETS_23",
      "hicn": "MEMBER HICN_9",
      "mrn": "MEMBER MRN_22",
      "last_name": "MEMBER LAST NAME_14",
      "first_name": "MEMBER FIRST NAME_16",
      "Gender": "F",
      "Language": "",
      "Phone": "123",
      "Addr1": "MEMBER ADDR LN 1_14",
      "Addr2": "MEMBER ADDR LN 2_14",
      "City": "RIO RANCHO",
      "state": "NM",
      "zip": "87144",
      "country": "SANDOVAL",
      "territory": "CENTRAL",
      "subsa": "WEST SIDE",
      "GEONAME": "RIO RANCHO",
      "desc": "Med Adv HMO     PHP",
      "pcpgroup": "PHP PCP TIN NAME_4",
      "pcpname": "PHP PCP NAME_18",
      "modified": "No",
      "audit": "Null",
      "birth_dt": ""
    },
    {
      "macro": "V",
      "facets": "MEMBER ID FACETS_22",
      "hicn": "MEMBER HICN_6",
      "mrn": "MEMBER MRN_23",
      "last_name": "MEMBER LAST NAME_14",
      "first_name": "MEMBER FIRST NAME_15",
      "Gender": "M",
      "Language": "",
      "Phone": "456",
      "Addr1": "MEMBER ADDR LN 1_14",
      "Addr2": "MEMBER ADDR LN 2_14",
      "City": "RIO RANCHO",
      "state": "NM",
      "zip": "87144",
      "country": "SANDOVAL",
      "territory": "CENTRAL",
      "subsa": "WEST SIDE",
      "GEONAME": "RIO RANCHO",
      "desc": "Med Adv HMO     PHP",
      "pcpgroup": "PHP PCP TIN NAME_4",
      "pcpname": "PHP PCP NAME_18",
      "modified": "No",
      "audit": "Null",
      "birth_dt": ""
    },
    {
      "macro": "V",
      "facets": "MEMBER ID FACETS_19",
      "hicn": "MEMBER HICN_4",
      "mrn": "MEMBER MRN_24",
      "last_name": "MEMBER LAST NAME_10",
      "first_name": "MEMBER FIRST NAME_11",
      "Gender": "M",
      "Language": "",
      "Phone": "789",
      "Addr1": "MEMBER ADDR LN 1_10",
      "Addr2": "MEMBER ADDR LN 2_10",
      "City": "RIO RANCHO",
      "state": "NM",
      "zip": "87144",
      "country": "SANDOVAL",
      "territory": "CENTRAL",
      "subsa": "WEST SIDE",
      "GEONAME": "RIO RANCHO",
      "desc": "Med Adv HMO     PHP",
      "pcpgroup": "PHP PCP TIN NAME_5",
      "pcpname": "PHP PCP NAME_2",
      "modified": "No",
      "audit": "Null",
      "birth_dt": ""
    },
    {
      "macro": "V",
      "facets": "MEMBER ID FACETS_9",
      "hicn": "MEMBER HICN_8",
      "mrn": "MEMBER MRN_19",
      "last_name": "MEMBER LAST NAME_24",
      "first_name": "MEMBER FIRST NAME_26",
      "Gender": "M",
      "Language": "",
      "Phone": "123",
      "Addr1": "MEMBER ADDR LN 1_24",
      "Addr2": "MEMBER ADDR LN 2_24",
      "City": "SAN JUAN PUEBLO",
      "state": "NM",
      "zip": "87566",
      "country": "RIO ARRIBA",
      "territory": "NORTHEAST",
      "subsa": "OTHER",
      "GEONAME": "OHKAY OWINGEH",
      "desc": "Med Adv HMO     PHP",
      "pcpgroup": "PHP PCP TIN NAME_4",
      "pcpname": "PHP PCP NAME_13",
      "modified": "No",
      "audit": "Null",
      "birth_dt": ""
    },
    {
      "macro": "V",
      "facets": "MEMBER ID FACETS_8",
      "hicn": "MEMBER HICN_11",
      "mrn": "MEMBER MRN_11",
      "last_name": "MEMBER LAST NAME_23",
      "first_name": "MEMBER FIRST NAME_25",
      "Gender": "M",
      "Language": "",
      "Phone": "456",
      "Addr1": "MEMBER ADDR LN 1_23",
      "Addr2": "MEMBER ADDR LN 2_23",
      "City": "SANTA FE",
      "state": "NM",
      "zip": "87506",
      "country": "SANTA FE",
      "territory": "NORTHEAST",
      "subsa": "OTHER",
      "GEONAME": "SANTA FE",
      "desc": "Med Adv HMO     PHP",
      "pcpgroup": "PHP PCP TIN NAME_4",
      "pcpname": "PHP PCP NAME_7",
      "modified": "No",
      "audit": "Null",
      "birth_dt": ""
    },
    {
      "macro": "V",
      "facets": "MEMBER ID FACETS_5",
      "hicn": "MEMBER HICN_5",
      "mrn": "MEMBER MRN_10",
      "last_name": "MEMBER LAST NAME_20",
      "first_name": "MEMBER FIRST NAME_22",
      "Gender": "F",
      "Language": "",
      "Phone": "789",
      "Addr1": "MEMBER ADDR LN 1_20",
      "Addr2": "MEMBER ADDR LN 2_20",
      "City": "TIJERAS",
      "state": "NM",
      "zip": "87059",
      "country": "BERNALILLO",
      "territory": "CENTRAL",
      "subsa": "EAST MTN",
      "GEONAME": "TIJERAS",
      "desc": "Med Adv HMO     PHP",
      "pcpgroup": "PHP PCP TIN NAME_7",
      "pcpname": "PHP PCP NAME_11",
      "modified": "No",
      "audit": "Null",
      "birth_dt": ""
    },
    {
      "macro": "V",
      "facets": "MEMBER ID FACETS_11",
      "hicn": "MEMBER HICN_14",
      "mrn": "MEMBER MRN_5",
      "last_name": "MEMBER LAST NAME_3",
      "first_name": "MEMBER FIRST NAME_3",
      "Gender": "M",
      "Language": "",
      "Phone": "123",
      "Addr1": "MEMBER ADDR LN 1_3",
      "Addr2": "MEMBER ADDR LN 2_3",
      "City": "ALBUQUERQUE",
      "state": "NM",
      "zip": "87107",
      "country": "BERNALILLO",
      "territory": "CENTRAL",
      "subsa": "NORTHEAST",
      "GEONAME": "ALBUQUERQUE",
      "desc": "Med Adv HMO     PHP",
      "pcpgroup": "PHP PCP TIN NAME_11",
      "pcpname": "PHP PCP NAME_12",
      "modified": "No",
      "audit": "Null",
      "birth_dt": ""
    },
    {
      "macro": "V",
      "facets": "MEMBER ID FACETS_24",
      "hicn": "MEMBER HICN_7",
      "mrn": "MEMBER MRN_26",
      "last_name": "MEMBER LAST NAME_15",
      "first_name": "MEMBER FIRST NAME_17",
      "Gender": "F",
      "Language": "",
      "Phone": "456",
      "Addr1": "MEMBER ADDR LN 1_15",
      "Addr2": "MEMBER ADDR LN 2_15",
      "City": "PORTALES",
      "state": "NM",
      "zip": "88130",
      "country": "ROOSEVELT",
      "territory": "SOUTHEAST",
      "subsa": "OTHER",
      "GEONAME": "PORTALES",
      "desc": "Med Adv PPO     PIC",
      "pcpgroup": "PHP PCP TIN NAME_10",
      "pcpname": "PHP PCP NAME_16",
      "modified": "No",
      "audit": "Null",
      "birth_dt": ""
    },
    {
      "macro": "V",
      "facets": "MEMBER ID FACETS_1",
      "hicn": "MEMBER HICN_22",
      "mrn": "MEMBER MRN_4",
      "last_name": "MEMBER LAST NAME_1",
      "first_name": "MEMBER FIRST NAME_1",
      "Gender": "M",
      "Language": "English",
      "Phone": "789",
      "Addr1": "MEMBER ADDR LN 1_1",
      "Addr2": "MEMBER ADDR LN 2_1",
      "City": "ALBUQUERQUE",
      "state": "NM",
      "zip": "87114",
      "country": "BERNALILLO",
      "territory": "CENTRAL",
      "subsa": "WEST SIDE",
      "GEONAME": "ALBUQUERQUE",
      "desc": "Med Adv HMO     PHP",
      "pcpgroup": "PHP PCP TIN NAME_8",
      "pcpname": "PHP PCP NAME_4",
      "modified": "No",
      "audit": "Null",
      "birth_dt": ""
    },
    {
      "macro": "V",
      "facets": "MEMBER ID FACETS_25",
      "hicn": "MEMBER HICN_20",
      "mrn": "MEMBER MRN_25",
      "last_name": "MEMBER LAST NAME_16",
      "first_name": "MEMBER FIRST NAME_18",
      "Gender": "F",
      "Language": "",
      "Phone": "123",
      "Addr1": "MEMBER ADDR LN 1_16",
      "Addr2": "MEMBER ADDR LN 2_16",
      "City": "ALBUQUERQUE",
      "state": "NM",
      "zip": "87110",
      "country": "BERNALILLO",
      "territory": "CENTRAL",
      "subsa": "NORTHEAST",
      "GEONAME": "ALBUQUERQUE",
      "desc": "Med Adv HMO     PHP",
      "pcpgroup": "PHP PCP TIN NAME_11",
      "pcpname": "PHP PCP NAME_12",
      "modified": "No",
      "audit": "Null",
      "birth_dt": ""
    },
    {
      "macro": "V",
      "facets": "MEMBER ID FACETS_20",
      "hicn": "MEMBER HICN_1",
      "mrn": "MEMBER MRN_8",
      "last_name": "MEMBER LAST NAME_12",
      "first_name": "MEMBER FIRST NAME_13",
      "Gender": "M",
      "Language": "",
      "Phone": "456",
      "Addr1": "MEMBER ADDR LN 1_12",
      "Addr2": "MEMBER ADDR LN 2_12",
      "City": "TIJERAS",
      "state": "NM",
      "zip": "87059",
      "country": "BERNALILLO",
      "territory": "CENTRAL",
      "subsa": "EAST MTN",
      "GEONAME": "TIJERAS",
      "desc": "Med Adv HMO     PHP",
      "pcpgroup": "PHP PCP TIN NAME_2",
      "pcpname": "PHP PCP NAME_14",
      "modified": "No",
      "audit": "Null",
      "birth_dt": ""
    },
    {
      "macro": "V",
      "facets": "MEMBER ID FACETS_10",
      "hicn": "MEMBER HICN_2",
      "mrn": "MEMBER MRN_21",
      "last_name": "MEMBER LAST NAME_2",
      "first_name": "MEMBER FIRST NAME_2",
      "Gender": "M",
      "Language": "",
      "Phone": "789",
      "Addr1": "MEMBER ADDR LN 1_2",
      "Addr2": "MEMBER ADDR LN 2_2",
      "City": "RIO RANCHO",
      "state": "NM",
      "zip": "87144",
      "country": "SANDOVAL",
      "territory": "CENTRAL",
      "subsa": "WEST SIDE",
      "GEONAME": "RIO RANCHO",
      "desc": "Med Adv HMO     PHP",
      "pcpgroup": "PHP PCP TIN NAME_5",
      "pcpname": "PHP PCP NAME_3",
      "modified": "No",
      "audit": "Null",
      "birth_dt": ""
    },
    {
      "macro": "V",
      "facets": "MEMBER ID FACETS_17",
      "hicn": "MEMBER HICN_17",
      "mrn": "MEMBER MRN_9",
      "last_name": "MEMBER LAST NAME_8",
      "first_name": "MEMBER FIRST NAME_9",
      "Gender": "M",
      "Language": "",
      "Phone": "123",
      "Addr1": "MEMBER ADDR LN 1_8",
      "Addr2": "MEMBER ADDR LN 2_8",
      "City": "ALBUQUERQUE",
      "state": "NM",
      "zip": "87111",
      "country": "BERNALILLO",
      "territory": "CENTRAL",
      "subsa": "NORTHEAST",
      "GEONAME": "ALBUQUERQUE",
      "desc": "Med Adv HMO     PHP",
      "pcpgroup": "PHP PCP TIN NAME_9",
      "pcpname": "PHP PCP NAME_17",
      "modified": "No",
      "audit": "Null",
      "birth_dt": ""
    },
    {
      "macro": "V",
      "facets": "MEMBER ID FACETS_7",
      "hicn": "MEMBER HICN_10",
      "mrn": "MEMBER MRN_12",
      "last_name": "MEMBER LAST NAME_22",
      "first_name": "MEMBER FIRST NAME_24",
      "Gender": "F",
      "Language": "English",
      "Phone": "456",
      "Addr1": "MEMBER ADDR LN 1_22",
      "Addr2": "MEMBER ADDR LN 2_22",
      "City": "ALBUQUERQUE",
      "state": "NM",
      "zip": "87114",
      "country": "BERNALILLO",
      "territory": "CENTRAL",
      "subsa": "WEST SIDE",
      "GEONAME": "ALBUQUERQUE",
      "desc": "Med Adv HMO     PHP",
      "pcpgroup": "PHP PCP TIN NAME_8",
      "pcpname": "PHP PCP NAME_4",
      "modified": "No",
      "audit": "Null",
      "birth_dt": ""
    },
    {
      "macro": "V",
      "facets": "MEMBER ID FACETS_4",
      "hicn": "MEMBER HICN_18",
      "mrn": "MEMBER MRN_15",
      "last_name": "MEMBER LAST NAME_19",
      "first_name": "MEMBER FIRST NAME_21",
      "Gender": "M",
      "Language": "English",
      "Phone": "789",
      "Addr1": "MEMBER ADDR LN 1_19",
      "Addr2": "MEMBER ADDR LN 2_19",
      "City": "ALGODONES",
      "state": "NM",
      "zip": "87001",
      "country": "SANDOVAL",
      "territory": "CENTRAL",
      "subsa": "SANDOVAL OTHER",
      "GEONAME": "ALGODONES",
      "desc": "Medicare POS",
      "pcpgroup": "PHP PCP TIN NAME_1",
      "pcpname": "PHP PCP NAME_1",
      "modified": "No",
      "audit": "Null",
      "birth_dt": ""
    },
    {
      "macro": "V",
      "facets": "MEMBER ID FACETS_21",
      "hicn": "MEMBER HICN_25",
      "mrn": "MEMBER MRN_17",
      "last_name": "MEMBER LAST NAME_13",
      "first_name": "MEMBER FIRST NAME_14",
      "Gender": "F",
      "Language": "",
      "Phone": "123",
      "Addr1": "MEMBER ADDR LN 1_13",
      "Addr2": "MEMBER ADDR LN 2_13",
      "City": "ALBUQUERQUE",
      "state": "NM",
      "zip": "87105",
      "country": "BERNALILLO",
      "territory": "CENTRAL",
      "subsa": "SOUTHEAST",
      "GEONAME": "ALBUQUERQUE",
      "desc": "Med Adv HMO     PHP",
      "pcpgroup": "PHP PCP TIN NAME_6",
      "pcpname": "PHP PCP NAME_6",
      "modified": "No",
      "audit": "Null",
      "birth_dt": ""
    },
    {
      "macro": "V",
      "facets": "MEMBER ID FACETS_18",
      "hicn": "MEMBER HICN_26",
      "mrn": "MEMBER MRN_6",
      "last_name": "MEMBER LAST NAME_9",
      "first_name": "MEMBER FIRST NAME_10",
      "Gender": "F",
      "Language": "",
      "Phone": "456",
      "Addr1": "MEMBER ADDR LN 1_9",
      "Addr2": "MEMBER ADDR LN 2_9",
      "City": "ALBUQUERQUE",
      "state": "NM",
      "zip": "87104",
      "country": "BERNALILLO",
      "territory": "CENTRAL",
      "subsa": "SOUTHEAST",
      "GEONAME": "ALBUQUERQUE",
      "desc": "Medicare POS",
      "pcpgroup": "PHP PCP TIN NAME_10",
      "pcpname": "PHP PCP NAME_15",
      "modified": "No",
      "audit": "Null",
      "birth_dt": ""
    },
    {
      "macro": "V",
      "facets": "MEMBER ID FACETS_12",
      "hicn": "MEMBER HICN_24",
      "mrn": "MEMBER MRN_7",
      "last_name": "MEMBER LAST NAME_4",
      "first_name": "MEMBER FIRST NAME_4",
      "Gender": "F",
      "Language": "English",
      "Phone": "789",
      "Addr1": "MEMBER ADDR LN 1_4",
      "Addr2": "MEMBER ADDR LN 2_4",
      "City": "ALBUQUERQUE",
      "state": "NM",
      "zip": "87107",
      "country": "BERNALILLO",
      "territory": "CENTRAL",
      "subsa": "NORTHEAST",
      "GEONAME": "ALBUQUERQUE",
      "desc": "Med Adv HMO     PHP",
      "pcpgroup": "PHP PCP TIN NAME_8",
      "pcpname": "PHP PCP NAME_4",
      "modified": "No",
      "audit": "Null",
      "birth_dt": ""
    },
    {
      "macro": "V",
      "facets": "MEMBER ID FACETS_26",
      "hicn": "MEMBER HICN_3",
      "mrn": "MEMBER MRN_16",
      "last_name": "MEMBER LAST NAME_17",
      "first_name": "MEMBER FIRST NAME_19",
      "Gender": "F",
      "Language": "",
      "Phone": "123",
      "Addr1": "MEMBER ADDR LN 1_17",
      "Addr2": "MEMBER ADDR LN 2_17",
      "City": "CORRALES",
      "state": "NM",
      "zip": "87048",
      "country": "SANDOVAL",
      "territory": "CENTRAL",
      "subsa": "WEST SIDE",
      "GEONAME": "CORRALES",
      "desc": "Med Adv HMO     PHP",
      "pcpgroup": "PHP PCP TIN NAME_10",
      "pcpname": "PHP PCP NAME_15",
      "modified": "No",
      "audit": "Null",
      "birth_dt": ""
    },
    {
      "macro": "V",
      "facets": "MEMBER ID FACETS_6",
      "hicn": "MEMBER HICN_21",
      "mrn": "MEMBER MRN_13",
      "last_name": "MEMBER LAST NAME_21",
      "first_name": "MEMBER FIRST NAME_23",
      "Gender": "M",
      "Language": "",
      "Phone": "456",
      "Addr1": "MEMBER ADDR LN 1_21",
      "Addr2": "MEMBER ADDR LN 2_21",
      "City": "ALBUQUERQUE",
      "state": "NM",
      "zip": "87104",
      "country": "BERNALILLO",
      "territory": "CENTRAL",
      "subsa": "SOUTHEAST",
      "GEONAME": "ALBUQUERQUE",
      "desc": "Medicare POS",
      "pcpgroup": "PHP PCP TIN NAME_1",
      "pcpname": "PHP PCP NAME_1",
      "modified": "No",
      "audit": "Null",
      "birth_dt": ""
    },
    {
      "macro": "V",
      "facets": "MEMBER ID FACETS_15",
      "hicn": "MEMBER HICN_15",
      "mrn": "MEMBER MRN_3",
      "last_name": "MEMBER LAST NAME_6",
      "first_name": "MEMBER FIRST NAME_7",
      "Gender": "F",
      "Language": "",
      "Phone": "789",
      "Addr1": "MEMBER ADDR LN 1_6",
      "Addr2": "MEMBER ADDR LN 2_6",
      "City": "LOS LUNAS",
      "state": "NM",
      "zip": "87031",
      "country": "VALENCIA",
      "territory": "CENTRAL",
      "subsa": "VALENCIA NORTH",
      "GEONAME": "LOS LUNAS",
      "desc": "Med Adv HMO     PHP",
      "pcpgroup": "PHP PCP TIN NAME_4",
      "pcpname": "PHP PCP NAME_8",
      "modified": "No",
      "audit": "Null",
      "birth_dt": ""
    },
    {
      "macro": "V",
      "facets": "MEMBER ID FACETS_3",
      "hicn": "MEMBER HICN_23",
      "mrn": "MEMBER MRN_1",
      "last_name": "MEMBER LAST NAME_18",
      "first_name": "MEMBER FIRST NAME_20",
      "Gender": "F",
      "Language": "",
      "Phone": "123",
      "Addr1": "MEMBER ADDR LN 1_18",
      "Addr2": "MEMBER ADDR LN 2_18",
      "City": "BELEN",
      "state": "NM",
      "zip": "87002",
      "country": "VALENCIA",
      "territory": "CENTRAL",
      "subsa": "VALENCIA SOUTH",
      "GEONAME": "BELEN",
      "desc": "Medicare POS",
      "pcpgroup": "PHP PCP TIN NAME_1",
      "pcpname": "PHP PCP NAME_1",
      "modified": "No",
      "audit": "Null",
      "birth_dt": ""
    },
    {
      "macro": "V",
      "facets": "MEMBER ID FACETS_2",
      "hicn": "MEMBER HICN_12",
      "mrn": "MEMBER MRN_18",
      "last_name": "MEMBER LAST NAME_11",
      "first_name": "MEMBER FIRST NAME_12",
      "Gender": "M",
      "Language": "",
      "Phone": "456",
      "Addr1": "MEMBER ADDR LN 1_11",
      "Addr2": "MEMBER ADDR LN 2_11",
      "City": "BELEN",
      "state": "NM",
      "zip": "87002",
      "country": "VALENCIA",
      "territory": "CENTRAL",
      "subsa": "VALENCIA SOUTH",
      "GEONAME": "BELEN",
      "desc": "Medicare POS",
      "pcpgroup": "PHP PCP TIN NAME_1",
      "pcpname": "PHP PCP NAME_1",
      "modified": "No",
      "audit": "Null",
      "birth_dt": ""
    },
    {
      "macro": "V",
      "facets": "MEMBER ID FACETS_16",
      "hicn": "MEMBER HICN_19",
      "mrn": "MEMBER MRN_14",
      "last_name": "MEMBER LAST NAME_7",
      "first_name": "MEMBER FIRST NAME_8",
      "Gender": "M",
      "Language": "English",
      "Phone": "789",
      "Addr1": "MEMBER ADDR LN 1_7",
      "Addr2": "MEMBER ADDR LN 2_7",
      "City": "EDGEWOOD",
      "state": "NM",
      "zip": "87015",
      "country": "SANTA FE",
      "territory": "NORTHEAST",
      "subsa": "EAST MTN",
      "GEONAME": "EDGEWOOD",
      "desc": "Med Adv HMO     PHP",
      "pcpgroup": "PHP PCP TIN NAME_3",
      "pcpname": "PHP PCP NAME_10",
      "modified": "No",
      "audit": "Null",
      "birth_dt": ""
    },
    {
      "macro": "V",
      "facets": "MEMBER ID FACETS_13",
      "hicn": "MEMBER HICN_16",
      "mrn": "MEMBER MRN_20",
      "last_name": "MEMBER LAST NAME_5",
      "first_name": "MEMBER FIRST NAME_5",
      "Gender": "M",
      "Language": "",
      "Phone": "123",
      "Addr1": "MEMBER ADDR LN 1_5",
      "Addr2": "MEMBER ADDR LN 2_5",
      "City": "RIO RANCHO",
      "state": "NM",
      "zip": "87124",
      "country": "SANDOVAL",
      "territory": "CENTRAL",
      "subsa": "WEST SIDE",
      "GEONAME": "RIO RANCHO",
      "desc": "Med Adv HMO     PHP",
      "pcpgroup": "PHP PCP TIN NAME_4",
      "pcpname": "PHP PCP NAME_9",
      "modified": "No",
      "audit": "Null",
      "birth_dt": ""
    },
    {
      "macro": "V",
      "facets": "MEMBER ID FACETS_14",
      "hicn": "MEMBER HICN_13",
      "mrn": "MEMBER MRN_2",
      "last_name": "MEMBER LAST NAME_5",
      "first_name": "MEMBER FIRST NAME_6",
      "Gender": "F",
      "Language": "English",
      "Phone": "456",
      "Addr1": "MEMBER ADDR LN 1_5",
      "Addr2": "MEMBER ADDR LN 2_5",
      "City": "RIO RANCHO",
      "state": "NM",
      "zip": "87124",
      "country": "SANDOVAL",
      "territory": "CENTRAL",
      "subsa": "WEST SIDE",
      "GEONAME": "RIO RANCHO",
      "desc": "Med Adv HMO     PHP",
      "pcpgroup": "PHP PCP TIN NAME_5",
      "pcpname": "PHP PCP NAME_5",
      "modified": "No",
      "audit": "Null",
      "birth_dt": ""
    }
  ]
}
