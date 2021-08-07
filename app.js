function getELement(id) {
  return document.getElementById(id);
}
function add() {
  let data = {
    firstname: getELement("firstname").value,
    lastname: getELement("lastname").value,
    address: getELement("address").value,
    city: getELement("city").value,
    province: getELement("province").value,
    postal: getELement("postal").value,
    phone: getELement("phone").value,
    mail: getELement("mail").value,
    notes: getELement("notes").value,
  };

  //checking if error exists
  let status = false;

  // check for phone
  const phone_no = data.phone + "";
  if (phone_no[0] < 6 || phone_no.length != 10) {
    alert("Enter a valid phone number");
    status = true;
  }
  // check for postal
  const postal_code = data.postal + "";
  if (postal_code.length != 6) {
    alert("Postal code should be of length 6");
    status = true;
  }

  if (status == true) {
    console.log("Invalid entries!");
    alert("check entries before submitting");
  } else {
    if (localStorage.length) {
      console.log("localstorage present");
      let arr = JSON.parse(localStorage.getItem("formData"));
      arr.push(data);
      localStorage.setItem("formData", JSON.stringify(arr));
      alert("Saved!");
    } else {
      console.log("creating new storage");
      localStorage.setItem("formData", JSON.stringify([data]));
      alert("Saved!");
    }
  }
}

function loadData() {
  try {
    console.log("Fetching Data...");
    let show = getELement("show");
    let data = JSON.parse(localStorage.getItem("formData"));

    for (const row of data) {
      let tr = document.createElement("tr");
      for (const key in row) {
        let td = document.createElement("td");
        td.innerHTML = row[key];
        tr.appendChild(td);
      }
      show.appendChild(tr);
    }
  } catch {
    console.log("no localstorage object found");
  }
}
