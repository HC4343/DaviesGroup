package com.davies.step_definitions;

import com.davies.pages.SolutionsPage;
import com.davies.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class SolutionsStepDefs {

    @Given("User navigates to Solutions Module")
    public void user_navigates_to_Solutions_Module() {
        SolutionsPage solutionsPage = new SolutionsPage();

        WebElement solutionsModule = solutionsPage.solutionsModule;
        solutionsModule.click();
    }

    @Given("User finds Fire Investigation Case Study")
    public void user_finds_Fire_Investigation_Case_Study() throws InterruptedException {
        JavascriptExecutor jse =(JavascriptExecutor) Driver.get();
        for(int i=0; i<5; i++){
            Thread.sleep(500);
            jse.executeScript("window.scrollBy(0,250)");
        }

        SolutionsPage solutionsPage = new SolutionsPage();
        solutionsPage.viewAllButton.click();

        for(int i=0; i<10; i++){
            Thread.sleep(500);
            jse.executeScript("window.scrollBy(0,250)");
        }

        solutionsPage.loadMoreButton.click();

        for(int i=0; i<8; i++){
            Thread.sleep(500);
            jse.executeScript("window.scrollBy(0,250)");
        }

        solutionsPage.loadMoreButton.click();

        for(int i=0; i<4; i++){
            Thread.sleep(500);
            jse.executeScript("window.scrollBy(0,250)");
        }
    }

    @When("User clicks on Fire Investigation Case Study")
    public void user_clicks_on_Fire_Investigation_Case_Study() {
        SolutionsPage solutionsPage = new SolutionsPage();
        WebElement fireInvestigationCase = solutionsPage.fireInvestigationCase;
        fireInvestigationCase.click();
    }

    @Then("User should be in Fire Investigation Case Study page")
    public void user_should_be_in_Fire_Investigation_Case_Study_page() {
        String expectedUrl = "https://davies-group.com/case-study/fire-investigation/";
        String actualUrl = Driver.get().getCurrentUrl();
        System.out.println("currentUrl = " + actualUrl);

        Assert.assertEquals(expectedUrl, actualUrl);
    }

    @Then("User should capture the Result Section")
    public void user_should_capture_the_Result_Section() throws InterruptedException {
        SolutionsPage solutionsPage = new SolutionsPage();
        WebElement resultSection = solutionsPage.ResultsText;

        String expectedText = "The dealership accepted fault and with an outlay to us of £1,495 made a recovery of £46,353.";
        String actualText = resultSection.getText();
        System.out.println(actualText);

        Assert.assertEquals(expectedText, actualText);

        Thread.sleep(1000);
    }

}
