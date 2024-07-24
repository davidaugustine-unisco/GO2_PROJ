import ChartComponent from "@/components/chart";

const Dashboard: React.FC = () => {
  return (
    <div style={{width: "100%", height: "100%" }}>
      <div>
        <p>Dashboard</p>
      </div>
      <div style={{ width: "80%", height: "50%" }}>
        <ChartComponent
          apiUrl="https://66a063217053166bcabb4d1f.mockapi.io/packages"
          chartTitle="Number of Packages Scanned"
        />
      </div>
      </div>
  );
};

export default Dashboard;
