/* IMPORTS */
import React from "react";
import { Layout, Typography, Button } from "antd";
import styled from "styled-components/macro";
import DataTable from "../Table/Table";
// import { fetchData } from "../../api/api";
import { columnsData } from "../../columnsData";

/* CODE */
function App() {
  const [data, setData] = React.useState(null);
  const [display, setDisplay] = React.useState(false);

  const handleClick = () => {
    setDisplay(true);
    // fetchData().then((data) => setData(data));
    setData([
      {
        id: 1,
        first_name: "Michaelina",
        last_name: "Scolland",
        email: "mscolland0@ebay.com",
        gender: "Male",
        car: "Subaru",
        car_color: "Maroon",
      },
      {
        id: 2,
        first_name: "Hanson",
        last_name: "Fawson",
        email: "hfawson1@mysql.com",
        gender: "Female",
        car: "Buick",
        car_color: "Violet",
      },
      {
        id: 3,
        first_name: "Kalina",
        last_name: "Odell",
        email: "kodell2@infoseek.co.jp",
        gender: "Non-binary",
        car: "Nissan",
        car_color: "Indigo",
      },
      {
        id: 4,
        first_name: "Jobyna",
        last_name: "Crucitti",
        email: "jcrucitti3@canalblog.com",
        gender: "Non-binary",
        car: "Nissan",
        car_color: "Yellow",
      },
      {
        id: 5,
        first_name: "Paolina",
        last_name: "Jerzyk",
        email: "pjerzyk4@parallels.com",
        gender: "Male",
        car: "Toyota",
        car_color: "Turquoise",
      },
      {
        id: 6,
        first_name: "Dulci",
        last_name: "Spanton",
        email: "dspanton5@moonfruit.com",
        gender: "Non-binary",
        car: "Chrysler",
        car_color: "Orange",
      },
      {
        id: 7,
        first_name: "Margaret",
        last_name: "Aldersea",
        email: "maldersea6@weebly.com",
        gender: "Agender",
        car: "Jeep",
        car_color: "Maroon",
      },
      {
        id: 8,
        first_name: "Celle",
        last_name: "Rehorek",
        email: "crehorek7@stanford.edu",
        gender: "Non-binary",
        car: "Mitsubishi",
        car_color: "Goldenrod",
      },
      {
        id: 9,
        first_name: "Berkly",
        last_name: "Chippindale",
        email: "bchippindale8@youtu.be",
        gender: "Non-binary",
        car: "Toyota",
        car_color: "Khaki",
      },
      {
        id: 10,
        first_name: "Arty",
        last_name: "Cordon",
        email: "acordon9@biglobe.ne.jp",
        gender: "Bigender",
        car: "Pontiac",
        car_color: "Red",
      },
      {
        id: 11,
        first_name: "Josy",
        last_name: "Davidovicz",
        email: "jdavidovicza@sina.com.cn",
        gender: "Genderqueer",
        car: "Lincoln",
        car_color: "Pink",
      },
      {
        id: 12,
        first_name: "Layney",
        last_name: "Milington",
        email: "lmilingtonb@arstechnica.com",
        gender: "Genderfluid",
        car: "Nissan",
        car_color: "Indigo",
      },
      {
        id: 13,
        first_name: "Ardelis",
        last_name: "Dinsdale",
        email: "adinsdalec@washingtonpost.com",
        gender: "Agender",
        car: "Mazda",
        car_color: "Blue",
      },
      {
        id: 14,
        first_name: "Brande",
        last_name: "Kerrane",
        email: "bkerraned@zimbio.com",
        gender: "Bigender",
        car: "Acura",
        car_color: "Red",
      },
      {
        id: 15,
        first_name: "Vin",
        last_name: "Closs",
        email: "vclosse@nifty.com",
        gender: "Agender",
        car: "Dodge",
        car_color: "Yellow",
      },
    ]);
  };

  return (
    <Wrapper theme="light">
      <TitleBar>
        <Typography.Title level={2} style={{ color: "#272343" }}>
          Deploying Static Web Apps with Amazon S3 & CloudFront
        </Typography.Title>
      </TitleBar>
      <MainContent>
        {display === true ? (
          <DataTable data={data} columns={columnsData} />
        ) : (
          <StyledButton type="primary" onClick={handleClick}>
            Generate Data Table
          </StyledButton>
        )}
      </MainContent>
      <SiteFooter>
        <Typography.Title level={5} style={{ color: "#272343" }}>
          Workshop by Sandeep Kumar P
        </Typography.Title>
      </SiteFooter>
    </Wrapper>
  );
}

/* STYLES */
const { Header, Content } = Layout;

const Wrapper = styled(Layout)`
  height: 100vh;
`;

const TitleBar = styled(Header)`
  padding: 16px 0;
  text-align: center;
  background: #fafafa;
  color: #ffffff;
`;

const MainContent = styled(Content)`
  display: flex;
  flex-direction: column;
  padding: 32px 64px;
  background: #fafafa;
`;

const SiteFooter = styled.footer`
  padding: 16px;
  text-align: center;
  background: #fafafa;
`;

const StyledButton = styled(Button)`
  width: max-content;
  align-self: center;
  margin-bottom: 32px;
`;

export default App;
