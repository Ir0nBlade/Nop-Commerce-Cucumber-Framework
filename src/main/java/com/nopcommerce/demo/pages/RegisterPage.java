package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RegisterPage extends Utility {

    private static final Logger log = LogManager.getLogger(RegisterPage.class.getName());

    public RegisterPage() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//h1[contains(text(),'Register')]")
    WebElement registerText;

    @FindBy(xpath = "//input[@name='Gender']")
    WebElement gender;

    @FindBy(id = "FirstName")
    WebElement firstName;

    @FindBy(id = "LastName")
    WebElement lastName;

    @FindBy(xpath = "//select[@name='DateOfBirthDay']")
    WebElement dateOfBirthDay;

    @FindBy(xpath = "//select[@name='DateOfBirthMonth']")
    WebElement dateOfBirthMonth;

    @FindBy(xpath = "//select[@name='DateOfBirthYear']")
    WebElement dateOfBirthYear;

    @FindBy(id = "Email")
    WebElement email;

    @FindBy(id = "Password")
    WebElement password;

    @FindBy(id = "ConfirmPassword")
    WebElement confirmPassword;

    @FindBy(id = "register-button")
    WebElement registerButton;

    @FindBy(id = "FirstName-error")
    WebElement firstNameErrorText;

    @FindBy(id = "LastName-error")
    WebElement lastNameErrorText;

    @FindBy(id = "Email-error")
    WebElement emailErrorText;

    @FindBy(id = "Password-error")
    WebElement passwordErrorText;

    @FindBy(id = "ConfirmPassword-error")
    WebElement confirmPasswordErrorText;

    @FindBy(xpath = "//div[contains(text(),'Your registration completed')]")
    WebElement registrationCompleted;

    @FindBy(xpath = "//a[contains(text(),'Continue')]")
    WebElement contineBtn;


    public void verifyRegisterText(String text) {
        verifyThatTextIsDisplayed(registerText, text);
    }

    public String getMessage(){
        String message = getTextFromElement(registerText);
        return message;
    }

    public void selectGender(String text) {
        clickOnElement(gender, text);
        log.info("Selecting Gender: " + gender.toString());
    }

    public void inputFirstName(String name) {
        sendTextToElement(firstName, name);
        log.info("Entering First Name: " + firstName.toString());
    }

    public void inputLastName(String lname) {
        sendTextToElement(lastName, lname);
        log.info("Entering Last name: " + lastName.toString());
    }

    public void inputEmail(String text) {
        sendTextToElement(email, text);
        log.info("Entering Email: " + email.toString());
    }

//    public void selectDateOfBirth(String day, String month, String year) {
//        selectByVisibleTextFromDropDown(dateOfBirthDay, day);
//
//        selectByVisibleTextFromDropDown(dateOfBirthMonth, month);
//
//        selectByVisibleTextFromDropDown(dateOfBirthYear, year);
//
//    }

    public void selectDayforDOBField(String day){
        selectByVisibleTextFromDropDown(dateOfBirthDay, day);
        log.info("Selecting Day for Date of Birth: " + dateOfBirthDay.toString());
    }

    public void selectMonthForDOBField(String month){
        selectByVisibleTextFromDropDown(dateOfBirthMonth, month);
        log.info("Selecting Month for Date of Birth: " + dateOfBirthMonth.toString());
    }

    public void selectYearForDOBField(String year){
        selectByVisibleTextFromDropDown(dateOfBirthYear, year);
        log.info("Selecting Year for Data of Birth: " + dateOfBirthYear.toString());
    }

    public void inputPassword(String pswd) {
        sendTextToElement(password, pswd);
        log.info("Selecting Year for Data of Birth: " + dateOfBirthYear.toString());
    }

    public void inputConfirmPassword(String cpassword) {
        sendTextToElement(confirmPassword, cpassword);
        log.info("Entering confirm password: " + cpassword.toString());
    }

    public void clickOnRegisterButton() {
        clickOnElement(registerButton);
        log.info("Clicking on Register button: " + registerButton.toString());

    }

    public void verifyFirstNameReqiredErrorText(String text) {
        verifyThatTextIsDisplayed(firstNameErrorText, text);
        log.info("Selecting Year for Data of Birth: " + dateOfBirthYear.toString());
    }

    public void verifyLastNameReqiredErrorText(String text) {
        verifyThatTextIsDisplayed(lastNameErrorText, text);
        log.info("Verifying Last Name required error message: " + lastNameErrorText.toString());
    }

    public void verifyEmailReqiredErrorText(String text) {
        verifyThatTextIsDisplayed(emailErrorText, text);
        log.info("Verifying Email required error message: " + emailErrorText.toString());
    }

    public void verifyPasswordReqiredErrorText(String text) {
        verifyThatTextIsDisplayed(passwordErrorText, text);
        log.info("Verifying Password required error message: " + passwordErrorText.toString());
    }

    public void verifyConfirmPasswordReqiredErrorText(String text) {
        verifyThatTextIsDisplayed(confirmPasswordErrorText, text);
        log.info("Verifying confirm password required error message: " + confirmPasswordErrorText.toString());
    }

    public void verifyRegistrationCompletedText(String text) {
        verifyThatTextIsDisplayed(registrationCompleted, text);
        log.info("Verifying Registration completed message: " + registrationCompleted.toString());
    }

    public void clickOnContinueButton() {
        clickOnElement(contineBtn);
        log.info("Clicking on Continue Button " + contineBtn.toString());

    }
}

