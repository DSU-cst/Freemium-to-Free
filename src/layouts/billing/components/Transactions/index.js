/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
// import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Billing page components
import Transaction from "layouts/billing/components/Transaction";

function Transactions() {
  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
        <SoftTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Your Transaction&apos;s
        </SoftTypography>
        <SoftBox display="flex" alignItems="flex-start">
          <SoftBox color="text" mr={0.5} lineHeight={0}>
            <Icon color="inherit" fontSize="small">
              date_range
            </Icon>
          </SoftBox>
          <SoftTypography variant="button" color="text" fontWeight="regular">
            23 - 30 March 2020
          </SoftTypography>
        </SoftBox>
      </SoftBox>
      <SoftBox pt={3} pb={2} px={2}>
        <SoftBox mb={2}>
          <SoftTypography
            variant="caption"
            color="text"
            fontWeight="bold"
            textTransform="uppercase"
          >
            newest
          </SoftTypography>
        </SoftBox>
        <SoftBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <Transaction
            color="success"
            icon="arrow_downward"
            name="Add Progress Track"
            description="27 March 2020, at 12:30 PM"
            value="- ₹ 2,500"
          />
          <Transaction
            color="error"
            icon="arrow_upward"
            name="Add Progress Track"
            description="27 March 2020, at 04:30 AM"
            value="+ ₹ 2,000"
          />
        </SoftBox>
        <SoftBox mt={1} mb={2}>
          <SoftTypography
            variant="caption"
            color="text"
            fontWeight="bold"
            textTransform="uppercase"
          >
            yesterday
          </SoftTypography>
        </SoftBox>
        <SoftBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <Transaction
            color="success"
            icon="arrow_upward"
            name="Stock Platform"
            description="26 March 2020, at 13:45 PM"
            value="+ ₹ 300000"
          />
          <Transaction
            color="success"
            icon="arrow_upward"
            name="Add the New Pricing Page"
            description="26 March 2020, at 12:30 PM"
            value="+ ₹ 30000"
          />
          <Transaction
            color="success"
            icon="arrow_upward"
            name="Redesign New Online Shop"
            description="26 March 2020, at 08:30 AM"
            value="+ ₹ 25000"
          />
          <Transaction
            color="dark"
            icon="priority_high"
            name="Launch our Mobile App"
            description="26 March 2020, at 05:00 AM"
            value="Pending"
          />
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

export default Transactions;
