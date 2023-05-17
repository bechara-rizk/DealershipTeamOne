import React, { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebars";
import DashboardNavbar from "@/components/DashboardNavbar";
import { getFirestore, collection, getDocs, updateDoc, doc } from "firebase/firestore";
import { auth } from "../../../firebaseConfig";
import { FaSearch } from "react-icons/fa";

const fetchAllUserData = async () => {
  const db = getFirestore();
  const userCollectionRef = collection(db, "users");
  const querySnapshot = await getDocs(userCollectionRef);
  const userData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return userData;
};

function CustomerInfo() {
  const [userList, setUserList] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const users = await fetchAllUserData();
      setUserList(users);
    };
    fetchData();
  }, []);

  const handleEditClick = (user) => {
    setEditingUser(user);
  };

  const handleInputChange = (event, field) => {
    setEditingUser((prevUser) => ({
      ...prevUser,
      [field]: event.target.value,
    }));
  };

  const handleSaveClick = async () => {
    const db = getFirestore();
    const userDocRef = doc(db, "users", editingUser.id);
    const updatedUserData = {
      firstName: editingUser.firstName,
      lastName: editingUser.lastName,
      email: editingUser.email,
      number: editingUser.number,
    };
    await updateDoc(userDocRef, updatedUserData);
    setEditingUser(null);
    fetchAllUserData().then(setUserList);
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUserList = userList.filter((user) =>
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.number.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <DashboardNavbar />
      <Sidebar />
      <div className="sales-info-page">
        <h1 className="sales-info-heading">Customer Information</h1>
        <div className="search-container">

          <input
            className="search-input"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
          <FaSearch className="search-icon" />
        </div>


        <table className="sales-info-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {filteredUserList.map((user) => (
              <tr key={user.id}>
                <td>
                  {editingUser && editingUser.id === user.id ? (
                    <input
                      style={{ color: "black", width: "100px" }}
                      value={editingUser.firstName}
                      onChange={(event) => handleInputChange(event, "firstName")}
                    />
                  ) : (
                    user.firstName
                  )}
                </td>
                <td>
                  {editingUser && editingUser.id === user.id ? (
                    <input
                      style={{ color: "black", width: "100px" }}
                      value={editingUser.lastName}
                      onChange={(event) => handleInputChange(event, "lastName")}
                    />
                  ) : (
                    user.lastName
                  )}
                </td>
                <td>
                  {editingUser && editingUser.id === user.id ? (
                    <input
                      style={{ color: "black" }}
                      value={editingUser.email}
                      onChange={(event) => handleInputChange(event, "email")}
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td>
                  {editingUser && editingUser.id === user.id ? (
                    <input
                      style={{ color: "black", width: "100px" }}
                      value={editingUser.number}
                      onChange={(event) => handleInputChange(event, "number")}
                    />
                  ) : (
                    user.number
                  )}
                </td>
                <td>
                  {editingUser && editingUser.id === user.id ? (
                    <button onClick={handleSaveClick} className="sales-info-button">Save</button>
                  ) : (
                    <button onClick={() => handleEditClick(user)} className="sales-info-button">Edit</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CustomerInfo;