var resume = {
    Name: "Vetha Dharshilin V M",
    Email: "vedhadharshilin123@gamil.com",
    dob: "23-04-2002",
    Gender: "female",
    countryCode : "India",
    Languages_known: ["Tamil","English","Malayalm" ],
    Age: 22,
    grade: { 
        UG: "B.Sc IT",
        Cpga :"86%",
        HSC :"51%",
        SSLC : "85%" },
  };
  var count = Object.keys(resume);
  console.log(resume);
  // for loop
  for (var i = 0; i < count.length; i++) {
    console.log(resume[count[i]]);
  }
  
  // for in
  for (var keys in resume) {
    console.log(resume[keys]);
  }
  
  // for Of
  for (var i of count) {
    console.log(resume[i]);
  }
  
  // for each
  count.forEach(values);
  function values(item) {
    console.log(resume[item]);
  }