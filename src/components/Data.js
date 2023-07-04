// const techCompanies = [
//     { name: 'Google', id: 1, siteVisits: [1200, 1500, 900, 1100], revenue: 500000 },
//     { name: 'Apple', id: 2, siteVisits: [800, 1000, 700, 900], revenue: 600000 },
//     { name: 'Microsoft', id: 3, siteVisits: [1100, 1300, 1000, 1200], revenue: 700000 },
//     { name: 'Amazon', id: 4, siteVisits: [1500, 1800, 1700, 1600], revenue: 900000 },
//     { name: 'Facebook', id: 5, siteVisits: [2000, 2200, 1900, 2100], revenue: 800000 },
//     // Add more companies with site visits per month here
//     { name: 'IBM', id: 6, siteVisits: [900, 1000, 800, 950], revenue: 550000 },
//     { name: 'Intel', id: 7, siteVisits: [1000, 1200, 950, 1100], revenue: 650000 },
//     { name: 'Oracle', id: 8, siteVisits: [800, 900, 700, 850], revenue: 450000 },
//     { name: 'Cisco Systems', id: 9, siteVisits: [950, 1100, 900, 1000], revenue: 550000 },
//     { name: 'HP', id: 10, siteVisits: [850, 950, 800, 900], revenue: 400000 },
//     { name: 'Dell Technologies', id: 11, siteVisits: [1200, 1400, 1100, 1300], revenue: 750000 },
//     { name: 'Twitter', id: 12, siteVisits: [700, 800, 650, 750], revenue: 350000 },
//     { name: 'Netflix', id: 13, siteVisits: [1800, 2000, 1700, 1900], revenue: 850000 },
//     { name: 'Salesforce', id: 14, siteVisits: [1000, 1200, 950, 1100], revenue: 650000 },
//     { name: 'Adobe', id: 15, siteVisits: [950, 1050, 900, 1000], revenue: 500000 },
//     { name: 'Sony', id: 16, siteVisits: [850, 950, 800, 900], revenue: 450000 },
//     { name: 'Samsung Electronics', id: 17, siteVisits: [1400, 1600, 1300, 1500], revenue: 900000 },
//     { name: 'Tesla', id: 18, siteVisits: [2000, 2200, 1900, 2100], revenue: 1200000 },
//     { name: 'Uber', id: 19, siteVisits: [1800, 2000, 1700, 1900], revenue: 1000000 },
//     { name: 'Airbnb', id: 20, siteVisits: [1600, 1800, 1500, 1700], revenue: 900000 },
//     { name: 'Snap', id: 21, siteVisits: [800, 900, 750, 850], revenue: 450000 },
//     { name: 'Spotify', id: 22, siteVisits: [1500, 1700, 1400, 1600], revenue: 800000 },
//     { name: 'Alibaba', id: 23, siteVisits: [1800, 2000, 1700, 1900], revenue: 950000 },
//     { name: 'Tencent', id: 24, siteVisits: [1900, 2100, 1800, 2000], revenue: 1100000 },
//     { name: 'Baidu', id: 25, siteVisits: [1000, 1200, 900, 1100], revenue: 600000 },
//     { name: 'WeChat', id: 26, siteVisits: [1600, 1800, 1500, 1700], revenue: 850000 },
//     { name: 'Nvidia', id: 27, siteVisits: [1200, 1400, 1100, 1300], revenue: 900000 },
//     { name: 'AMD', id: 28, siteVisits: [900, 1000, 850, 950], revenue: 550000 },
//     { name: 'Qualcomm', id: 29, siteVisits: [1100, 1300, 1000, 1200], revenue: 700000 },
//     { name: 'PayPal', id: 30, siteVisits: [800, 950, 750, 900], revenue: 450000 },
//     { name: 'Square', id: 31, siteVisits: [1000, 1200, 900, 1100], revenue: 600000 },
//     { name: 'Zoom', id: 32, siteVisits: [1500, 1800, 1400, 1700], revenue: 850000 },
//     { name: 'Slack', id: 33, siteVisits: [900, 1000, 800, 950], revenue: 550000 },
//     { name: 'Pinterest', id: 34, siteVisits: [800, 900, 750, 850], revenue: 450000 },
//     { name: 'Snapchat', id: 35, siteVisits: [1200, 1400, 1100, 1300], revenue: 750000 },
//     { name: 'IBM', id: 36, siteVisits: [950, 1100, 900, 1000], revenue: 550000 },
//     { name: 'VMware', id: 37, siteVisits: [1000, 1200, 950, 1100], revenue: 650000 },
//     { name: 'Intel', id: 38, siteVisits: [800, 900, 700, 850], revenue: 450000 },
//     { name: 'Qualcomm', id: 39, siteVisits: [950, 1100, 900, 1000], revenue: 550000 },
//     { name: 'Adobe', id: 40, siteVisits: [850, 950, 800, 900], revenue: 400000 },
//     { name: 'Cisco Systems', id: 41, siteVisits: [1200, 1400, 1100, 1300], revenue: 750000 },
//     { name: 'HP', id: 42, siteVisits: [700, 800, 650, 750], revenue: 350000 },
//     { name: 'Dell Technologies', id: 43, siteVisits: [1800, 2000, 1700, 1900], revenue: 850000 },
//     { name: 'Sony', id: 44, siteVisits: [1000, 1200, 950, 1100], revenue: 650000 },
//     { name: 'Samsung Electronics', id: 45, siteVisits: [950, 1050, 900, 1000], revenue: 500000 },
//     { name: 'Tesla', id: 46, siteVisits: [850, 950, 800, 900], revenue: 450000 },
//     { name: 'Uber', id: 47, siteVisits: [1400, 1600, 1300, 1500], revenue: 900000 },
//     { name: 'Airbnb', id: 48, siteVisits: [2000, 2200, 1900, 2100], revenue: 1200000 },
//     { name: 'Twitter', id: 49, siteVisits: [1800, 2000, 1700, 1900], revenue: 1000000 },
//     { name: 'Netflix', id: 50, siteVisits: [1600, 1800, 1500, 1700], revenue: 900000 },
//     // Add more companies with site visits per month here
//   ];
  
//   // Accessing the data:
//   console.log(techCompanies[0].name); // Output: "Google"
//   console.log(techCompanies[1].siteVisits); // Output: [800, 1000, 700, 900]
//   console.log(techCompanies[2].siteVisits[2]); // Output: 1000



  const techCompanies = [
    {
      name: 'Google',
      id: 1,
      siteVisits: [1200, 1500, 900, 1100],
      revenue: 500000,
      subscribers: 2000000,
      websiteTraffic: 5000000,
      ctr: 0.05,
      imageUrl: 'https://example.com/google.jpg'
    },
    {
      name: 'Apple',
      id: 2,
      siteVisits: [800, 1000, 700, 900],
      revenue: 600000,
      subscribers: 1500000,
      websiteTraffic: 4000000,
      ctr: 0.04,
      imageUrl: 'https://example.com/apple.jpg'
    },
    {
      name: 'Microsoft',
      id: 3,
      siteVisits: [1100, 1300, 1000, 1200],
      revenue: 700000,
      subscribers: 1800000,
      websiteTraffic: 4500000,
      ctr: 0.03,
      imageUrl: 'https://example.com/microsoft.jpg'
    },
    // Add more companies with dummy data here
  ];
  
  // Generating dummy data for additional 47 companies
  for (let i = 1; i <= 50; i++) {
    techCompanies.push({
      name: `Company ${i}`,
      id: i,
      siteVisits: [
        Math.floor(Math.random() * 2000) + 500,
        Math.floor(Math.random() * 2000) + 500,
        Math.floor(Math.random() * 2000) + 500,
        Math.floor(Math.random() * 2000) + 500,
      ],
      revenue: Math.floor(Math.random() * 1000000) + 500000,
      subscribers: Math.floor(Math.random() * 2000000) + 500000,
      websiteTraffic: Math.floor(Math.random() * 10000000) + 1000000,
      ctr: Math.random() * 0.05 + 0.01,
    //   imageUrl: `https://example.com/company${i}.jpg`,
    });
  }
  
  // Accessing the data:
  console.log(techCompanies[0].name); // Output: "Google"
  console.log(techCompanies[1].subscribers); // Output: 1500000
  console.log(techCompanies[2].ctr); // Output: 0.03
  console.log(techCompanies[3].imageUrl); 
  // Output: "https://example.com/microsoft.jpg"

  
  
  export default techCompanies
