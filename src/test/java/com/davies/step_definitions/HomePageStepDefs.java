package com.davies.step_definitions;

import com.davies.pages.HomePage;
import com.davies.utilities.BrowserUtils;
import com.davies.utilities.ConfigurationReader;
import com.davies.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.Set;

public class HomePageStepDefs {

    @Given("User is on Homepage")
    public void user_is_on_Homepage() {
        String url = ConfigurationReader.get("url");
        Driver.get().get(url);
    }

    @When("User clicks the Twitter Icon")
    public void user_clicks_the_Twitter_Icon() throws InterruptedException {
        JavascriptExecutor jse =(JavascriptExecutor) Driver.get();
        for(int i=0; i<20; i++){
            Thread.sleep(500);
            jse.executeScript("window.scrollBy(0,250)");
        }

        HomePage homePage = new HomePage();
        WebElement twitter = homePage.twitterIcon;

        twitter.click();
        Thread.sleep(2000);
    }

    @Then("User should be on Twitter website")
    public void user_should_be_on_Twitter_website() throws InterruptedException {
        String currentWindowHandle = Driver.get().getWindowHandle();
        //System.out.println("currentWindowHandle = " + currentWindowHandle);

        Set<String> windowHandles = Driver.get().getWindowHandles();
        //System.out.println(windowHandles.size());

        for (String handle : windowHandles) {
            if(!currentWindowHandle.equals(handle)){
                Driver.get().switchTo().window(handle);
            }
        }

        String expectedUrl = "https://twitter.com/Davies_Group";
        String actualUrl = Driver.get().getCurrentUrl();
        //System.out.println("currentUrl = " + actualUrl);

        Assert.assertEquals(expectedUrl, actualUrl);

        Thread.sleep(1000);
    }

    @When("User clicks the LinkedIn Icon")
    public void user_clicks_the_LinkedIn_Icon() throws InterruptedException {
        JavascriptExecutor jse =(JavascriptExecutor) Driver.get();
        for(int i=0; i<20; i++){
            Thread.sleep(500);
            jse.executeScript("window.scrollBy(0,250)");
        }

        HomePage homePage = new HomePage();
        WebElement linkedin = homePage.linkedinIcon;

        linkedin.click();
        Thread.sleep(2000);
    }

    @Then("User should be on LinkedIn website")
    public void user_should_be_on_LinkedIn_website() throws InterruptedException {

        String currentWindowHandle = Driver.get().getWindowHandle();
        //System.out.println("currentWindowHandle = " + currentWindowHandle);

        Set<String> windowHandles = Driver.get().getWindowHandles();
        //System.out.println(windowHandles.size());

        for (String handle : windowHandles) {
            if(!currentWindowHandle.equals(handle)){
                Driver.get().switchTo().window(handle);
            }
        }

        //String expectedUrl = "https://www.linkedin.com/company/daviesgroup/";
        //It asks credential to login to the linkedIn so I only if I nivagated to linkedIn

        String actualUrl = Driver.get().getCurrentUrl();
        //System.out.println("currentUrl = " + actualUrl);

        //Assert.assertEquals(expectedUrl, actualUrl);
        Assert.assertTrue(actualUrl.contains("https://www.linkedin.com/"));

        Thread.sleep(1000);
    }



}
