package com.davies.pages;

import com.davies.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends BasePage{

    public HomePage() {

        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(css = "svg[width='40']")
    public WebElement twitterIcon;

    @FindBy(css = "svg[width='41']")
    public WebElement linkedinIcon;

    @FindBy(id = "dg-mouse-icon")
    public WebElement slider;

    @FindBy(className = "backgroundSlide pre-lazyload slick-slide slick-current slick-active")
    public WebElement slider2;

}
