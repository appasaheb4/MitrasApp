import Config from "react-native-config";

//Colors  
var colors = {
  appColor: "#8848D2",
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
  appIcon: require( assetsImages + "logo.png" ),
  onBoarding: {
    img1: require( assetsImages + "onboarding1.png" ),
    img2: require( assetsImages + "onboarding1.png" ),
    img3: require( assetsImages + "onboarding1.png" ),
  },
  feed: {
    forCard: require( assetsImages + "forcard.png" ),
  }
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
