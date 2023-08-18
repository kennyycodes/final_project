/**
 * @TODO replace the firebaseConfig object below with the one 
 * provided for you by firebase after creating your project!
*/
const firebaseConfig = {
  apiKey: "AIzaSyAFRNs1TrspzrD3KUPGUzB-Uoc7YGtV9Pg",
  authDomain: "college-recommender-4681b.firebaseapp.com",
  databaseURL: "https://college-recommender-4681b-default-rtdb.firebaseio.com",
  projectId: "college-recommender-4681b",
  storageBucket: "college-recommender-4681b.appspot.com",
  messagingSenderId: "538807217554",
  appId: "1:538807217554:web:24ec6f9a2fbdbd857ae54b",
  measurementId: "G-CT5DCR42XF"
};

// initialize the firebase app with this built-in function
firebase.initializeApp(firebaseConfig);

// //https://public.opendatasoft.com/api/records/1.0/search/?dataset=us-colleges-and-universities&q=&rows=6559&facet=city&facet=state
// let x = [{
//   "geo_point_2d": { "lon": -122.67453292999994, "lat": 45.48038428000007 },
//   "geo_shape":
//   {
//     "type": "Feature",
//     "geometry":
//     {
//       "coordinates":
//         [-122.67453292999994, 45.48038428000007],
//       "type": "Point"
//     },
//     "properties": {}
//   },
//   "objectid": "16",
//   "ipedsid": "443599",
//   "name": "AMERICAN COLLEGE OF HEALTHCARE SCIENCES",
//   "address": "5005 S. MACADAM AVE",
//   "city": "PORTLAND",
//   "state": "OR",
//   "zip": "97239",
//   "zip4": "NOT AVAILABLE",
//   "telephone": "(503) 244-0726 EXT 103",
//   "type": "3",
//   "status": "A",
//   "population": "920",
//   "county": "MULTNOMAH",
//   "countyfips": "41051",
//   "country": "USA",
//   "latitude": "45.48038428000007",
//   "longitude": "-122.67453292999994",
//   "naics_code": "611420",
//   "naics_desc": "COMPUTER TRAINING", 
//   "source": "https://nces.ed.gov/collegenavigator/?id=443599", 
//   "sourcedate": "2013-11-04T00:00:00Z", 
//   "val_method": "IMAGERY/OTHER",
//    "val_date": "2015-10-29T00:00:00Z", 
//    "website": "www.achs.edu/", 
//    "stfips": "41", 
//    "cofips": "051", 
//    "sector": "3", 
//    "level": "3", 
//    "hi_offer": "20",
//     "deg_grant": "1",
//      "locale": "11",
//       "close_date": "-2",
//        "merge_id": "-2", 
//        "alias": "NOT AVAILABLE", 
//        "size_set": "26", 
//        "inst_size": "1", 
//        "pt_enroll": "692", 
//        "ft_enroll": "164", 
//        "tot_enroll": "856", 
//        "housing": "2", 
//        "dorm_cap": "-999", 
//        "tot_emp": "64", 
//        "shelter_id": "NOT AVAILABLE"
// }];