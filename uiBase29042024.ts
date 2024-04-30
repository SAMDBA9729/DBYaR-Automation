import { readExcel } from "./macro";
import { expect } from "@playwright/test";
import { elementFactoryUtils } from "../utils/uiElementFactoryModule";
import * as testData from "../resource/uiTestData/uiTestData.json";
import * as personJsonData from "../resource/Test Data/userData.json";
import * as path from 'path';
import * as xlsx from 'xlsx';
import { generateRandomPhoneNumber, getRandomTestData, generateRandomHubData } from "./randomData";
import { TIMEOUT } from "dns";

const adminPage = elementFactoryUtils.admin.pageOne;
const homePage = elementFactoryUtils.home.pageTwo;
type PersonData = {
    Full_Name: string;
    Contact_No: string;
    Email: string;
};


// Function for reading the data from the excel file and convert it to JSON
// function readExcel(filePath: string, sheetName: string) {
//     const workbook = xlsx.readFile(filePath);
//     const sheet = workbook.Sheets[sheetName];
//     const jsonData = xlsx.utils.sheet_to_json(sheet, { defval: "" });
//     return jsonData;
// }

//const constants = {
   // randomPhone: generateRandomPhoneNumber()
//};

// Use the readExcel function
const excelPath = path.resolve('C:\\Users\\Sambit Nayak\\Desktop\\PlayWright_Automation\\FreshFramework-06032024\\FreshFramework\\nilgiri\\upload\\TestData.xlsx');
const excelTestData = readExcel(excelPath, 'LoginPayLoad');
//const personInchargeExcel = readExcel(excelPath, 'Person_Incharge');

 //creating const for person incharge
 const personData = personJsonData.userData;

 interface NavigationParams {
    page?: any;
    url?: string;
}


const applicationHome = {
    async validateHomePage({ page, url }: NavigationParams): Promise<void> {
        await page.setViewportSize({ width: 1280, height: 720 });
        await page.goto(url, { waitUntil: 'networkidle', timeout: 100000 });
    },

    async validatemenuItems({ page }: NavigationParams): Promise<void> {
        const menuItems = await this.assertMenu({ page });
        await expect(await page.locator(homePage.homePageMenu)).not.toHaveCount(0);
        for (let i = 0; i <= menuItems.length; i++) {
            expect(await menuItems[i].isVisible()).toBeTruthy();
        }
    },

    async loginPage({ page, url }: NavigationParams): Promise<void> {
        const loginData = getRandomTestData(excelTestData);
        
        // Fill in the login form
        await page.fill(adminPage.user_name, loginData.username);
        await page.fill(adminPage.password, loginData.password);
        
        // Click the submit button
        await page.click(adminPage.login_button);
        
        // Wait for the navigation to complete
        await page.waitForNavigation();
        
        // Check if login was successful
        if (await page.isVisible(adminPage.loginSuccess)) {
            const loginSuccessMessage = await page.locator(adminPage.loginSuccess).innerText();
            console.log('Login successful.', loginSuccessMessage);
            console.log("Exiting the test");
            return; // Exit the function
        }
        else if (await page.isVisible(adminPage.userNameError)) {
            const invalidUserSelector = await page.locator(adminPage.userNameError).innerText();
            console.log('Invalid Username', invalidUserSelector);
            console.error("Enter Valid UserName ", invalidUserSelector);
            console.log("Exiting the test");
            return; // Exit the function
        }
        else if (await page.isVisible(adminPage.passError)) {
            const invalidPassSelector = await page.locator(adminPage.passError).innerText();
            console.log('Invalid Password', invalidPassSelector);
            console.error("Enter Valid Password ", invalidPassSelector);
            console.log("Exiting the test");
            return; // Exit the function
        }
       

        // await page.fill(adminPage.user_name, loginData.username);
        // await page.fill(adminPage.password, loginData.password);
        // await page.click(adminPage.login_button);
        // await page.waitForTimeout(5000);
        // if (await page.isVisible(adminPage.loginSuccess)) {
        //     const loginSuccessMessage = await page.locator(adminPage.loginSuccess).innerText();
        //     console.log('Login successful.', loginSuccessMessage);
        // } else if (await page.isVisible(adminPage.userNameError)) {
        //     const invalidUserSelector = await page.locator(adminPage.userNameError).innerText();
        //     console.log('Invalid Username', invalidUserSelector);
        // } else if (await page.isVisible(adminPage.passError)) {
        //     const invalidPassSelector = await page.locator(adminPage.passError).innerText();
        //     console.log('Invalid Password', invalidPassSelector);
        // }
        // await page.screenshot({ path: 'C:\\Users\\Sambit Nayak\\Desktop\\PlayWright_Automation\\FreshFramework-06032024\\FreshFramework\\nilgiri\\Screenshots\\screenshot.png' }); // Adjust the path as needed
        // //..................................................................................................
        // if (await page.isVisible(adminPage.loginSuccess)) {
        //     const loginSuccessMessage = await page.locator(adminPage.loginSuccess).innerText();
        //     console.log('Login successful.', loginSuccessMessage);
        //     ////console.error("Mandatory: ", enterHubNameMsg);
        //     console.log("exiting the test");
        //     // Gracefully exit the test if the specified condition satisfies
        //     return; // Exit the function
        // }
        // else if(await page.isVisible(adminPage.userNameError)){
        //     const invalidUserSelector = await page.locator(adminPage.userNameError).innerText();
        //     console.log('Invalid Username', invalidUserSelector);
        //     console.error("Enter Valid UserName ", invalidUserSelector);
        //     console.log("exiting the test");
        //      // Gracefully exit the test if the specified condition satisfies
        //      return; // Exit the function
        // }
        //  else if(await page.isVisible(adminPage.passError)){
        //         const invalidPassSelector = await page.locator(adminPage.passError).innerText();
        //         console.log('Invalid Password', invalidPassSelector);
        //         console.error("Enter Valid Password ", invalidPassSelector);
        //         console.log("exiting the test");
        //          // Gracefully exit the test if the specified condition satisfies
        //          return; // Exit the function
        //...............................................................................................
        //await page.pause();
        // Wait for elements that indicate invalid credentials
        // const successMessageSelector = adminPage.successPopup;
        // const invalidUserSelector = adminPage.userNameError;
        // const invalidPasswordSelector = adminPage.passError;

        
    
        // await Promise.race([
        //     page.waitForSelector(successMessageSelector, { timeout: 5000 }).catch(() => {}),
        //     page.waitForSelector(invalidUserSelector, { timeout: 5000 }).catch(() => {}),
        //     page.waitForSelector(invalidPasswordSelector, { timeout: 5000 }).catch(() => {})
        // ]);
        
        // if (await page.isVisible(adminPage.loginSuccess)) {
        //     //await page.timeout(5000);
        //     //await page.pause();
        //     const loginSuccessMessage = await page.locator(adminPage.loginSuccess).innerText();
        //     console.log('Login successful.', loginSuccessMessage);
        //     //page.on('console',loginSuccessMessage);
        // }
        // else if (await page.isVisible(adminPage.userNameError)) {
        //     const invalidUserSelector = await page.locator(adminPage.userNameError).innerText();
        //     console.log('Invalid Username',invalidUserSelector);
        // }
        // else (await page.isVisible(adminPage.passError)); {
        //     const invalidPassSelector = await page.locator(adminPage.passError).innerText();
        //     console.log('Invalid Username',invalidPassSelector);
        // }
        
            //await page.screenshot({ path: 'path_to_save\\success-login.png' });
            //await page.close();
            //return; // Exit the function early
    
        // if (await page.isVisible(invalidUserSelector)) {
        //     console.log("Invalid user error occurred.");
        //     //await page.screenshot({ path: 'path_to_save\\invalid-user.png' });
        //     await page.close();
        //     return; // Exit the function early
        // }
    
        // if (await page.isVisible(invalidPasswordSelector)) {
        //     console.log("Invalid password error occurred.");
        //     //await page.screenshot({ path: 'path_to_save\\invalid-password.png' });
        //     await page.close();
        //     return; // Exit the function early
        // }
        await page.waitForLoadState('domcontentloaded');
    },

    async logOut({ page, url }: NavigationParams): Promise<void> {
        await page.locator(adminPage.logout_drop1).click();
        await expect(page.locator(adminPage.logout_drop1)).toBeVisible();
        await page.getByText(testData.logOut.logout).click();
        await expect(page).toHaveURL(testData.logOut.logOutAssert);
    },

    async hubRegistration({ page, url }: NavigationParams): Promise<void> {
        const registrationData = generateRandomHubData();
        const pincodeData = getRandomTestData(testData.hubRegisterData);
        
        //Navigate to Hub Registration
        await page.locator(adminPage.dashBoard).click();
        await page.locator(adminPage.hUbResiter_button).click();
        await page.locator(adminPage.newRegister).click();
        
        

        const hubNameInputSelector = 'input[placeholder="Enter Hub Name"]';
        await page.waitForSelector(hubNameInputSelector);
        //await page.click(hubNameInputSelector, { clickCount: 3 });
        //await page.keyboard.press('Backspace');
        await page.fill(hubNameInputSelector,registrationData.hubNamefill);
        //registrationData.hubNamefill
        await page.waitForTimeout(5000);

        // Get the locator for the dropdown element
        const dropdownLocator = page.locator(adminPage.hubNameDropdown);

        // Get all the options of the dropdown except the first one
        const options = await dropdownLocator.evaluate((dropdown: any) => {
        return Array.from(dropdown.options)
        .map((option: any) => option.textContent)
        .filter((text: string | null, index: number) => index !== 0 && text !== null && text.trim() !== ""); // Filter out null and empty options and the first option
});

        // Select a random option if there are any options left
        if (options.length > 0) {
        const randomIndex = Math.floor(Math.random() * options.length);
        await dropdownLocator.selectOption({ index: randomIndex + 1 }); // Add 1 to the index to skip the first option
    }   
        else 
    {
        console.error("No valid options found in the dropdown");
    }




        //const hubdropdown = page.locator(adminPage.hubNameDropdown);
        //await hubdropdown.selectOption("Virtual Hub");
        
        //const yearDropDown = page.locator(adminPage.yearofEstablishment);
        //await yearDropDown.selectOption("2017");
        const yearDropDown = page.locator(adminPage.yearofEstablishment);

        // Get all the options of the year dropdown except the first one
        const yearOptions = await yearDropDown.evaluate((dropdown: any) => {
        return Array.from(dropdown.options)
        .map((option: any) => option.textContent)
        .filter((text: string | null, index: number) => index !== 0 && text !== null && text.trim() !== ""); // Filter out null and empty options and the first option
    });

        // Select a random option if there are any options left
        if (yearOptions.length > 0) {
        const randomYearIndex = Math.floor(Math.random() * yearOptions.length);
        await yearDropDown.selectOption({ index: randomYearIndex + 1 }); // Add 1 to the index to skip the first option
    }   else {
        console.error("No valid options found in the year dropdown");
}

        await page.fill(adminPage.visionName, registrationData.visionName); 
        await page.fill(adminPage.mission, registrationData.missionValue);
        await page.fill(adminPage.contactNo, registrationData.contactNo);
       // Fill person in charge dropdown
        await page.click(adminPage.personInchargeDrop);
        await page.click(adminPage.empValue);
        await page.fill(adminPage.address, registrationData.address);
        await page.fill(adminPage.pincode, pincodeData.pincode);
        await page.click(adminPage.doneButton);
        await page.waitForTimeout(2000);
        //const placeDropDown = page.locator(adminPage.placeDropDown);
        //await placeDropDown.selectOption('Darbhanga City SO');
        const placeDropDown = page.locator(adminPage.placeDropDown);

        // Get all the options of the place dropdown except the first one
        const placeOptions = await placeDropDown.evaluate((dropdown: any) => {
        return Array.from(dropdown.options)
        .map((option: any) => option.textContent)
        .filter((text: string | null, index: number) => index !== 0 && text !== null && text.trim() !== ""); // Filter out null and empty options and the first option
});

        // Select a random option if there are any options left
        if (placeOptions.length > 0) {
        const randomPlaceIndex = Math.floor(Math.random() * placeOptions.length);
        await placeDropDown.selectOption({ index: randomPlaceIndex + 1 }); // Add 1 to the index to skip the first option
}       else 
{
        console.error("No valid options found in the place dropdown");
}

        await page.fill(adminPage.emailId, registrationData.email);
        await page.click(adminPage.nextButton);
        await page.locator(adminPage.upLoad).setInputFiles('./upload/image2.jpg');
        await page.waitForTimeout(3000);
        await page.click(adminPage.submit);
        
        if (await page.isVisible(adminPage.successMsg, {TIMEOUT})) {
            const hubSuccessMessage = await page.locator(adminPage.successMsg).innerText();
            console.log('Entered Hub Name is:',"'", registrationData.hubNamefill,"'",hubSuccessMessage);
        }
    
        else if
    
        (await page.isVisible(adminPage.alreadyExist, {TIMEOUT})) {
            const hubErrorMessage = await page.locator(adminPage.alreadyExist).innerText();
            console.log('Entered Hub Name is:',"'",registrationData.hubNamefill,"'", hubErrorMessage);
        }
    
        else console.log('No Error Message Displayed');
        
        //await handleHubRegistrationResult({ page });
    },


async staffRegistration({ page }: NavigationParams): Promise<void> {
    await page.locator(homePage.adminPannel).click();
    
    //Click on the staff registration link
    await page.locator(homePage.staffRegistration).click();
    console.log("length",personJsonData.userData.length);
    for (let i=0; i< personJsonData.userData.length ; i++){
    // Click on the register staff button
    await page.locator(homePage.registerStaffButton).click();

    // Select a random option from the dropdown
    await page.click(adminPage.memberType);
    // Find the checkbox element by its value attribute
    const checkboxSelector = '[value="Staff"]';
    const checkbox = page.locator(checkboxSelector);

    // Check if the checkbox exists and is visible
    if (await checkbox.isVisible()) {
    // Click the checkbox to select it
    await checkbox.click();
    } else {
    console.error("Checkbox not found or not visible");
    }
    await page.click(adminPage.memberType);
    await page.waitForTimeout(3000);
    // Fill in the form fields
    //await page.click(adminPage.fullNameInput);
    await page.fill(adminPage.fullname, personJsonData.userData[i].Full_Name);
    //await page.pause();
    await page.fill(adminPage.mobileNumberInput, personJsonData.userData[i].Contact_No);
    await page.fill(adminPage.personalEmailInput, personJsonData.userData[i].Email);
    await page.click(adminPage.submitButton);
    await page.waitForTimeout(5000);
    //await page.pause();

    if (await page.isVisible(adminPage.successMessageSelector, {TIMEOUT})) {
        const staffSuccessMessage = await page.locator(adminPage.successMessageSelector).innerText();
        console.log('Entered Staff Name is:',"'", i,personData[i].Full_Name,"'",staffSuccessMessage);
    }

    else if

    (await page.isVisible(adminPage.errorMessageSelector, {TIMEOUT})) {
        const staffErrorMessage = await page.locator(adminPage.errorMessageSelector).innerText();
        console.log('Entered Staff Name is:',"'",i,personData[i].Full_Name,"'", staffErrorMessage);
    }

    else console.log('No Error Message Displayed');
}

    // const successMessageSelector = '[class="ng-tns-c1-6 toast-message ng-star-inserted"]';
    // const errorMessageSelector = '[class="ng-tns-c1-10 toast-message ng-star-inserted"]';
    
    // try {
    //     await page.waitForSelector(successMessageSelector, { timeout: 5000 });
    //     await page.screenshot({ path: 'success-message.png' });
    //     console.log("Staff registered successfully");
    // } catch (error) {
    //     try {
    //         await page.waitForSelector(errorMessageSelector, { timeout: 5000 });
    //         console.error("Error registering staff: Duplicate staff");
    //     } catch (error) {
    //         console.error("Error registering staff:", error);
    //     }
    // }
    // return;
},

// async staffRegistration({ page }: NavigationParams, numStaffMembers: number): Promise<void> {
//     for (let i = 0; i < numStaffMembers; i++) {
//         await page.locator(homePage.adminPannel).click();
//         await page.locator(homePage.staffRegistration).click();
//         await page.locator(homePage.registerStaffButton).click();

//         await page.click(adminPage.memberType);
//         const checkboxSelector = `input[type="checkbox"][value="Staff"]`;
//         const checkbox = page.locator(checkboxSelector);

//         if (await checkbox.isVisible()) {
//             await checkbox.click();
//         } else {
//             console.error("Checkbox not found or not visible");
//         }
//         await page.click(adminPage.memberType);
//         await page.waitForTimeout(3000);

//         // // Generate unique data for each staff member
//         // const fullName = `Staff ${i + 1}`;
//         // const contactNo = /* generate contact number */;
//         // const email = /* generate email */;

//         await page.fill(adminPage.fullname, personData.Full_Name);
//         await page.fill(adminPage.mobileNumberInput, personData.Contact_No);
//         await page.fill(adminPage.personalEmailInput, personData.Email);
//         await page.click(adminPage.submitButton);
//         await page.waitForTimeout(5000);

//         if (await page.isVisible(adminPage.successMessageSelector, { TIMEOUT })) {
//             const staffSuccessMessage = await page.locator(adminPage.successMessageSelector).innerText();
//             console.log('Entered Staff Name is:', "'", fullName, "'", staffSuccessMessage);
//         } else if (await page.isVisible(adminPage.errorMessageSelector, { TIMEOUT })) {
//             const staffErrorMessage = await page.locator(adminPage.errorMessageSelector).innerText();
//             console.log('Entered Staff Name is:', "'", fullName, "'", staffErrorMessage);
//         } else {
//             console.log('No Error Message Displayed');
//         }
//     }
// },

async assertMenu({ page }: NavigationParams): Promise<void> {
        const menuItems = await page.locator(homePage.homePageMenu);
        return menuItems;
    },

async scrollDownToLastOfPage({ page }: NavigationParams): Promise<void> {
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    },

async validateConactUsSection({ page }: NavigationParams): Promise<void> {
        await page.waitForSelector(homePage.conatactUsPagelast, { state: 'visible' });
        const contactUs = await page.locator(homePage.contactUsText).getByText("Contact us");
        expect(contactUs).toBeTruthy();
    }

};

//async function handleHubRegistrationResult({ page }: NavigationParams): Promise<void> {
    //const successMessageLocator = page.locator(adminPage.success);
    //const failureMessageLocator = page.locator(adminPage.Failure);

    //try {
        //await Promise.race([
            //successMessageLocator.waitFor({ state: 'visible' }),
            //failureMessageLocator.waitFor({ state: 'visible' })
        //]);

//         if (await successMessageLocator.isVisible()) {
//             const successMessage = await successMessageLocator.innerText();
//             console.log('Hub registration successful:', successMessage);
//         } else if (await failureMessageLocator.isVisible()) {
//             const failureMessage = await failureMessageLocator.innerText();
//             console.log('Hub registration failed:', failureMessage);

//             const screenshotPath = `./Screenshots/failure_${Date.now()}.png`;
//             await page.screenshot({ path: screenshotPath });
//         }
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }


export default { applicationHome };         
