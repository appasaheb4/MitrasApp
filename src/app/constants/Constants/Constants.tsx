import Config from "react-native-config";
import { Platform } from "react-native";


//Colors  
var colors = {
  appColor: "#2595D6",
  tabbarActiveColor: "#2D71B6",
  black: "#000000",
  white: "#FFFFFF",
  Saving: "#E6A620",
  Secure: "#30A2F3",
  Vault: "#679F37",
  Joint: "#660000",
  placeholder: "#5F5F5F"
};


const assetsImages = "../../../assets/images/";
var images = {
  // appBackgound: require( assetsImages + "icon/mainBackgoundImage.png" ),
  // appIcon: require( assetsImages + "appLogo.png" ),
};


//Local Database
var localDB = {
  dbName: Config.DB_NAME,
  tableName: {
    tblUser: Config.DB_TBL_USER,
    tblWallet: Config.DB_TBL_WALLET,
    tblAccountType: Config.DB_TBL_ACCOUNTTYPE,
    tblAccount: Config.DB_TBL_ACCOUNT,
    tblTransaction: Config.DB_TBL_TRANSACTION,
    tblSSSDetails: Config.DB_TBL_SSSDETAILS,
    tblTrustedPartySSSDetails: Config.DB_TBL_TBLTRUSTEDPARTYSSSDETAILS
  }
};


var asyncStorageKeys = {
  rootViewController: "rootViewController",

}



export {
  localDB,
  colors,
  images,
  asyncStorageKeys
};
