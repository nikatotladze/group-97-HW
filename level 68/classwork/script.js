
const baseInfo = {
  name: "ანი",
  email: "ani@example.com"
};

const additionalInfo = {
  role: "admin",
  status: "active"
};


const userProfile = Object.assign({}, baseInfo, additionalInfo);


for (const key in userProfile) {
  console.log(`${key}: ${userProfile[key]}`);
}

