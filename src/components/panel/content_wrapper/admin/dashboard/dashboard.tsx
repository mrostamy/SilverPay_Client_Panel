import { decodeToken } from "react-jwt";
import { AuthService } from "../../../../../services/auth/auth_service";
import { Test } from "../easyPay/test";

const Dashboard = (props: any) => {


  const authService = new AuthService();

  const myDecodedToken = decodeToken<any>(localStorage.getItem("token") || "")


  // const logoutHandler = () => {

  //   if (authService.logout()) {
  //     nav("/auth/login")
  //     toast.success("logout successfully", { theme: "colored" })
  //   }
  // }

  var data = {
    labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
    series: [
      [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
    ]
  };

  var options = {
    high: 10,
    low: -10,
    axisX: {
      labelInterpolationFnc: function (value: any, index: any) {
        return index % 2 === 0 ? value : null;
      }
    }
  };

  // var chart=new LineChart("",data)

  //#region test

  //#endregion

  return (
    <>
      <p>shsshs</p>
      <Test />
    </>
  )
}

export default Dashboard

