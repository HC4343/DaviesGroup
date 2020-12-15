package com.davies.pages;

import com.davies.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LocationsPage extends BasePage{

    public LocationsPage() {
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(css = "li#menu-item-18261 > a")
    public WebElement aboutModule;

    @FindBy(css = "li#menu-item-18265 > a")
    public WebElement locationSubmodule;

    @FindBy(id = "marker0_12")
    public WebElement StokeOfficeDot;

    @FindBy(css = "li#desc0_12 >p")
    public WebElement OfficeAddress;

}
