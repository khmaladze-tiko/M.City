import React from "react";
import AdminLayout from "../../Hoc/AdminLayout";

const Dashboard = (props) => {

    console.log(props)

    return(
        <AdminLayout title="Dashboard">
            <div className="user_dashboard">
                This is your dashboard
            </div>
        </AdminLayout>
    )
}

export default Dashboard;