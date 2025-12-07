import DashboardHome from "./DashboardHome";
import StudentSideBar from "./StudentSideBar";

const StudentDashboard = () => {
  return (
    <>
      <div className="container-fluid border border-2">
        <div className="row d-flex justify-content-center">
          <div className="col-2 p-0">
            <StudentSideBar />
            <DashboardHome/>
          </div>
          <div className="col-10 p-0"></div>
        </div>
      </div>
    </>
  );
};

export default StudentDashboard;
