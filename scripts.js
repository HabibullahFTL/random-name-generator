function fullName(first, last) {
    return `${first} ${last}`;
}
function dateFormat(stirngDate) {
    const monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const inputDate = new Date(stirngDate);
    const date = inputDate.getDate();
    const monthName = monthList[inputDate.getMonth()];
    const year = inputDate.getFullYear();
    return `${date} ${monthName} ${year}`;
}

function singleProfile() {
    let singleProShow = document.getElementById('single-profile');
    let selectGender = document.getElementById('select-gender').value;
    fetch(`https://randomuser.me/api/?gender=${selectGender}`)
        .then(res => res.json())
        .then(data => {
            const userDetails = data.results[0];
            const name = fullName(userDetails.name.first, userDetails.name.last);
            const gender = userDetails.gender;
            const dob = dateFormat(userDetails.dob.date);
            const email = userDetails.email;
            const country = userDetails.location.country;
            const city = userDetails.location.city;
            const state = userDetails.location.state;
            const street = userDetails.location.street;
            const postcode = userDetails.location.postcode;
            const phone = userDetails.phone;
            const picture = userDetails.picture.large;

            singleProShow.style.display = "block";
            singleProShow.innerHTML = `<div class="card-header">
            <h5 class="text-center">${name}</h5>
        </div>
        <div class="card-body">
            <div class="profile-picture">
                <img src="${picture}"
                    class="d-block m-auto rounded-circle img-thumbnail">
            </div>
            <div class="row">
                <div class="col-md-6">
                    <table class="table">
                        <tbody>
                            <tr>
                                <th colspan="2" class="text-center">Basic Information</th>
                            </tr>
                            <tr>
                                <th>Name</th>
                                <td>${name}</td>
                            </tr>
                            <tr>
                                <th>Gender</th>
                                <td>${gender}</td>
                            </tr>
                            <tr>
                                <th>Date of Birth</th>
                                <td>${dob}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>${email}</td>
                            </tr>
                            <tr>
                                <th>Phone Number</th>
                                <td>${phone}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="col-md-6">
                    <table class="table">
                        <tbody>
                            <tr>
                                <th colspan="2" class="text-center">Address</th>
                            </tr>
                            <tr>
                                <th>Country</th>
                                <td>${country}</td>
                            </tr>
                            <tr>
                                <th>State</th>
                                <td>${state}</td>
                            </tr>
                            <tr>
                                <th>City</th>
                                <td>${city}</td>
                            </tr>
                            <tr>
                                <th>Street</th>
                                <td>${street.number}, ${street.name}</td>
                            </tr>
                            <tr>
                                <th>Post Code</th>
                                <td>${postcode}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>`
        })
}

function multipleProfile() {
    let selectGender = document.getElementById('multiple-select-gender').value;
    let profileCount = document.getElementById('multiple-select-count').value;
    let profiles = '';
    fetch(`https://randomuser.me/api/?gender=${selectGender}&results=${profileCount}`)
        .then(res => res.json())
        .then(data => {
            const userDetails = data.results;
            userDetails.forEach(user => {
                const name = fullName(user.name.first, user.name.last);
                const gender = user.gender;
                const dob = dateFormat(user.dob.date);
                const email = user.email;
                const country = user.location.country;
                const city = user.location.city;
                const state = user.location.state;
                const street = user.location.street;
                const postcode = user.location.postcode;
                const phone = user.phone;
                const picture = user.picture.large;
                profiles +=  `<div class="col">
                <div class="card h-100">
                  <div class="card-body">
                      <div class="img">
                          <img src="${picture}" class="d-block m-auto rounded-circle img-thumbnail">
                      </div>
                      <table class="table">
                          <tbody>
                              <tr>
                                  <th colspan="2" class="text-center">${name}</th>
                              </tr>
                              <tr>
                                  <th>Gender</th>
                                  <td>${gender}</td>
                              </tr>
                              <tr>
                                  <th>Date of Birth</th>
                                  <td>${dob}</td>
                              </tr>
                              <tr>
                                  <th>Email</th>
                                  <td>${email}</td>
                              </tr>
                              <tr>
                                  <th>Phone Number</th>
                                  <td>${phone}</td>
                              </tr>
                              <tr>
                                  <th>Address</th>
                                  <td>${street.number}, ${street.name}, ${city} - ${postcode}, ${state},${country}</td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
                </div>
              </div>`;
            });
            document.getElementById('multiple-profiles').innerHTML = profiles;
        });
        

}
