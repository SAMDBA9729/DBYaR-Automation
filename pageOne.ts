import * as constData from "../resource/uiTestData/uiTestData.json";
const pageOne = {
    // define elements for login page

    user_name: 'input[formcontrolname="userName"]',
    password: 'input[formcontrolname="password"]',
    login_button: 'button[class="btn loginPageButton"]',
    loginSuccess: '[class="ng-tns-c1-13 toast-message ng-star-inserted"]',
    userNameError: 'div[aria-label="Invalid User Name"]',
    passError: 'div[aria-label="Invalid Password"]',

    // define elements for logout option

    //logout_button1: 'button[type="button"]',
    // logout_drop: 'button[class="btn btn-sm dropdown-toggle text-light p-0 mx-1 show"]',
    //logout_drop: 'button[class^="btn btn-sm dropdown-toggle "]',
    // logout_drop1: '//button[contains(text(),"Anshika Mishra")]',
    logout_drop1: '//button[contains(text(),"Austin")]',
    logout_drop2: '//button[contains(text(), constData.logOut.name )]',
    logoutDropDown: '[class="btn btn-sm dropdown-toggle text-light p-0 mx-1 show"]',
    logoutDrop: '.btn.btn-sm.dropdown-toggle.text-light.p-0.mx-1.show',
    logoutButton: "button[class='dropdown-item text-17']",
    logout_click: 'Logout',

    // define elements for Hub Registration option
    dashBoard: '#dBoardDiv > div > .align-items-center',
    hUbResiter_button: '//div[contains(text(), "Hub Registration")]',//'button', { name: 'Hub Registration' }
    newRegister: '//button[contains(text(), " + Register Hub ")]',
    // huBName:'input[formcontrolname="organizationName"]',//'input[placeholder="Enter Hub Name"]',
    huBName: '//input[@placeholder="Enter Hub Name"]',
    span: 'a span',
    hubNameDropdown: 'select[formcontrolname="typeOfInstitute"]',
    yearofEstablishment: 'select[formcontrolname="yearOfEstablishment"]',
    visionName: 'textarea[placeholder="Enter Vision"]',
    mission: 'textarea[formcontrolname="mission"]',
    contactNo: 'input[placeholder="Enter Office Contact Number"]',
    personInchargeDrop: '#button-addon',
    empValue: '#staticBackdropModalHubRegistration > div > div > div.modal-body.modalBackground > div > div.table-responsive-md.table-responsive-lg > table > tbody > tr:nth-child(1) > td:nth-child(1)',
    address: 'input[formcontrolname="street"]',
    pincode: 'input[formcontrolname="pincode"]',
    doneButton: 'button[id="button-addon2"]',
    placeDropDown: 'select[formcontrolname="place"]',
    // emailId: 'label[id="emailId"]',
    emailId: 'input[id="emailId"]',
    attachmentTab: "div[class='mat-step-label'] div[class='mat-step-text-label ng-star-inserted']",
    nextButton: 'span[class="mdc-button__label"]',
    attaChment: "a[href='javascript:void(0)']",
    upLoad: 'input[type="file"]',
    preview: "button[class='btn btn-sm preview-button preview-text roboto-font ms-1 me-1']",
    download: 'i[class="fa fa-download"]',
    submit: '.btn.btn-sm.submit-button.roboto-font.text-17.ms-1',
    //Notification Messages
    success: '.toast-message[aria-label="Hub Registered Successfully"]',
    Failure: 'div[role="alert"][aria-label="Hub already exists"].ng-tns-c1-4.toast-message.ng-star-inserted',
    //hubdropdown, area dropdown and year dropdown
    institutionType: 'select[formcontrolname="typeOfInstitute"]',
    //Hub Registration form page elements and Notification messages
    enterHubName: "p[class='ng-star-inserted']",
    personInchargeMsg: "p[class='text-danger']",
    successMsg: "div[aria-label='Hub Registered Successfully']",
    alreadyExist: "div[aria-label='Hub already exists']",
    addressFetched: "div[aria-label='Address Fetched']",
    //staff Registration
    staffRegistration: 'div.font-weight-500[_ngcontent-ark-c48]',
    registerStaffButton: 'button.btn.btn-sm.submit-button.roboto-font.text-17.ms-1.ng-star-inserted',
    memberType: '//div[@class="overSelect"]',
     
    fullNameInput: 'input[placeholder="Enter Full Name"][_ngcontent-kdh-c56]',
    mobileNumberInput: '[placeholder="Enter Mobile Number"]',
    personalEmailInput: '[placeholder="Enter Personal Email"]',
    submitButton: 'button[class="btn btn-sm submit-button roboto-font text-17 ms-1"]',
    fullname: '[placeholder="Enter Full Name"]',
    successMessageSelector: '[class="toast-top-right toast-container"]',
    errorMessageSelector: '[class="toast-top-right toast-container"]',



}
export default { pageOne }

