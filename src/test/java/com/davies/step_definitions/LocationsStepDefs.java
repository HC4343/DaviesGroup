package com.davies.step_definitions;

import com.davies.pages.LocationsPage;
import com.davies.utilities.BrowserUtils;
import com.davies.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

public class LocationsStepDefs {

    @Given("User navigates to About Module")
    public void user_navigates_to_About_Module() throws InterruptedException {
        LocationsPage locationsPage = new LocationsPage();
        WebElement aboutModule = locationsPage.aboutModule;
        BrowserUtils.hover(aboutModule);
        Thread.sleep(1000);
    }

    @Given("User clicks Locations Submodule")
    public void user_clicks_Locations_Submodule() throws InterruptedException {
        LocationsPage locationsPage = new LocationsPage();
        WebElement locationsSubmodule = locationsPage.locationSubmodule;

        JavascriptExecutor jse =(JavascriptExecutor) Driver.get();
        jse.executeScript("arguments[0].click();",locationsSubmodule);
        Thread.sleep(1000);
    }

    @When("User navigates Stoke Office Location on map")
    public void user_navigates_Stoke_Office_Location_on_map() throws InterruptedException {
        JavascriptExecutor jse =(JavascriptExecutor) Driver.get();
        for(int i=0; i<2; i++){
            Thread.sleep(500);
            jse.executeScript("window.scrollBy(0,250)");
        }

        Thread.sleep(1000);

        LocationsPage locationsPage = new LocationsPage();
        WebElement officeLocation = locationsPage.StokeOfficeDot;
        officeLocation.click();

        Thread.sleep(1000);
    }

    @Then("User should capture the Stoke Office address")
    public void user_should_capture_the_Stoke_Office_address() throws InterruptedException {
        LocationsPage locationsPage = new LocationsPage();
        String expectedAddress = "3rd and 4th Floors, No.2 Smithfields, Stoke-on-Trent ST1 3DH, UK.";
        String officeAddress = locationsPage.OfficeAddress.getText();
        System.out.println("officeAddress = " + officeAddress);

        Assert.assertEquals(expectedAddress, officeAddress);

        Thread.sleep(1000);
    }

}
