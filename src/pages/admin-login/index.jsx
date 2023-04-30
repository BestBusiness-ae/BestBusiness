import React, { useState } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { fireBaseApp } from "../../data/firebaseConstants";
import AdminDashBoard from "../../componets/adminDashBoard/index";



const AdminLogin = () => {
  const CurrentPages = {
    Login: "Login",
    DashBoard: "DashBoard",
  };
  const [currentPage, setCurrentPage] = useState(CurrentPages.Login);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  async function getAdminsData() {
    console.log("getAdminsData");
    const db = getFirestore(fireBaseApp);
    const q = query(collection(db, "adminUsers"));
    console.log("q", q);
    try {
      const querySnapshot = await getDocs(q);
      const tempAdmins = [];
      querySnapshot.forEach((doc) => {
        
        const username = doc.data().username;
        const password = doc.data().password;
        tempAdmins.push({ username, password });
      });

      checkValidAdmin(tempAdmins);
    } catch (e) {
      console.log(e);
    }

    
  }

  function checkValidAdmin(tempAdmins) {
    // tempAdmins.forEach((admin, index) => {
      for(var i=0;i<tempAdmins.length;i++){
      if (tempAdmins[i].username === username && tempAdmins[i].password === password) {
        setCurrentPage(CurrentPages.DashBoard);
        return;
      } else {
        alert("Password Not matching");
        return;
      }
    }
  }

  return (
    <>
      {currentPage === CurrentPages.Login ? (
        <section className="vh-80 vw-80 mt-100 pl-100 pr-100 ">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100 ">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
              <div className="col-md-5 col-lg-6 col-xl-4 offset-xl-1">
                <form>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control form-control-lg"
                      placeholder="Email"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="form-outline mb-3">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control form-control-lg"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="text-center text-lg-start pt-2">
                    <button
                      type="button"
                      className="btn btn-primary btn-lg"
                      onClick={getAdminsData}
                    >
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
        <AdminDashBoard/>
        </>
      )}
    </>
  );
};

export default AdminLogin;
