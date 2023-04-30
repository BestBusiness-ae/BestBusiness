import React, { useMemo, useEffect, useState } from "react";

import MaterialReactTable from "material-react-table";
import { getFirestore } from "firebase/firestore";
import { collection, query, getDocs } from "firebase/firestore";
import "react-datetime/css/react-datetime.css";
import { fireBaseApp } from "../../data/firebaseConstants";
import Datetime from "react-datetime";
const AdminDashBoard = () => {
  const [usersData, setUsersData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isLoading, setIsLoading] = useState();

  /**
 * @param {Date} preSelectedDate - The date
 
 */
  function getNewData(preSelectedDate) {
    setIsLoading(true);
    const db = getFirestore(fireBaseApp);
    var today = new Date();
    if (preSelectedDate !== undefined) {
      today = preSelectedDate;
    }
    console.log(today, "preSelectedDate");

    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + "/" + mm + "/" + yyyy;

    var temp = [];
    const q = query(
      collection(
        db,
        "usersData",
        "users",
        String(yyyy),
        String(yyyy),
        String(mm),
        String(mm),
        String(dd)
      )
    );

    try {
      getDocs(q).then((x) => {
        x.forEach((y) => {
          const d = y.data();

          const da = new Date(d.timeStamp);
          const plus0 = (num) => `0${num.toString()}`.slice(-2);
          const year = da.getFullYear();
          const monthTmp = da.getMonth() + 1;
          const month = plus0(monthTmp);
          const date = plus0(da.getDate());
          const hour = plus0(da.getHours());
          const minute = plus0(da.getMinutes());

          temp.push({
            email: d.email,
            message: d.message,
            name: d.name,
            reason: d.reason,
            date: `${date}/${month}/${year} ${hour}:${minute}`,
          });
        });

        setUsersData(temp);
        setIsLoading(false);

        // console.log("q",x)
        // const tempData = [];
        // x.forEach((doc) => {
      });
    } catch (e) {}
  }
  useEffect(() => {
    getNewData();
  }, []);

  const columns = useMemo(
    () => [
      {
        id: "employee",
        columns: [
          {
            accessorKey: "name",
            enableClickToCopy: true,
            header: "Name",
            size: 300,
          },
          {
            accessorKey: "email",
            enableClickToCopy: true,
            header: "Email",
            size: 300,
          },
          {
            accessorKey: "message",
            enableClickToCopy: true,
            header: "Message",
            size: 300,
          },
          {
            accessorKey: "reason",
            enableClickToCopy: true,
            header: "Reason",
            size: 300,
          },
          {
            accessorKey: "date",
            enableClickToCopy: true,
            header: "Date",
            size: 300,
          },
        ],
      },
    ],
    []
  );

  return (
    <div className="pt-10 pl-10 pr-10 pb-10">
      {/* <DatePicker
        selected={(date) => console.log(date)}
        onSelect={(date) => console.log(date)}
        onChange={(date) => console.log(date)} */}
      {/* /> */}
      {/* <DatePicker  onChange={(date) => {
        setSelectedDate(date)
        console.log(date)}} value={selectedDate} /> */}

      <div className="text-center text-lg-start  d-flex  justify-content-start align-items-center pb-10">
        <Datetime
          className="pr-10"
          value={selectedDate}
          dateFormat={"DD / MM / YYYY"}
          timeFormat={false}
          onChange={(date) => setSelectedDate(date)}
        />

        {isLoading === true ? (
          <button class="btn btn-primary" type="button" disabled>
            <span
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Fetching...
          </button>
        ) : (
          <button
            type="Login"
            className="btn btn-primary "
            onClick={() => {
              getNewData(new Date(selectedDate));
            }}
          >
            Fetch
          </button>
        )}
      </div>

      <MaterialReactTable
      
        columns={columns}
        data={usersData}
        enableColumnOrdering
        enablePinning
        initialState={{ showColumnFilters: true }}
        positionToolbarAlertBanner="bottom"
      />
    </div>
  );
};

export default AdminDashBoard;
