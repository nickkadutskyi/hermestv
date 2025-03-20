declare global {
  interface Window {
    tizen: Tizen;
    webapis: Webapis;
    b2bapis: B2bapis;
  }

  interface B2bAPIException {
    code: number;
    message: string;
    name: string;
  }

  // TODO: Add all the types for Tizen
  interface Tizen {
    systeminfo: SystemInfoManager;
  }

  // TODO: Add all the types for Webapis
  interface Webapis {
    adinfo: AdInfoManager;
    appcommon: AppCommonManager;
    avinfo: AvInfoManager;
    avplaystore: AVPlayStoreManager;
    avplay: AVPlayManager;
    billing: BillingManager;
    network: NetworkManager;
    productinfo: ProductInfoManager;
    sso: SsoManager;
    systeminfo: SystemInfoManager;
    tvinfo: TvInfoManager;
    widgetdata: WidgetDataManager;
    WebAPIException: WebAPIException;
  }

  // TODO: Add all the types for B2bapis
  interface B2bapis {
    b2brtpplay: null;
    b2bcontrol: B2BControlManager;
    b2bdoc: null;
    b2bsyncplay: null;
    b2bbroadcast: null;
    b2bpower: null;
    cardreader: null;
    b2bhtvadminmenu: null;
    b2bbarcode: null;
    serialprint: null;
    serialport: null;
    paymentdownload: null;
    payment: null;
    magicinfo: null;
    B2bAPIException: B2BAPIException;
  }
}

export {};
