import React from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { logout, getUser } from "../../lib/auth";

const AdminHeader = () => {
  const navigate = useNavigate();
  const user = getUser();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
        <p className="text-gray-600">
          Welcome, {user?.username || "Admin"}! Manage your website content
          here.
        </p>
      </div>
      <Button onClick={handleLogout} variant="outline">
        Logout
      </Button>
    </div>
  );
};

export default AdminHeader;
